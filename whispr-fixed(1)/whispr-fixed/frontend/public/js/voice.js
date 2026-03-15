// ============================================================
// WHISPR — Voice Messages (fixed)
//
// Interaction model:
//   Quick tap  (<300ms mousedown→mouseup) = click-toggle:
//              first tap starts, second tap stops+sends
//   Hold       (≥300ms held)              = push-to-talk:
//              release stops+sends
//
// Key fix: ALL logic lives in pointerdown/pointerup/pointercancel.
// No onclick handler — that was causing double-fire / race conditions.
// ============================================================

let mediaRecorder      = null;
let audioChunks        = [];
let recordingStream    = null;
let recordingStartTime = null;
let timerInterval      = null;
let analyserNode       = null;
let analyserCtx        = null;
let animFrameId        = null;
let isRecording        = false;

// Pointer-hold tracking
let pointerDownAt   = null;
let pointerDownId   = null;
const HOLD_MS       = 300;

// ── INIT (called once DOM is ready) ──────────────────────────
function initVoiceButton() {
  const btn = document.getElementById('voiceBtn');
  if (!btn) return;

  // Use pointer events — handles mouse + touch uniformly
  btn.addEventListener('pointerdown', onPointerDown, { passive: false });
  btn.addEventListener('pointerup',   onPointerUp,   { passive: false });
  btn.addEventListener('pointercancel', onPointerCancel, { passive: false });

  // Prevent context-menu on long-press (mobile)
  btn.addEventListener('contextmenu', e => e.preventDefault());
}

function onPointerDown(e) {
  e.preventDefault();
  pointerDownAt = Date.now();
  pointerDownId = e.pointerId;
  try { e.target.setPointerCapture(e.pointerId); } catch {}
}

function onPointerUp(e) {
  e.preventDefault();
  if (pointerDownAt === null) return;

  const held = Date.now() - pointerDownAt;
  pointerDownAt = null;
  pointerDownId = null;

  if (held >= HOLD_MS) {
    // ── HOLD mode: release = stop + send ──
    if (isRecording) stopAndSend();
  } else {
    // ── TAP mode: toggle ──
    if (!isRecording) {
      startRecording();
    } else {
      stopAndSend();
    }
  }
}

function onPointerCancel(e) {
  // Pointer was interrupted (e.g. incoming call) — cancel cleanly
  pointerDownAt = null;
  if (isRecording) cancelRecording();
}

// Wire up after scripts load
document.addEventListener('DOMContentLoaded', initVoiceButton);
// Also try immediately in case DOM is already ready
if (document.readyState !== 'loading') {
  setTimeout(initVoiceButton, 0);
}

// ── START RECORDING ───────────────────────────────────────────
async function startRecording() {
  if (isRecording) return;

  try {
    recordingStream = await navigator.mediaDevices.getUserMedia({
      audio: { echoCancellation: true, noiseSuppression: true, sampleRate: 44100 }
    });
  } catch (err) {
    showToast('info', 'Microphone access denied', 'Please allow microphone access to send voice messages.');
    return;
  }

  // Live waveform analyser
  analyserCtx  = new (window.AudioContext || window.webkitAudioContext)();
  const src    = analyserCtx.createMediaStreamSource(recordingStream);
  analyserNode = analyserCtx.createAnalyser();
  analyserNode.fftSize = 256;
  src.connect(analyserNode);

  // Best supported MIME type
  const mimeType = ['audio/webm;codecs=opus', 'audio/webm', 'audio/ogg;codecs=opus', 'audio/ogg', 'audio/mp4']
    .find(m => { try { return MediaRecorder.isTypeSupported(m); } catch { return false; } }) || '';

  try {
    mediaRecorder = new MediaRecorder(recordingStream, mimeType ? { mimeType } : {});
  } catch {
    mediaRecorder = new MediaRecorder(recordingStream);
  }

  audioChunks = [];
  mediaRecorder.ondataavailable = e => { if (e.data && e.data.size > 0) audioChunks.push(e.data); };
  mediaRecorder.onstop = handleRecordingStop;
  mediaRecorder.start(100);

  isRecording        = true;
  recordingStartTime = Date.now();

  setRecordingUI(true);
  startTimer();
  drawLiveWave();
}

// ── STOP + SEND ───────────────────────────────────────────────
function stopAndSend() {
  if (!isRecording || !mediaRecorder) return;
  // Flag before stop so handleRecordingStop knows to send
  mediaRecorder._shouldSend = true;
  mediaRecorder.stop();
  recordingStream.getTracks().forEach(t => t.stop());
  isRecording = false;
  stopTimer();
  cancelAnimationFrame(animFrameId);
  setRecordingUI(false);
}

// ── CANCEL ────────────────────────────────────────────────────
function cancelRecording() {
  if (!mediaRecorder) return;
  mediaRecorder._shouldSend = false;
  if (mediaRecorder.state !== 'inactive') {
    try { mediaRecorder.stop(); } catch {}
  }
  recordingStream?.getTracks().forEach(t => t.stop());
  analyserCtx?.close().catch(() => {});
  isRecording = false;
  audioChunks = [];
  stopTimer();
  cancelAnimationFrame(animFrameId);
  setRecordingUI(false);

  // Shake animation
  document.getElementById('voiceBtn')?.animate([
    { transform: 'scale(1) rotate(0deg)' },
    { transform: 'scale(0.82) rotate(-10deg)' },
    { transform: 'scale(1.06) rotate(5deg)' },
    { transform: 'scale(1) rotate(0deg)' },
  ], { duration: 320, easing: 'ease-out' });
}

// ── AFTER RECORDER STOPS ─────────────────────────────────────
function handleRecordingStop() {
  analyserCtx?.close().catch(() => {});
  if (!mediaRecorder._shouldSend) return; // was cancelled
  finalise();
}

// ── FINALISE: blob → upload → send ───────────────────────────
async function finalise() {
  if (!audioChunks.length) {
    showToast('info', 'No audio recorded', 'Recording was too short.');
    return;
  }

  const duration = (Date.now() - recordingStartTime) / 1000;
  if (duration < 0.5) {
    showToast('info', 'Too short', 'Hold the mic button for at least half a second.');
    return;
  }

  const mimeType = mediaRecorder.mimeType || 'audio/webm';
  const ext = mimeType.includes('ogg') ? '.ogg'
            : mimeType.includes('mp4') ? '.mp4'
            : '.webm';

  const blob = new Blob(audioChunks, { type: mimeType });
  audioChunks = [];

  // Show uploading spinner on button
  const btn = document.getElementById('voiceBtn');
  btn?.classList.add('uploading');

  try {
    const form = new FormData();
    form.append('audio', blob, `voice${ext}`);

    const res = await fetch('/api/voice/upload', {
      method: 'POST',
      headers: { Authorization: `Bearer ${localStorage.getItem('whispr_token')}` },
      body: form,
    });

    if (!res.ok) {
      let errMsg = 'Upload failed';
      try { errMsg = (await res.json()).error || errMsg; } catch {}
      showToast('info', 'Upload failed', errMsg);
      return;
    }

    const data = await res.json();
    if (!data.url) { showToast('info', 'Upload failed', 'Server returned no URL.'); return; }

    sendVoiceMessage(data.url, duration);

  } catch (err) {
    console.error('Voice upload error:', err);
    showToast('info', 'Upload failed', 'Network error — please try again.');
  } finally {
    btn?.classList.remove('uploading');
  }
}

// ── SEND VIA SOCKET ───────────────────────────────────────────
function sendVoiceMessage(fileUrl, duration) {
  if (!currentChat) {
    showToast('info', 'No chat open', 'Open a conversation first.');
    return;
  }

  playSendTone();

  const content = `[voice:${fileUrl}]`;
  const tempId  = `temp_${Date.now()}_${_tempMsgSeq++}`;

  const tempMsg = {
    _id: tempId,
    sender: { _id: currentUser._id },
    receiver: currentChat.userId,
    content,
    voiceDuration: duration,
    createdAt: new Date().toISOString(),
    readAt: null,
  };

  appendMessage(tempMsg);
  scrollToBottom();

  if (!messagePreviews[currentChat.userId]) messagePreviews[currentChat.userId] = { unreadCount: 0 };
  messagePreviews[currentChat.userId].lastMessage = {
    ...tempMsg,
    content: `🎙️ Voice (${formatDur(duration)})`,
  };
  renderFriendsList();

  socket.emit('send_message', {
    receiverId:    currentChat.userId,
    content,
    tempId,
    voiceDuration: duration,
    voiceFile:     fileUrl,
  });

  animateSendSuccess();
}

// ── UI HELPERS ────────────────────────────────────────────────
function setRecordingUI(on) {
  const btn  = document.getElementById('voiceBtn');
  const bar  = document.getElementById('voiceRecordingBar');
  const iw   = document.getElementById('inputWrap');
  const imic = document.getElementById('voiceIconMic');
  const istp = document.getElementById('voiceIconStop');

  if (on) {
    btn?.classList.add('recording');
    imic?.classList.add('hidden');
    istp?.classList.remove('hidden');
    bar?.classList.remove('hidden');
    iw?.classList.add('input-wrap-recording');
    // Size the canvas to its container width
    requestAnimationFrame(() => {
      const c = document.getElementById('waveformCanvas');
      if (c) c.width = c.offsetWidth || 200;
    });
  } else {
    btn?.classList.remove('recording');
    imic?.classList.remove('hidden');
    istp?.classList.add('hidden');
    bar?.classList.add('hidden');
    iw?.classList.remove('input-wrap-recording');
  }
}

// ── TIMER ─────────────────────────────────────────────────────
function startTimer() {
  let s = 0;
  const el = document.getElementById('voiceTimer');
  if (el) el.textContent = '0:00';
  timerInterval = setInterval(() => {
    s++;
    if (el) el.textContent = formatDur(s);
    if (s >= 120) stopAndSend(); // 2-min hard cap
  }, 1000);
}

function stopTimer() {
  clearInterval(timerInterval);
  timerInterval = null;
}

function formatDur(secs) {
  const m = Math.floor(secs / 60);
  const s = Math.floor(secs % 60);
  return `${m}:${String(s).padStart(2, '0')}`;
}

// ── LIVE WAVEFORM CANVAS ──────────────────────────────────────
function drawLiveWave() {
  const c = document.getElementById('waveformCanvas');
  if (!c || !analyserNode) return;

  const ctx    = c.getContext('2d');
  const bufLen = analyserNode.frequencyBinCount;
  const data   = new Uint8Array(bufLen);

  function frame() {
    animFrameId = requestAnimationFrame(frame);
    if (!isRecording) { ctx.clearRect(0, 0, c.width, c.height); return; }

    const W = c.width  || 200;
    const H = c.height || 32;
    ctx.clearRect(0, 0, W, H);

    analyserNode.getByteTimeDomainData(data);

    const barW = 3;
    const gap  = 2;
    const count = Math.floor(W / (barW + gap));
    const step  = Math.max(1, Math.floor(bufLen / count));

    for (let i = 0; i < count; i++) {
      const sample = (data[i * step] ?? 128) / 128 - 1;
      const barH   = Math.max(3, Math.abs(sample) * H * 2.2);
      const x = i * (barW + gap);
      const y = (H - barH) / 2;

      const grad = ctx.createLinearGradient(0, y, 0, y + barH);
      grad.addColorStop(0,   'rgba(124,106,247,0.85)');
      grad.addColorStop(0.5, 'rgba(167,139,250,1)');
      grad.addColorStop(1,   'rgba(124,106,247,0.85)');
      ctx.fillStyle = grad;
      ctx.beginPath();
      if (ctx.roundRect) ctx.roundRect(x, y, barW, barH, 1.5);
      else               ctx.rect(x, y, barW, barH);
      ctx.fill();
    }
  }

  frame();
}

// ── SUCCESS ANIMATION ─────────────────────────────────────────
function animateSendSuccess() {
  const btn = document.getElementById('voiceBtn');
  if (!btn) return;
  btn.animate([
    { transform: 'scale(1)',    backgroundColor: 'var(--accent)' },
    { transform: 'scale(1.4)', backgroundColor: '#34d399', offset: 0.4 },
    { transform: 'scale(0.9)', backgroundColor: '#34d399', offset: 0.65 },
    { transform: 'scale(1)',   backgroundColor: 'var(--accent)' },
  ], { duration: 560, easing: 'cubic-bezier(0.34,1.56,0.64,1)' });
}
