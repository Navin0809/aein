// ============================================================
// WHISPR — Main App JS  (real-time edition)
// ============================================================

const API = '/api';
let socket = null;
let currentUser = null;
let currentChat = null;
let friends = [];
let typingTimer = null;
let isTyping = false;
let messagePreviews = {};
let pendingRequests = [];
let totalUnreadMessages = 0;

// ---- INIT ----
(async function init() {
  const token = localStorage.getItem('whispr_token');
  if (!token) return (window.location.href = '/');
  const stored = localStorage.getItem('whispr_user');
  if (stored) currentUser = JSON.parse(stored);
  renderMyProfile();
  await Promise.all([loadFriends(), loadMessagePreviews(), loadFriendRequests()]);
  connectSocket(token);
  requestNotificationPermission();
})();

// ---- BROWSER NOTIFICATIONS ----
function requestNotificationPermission() {
  if ('Notification' in window && Notification.permission === 'default') {
    Notification.requestPermission();
  }
}

function sendBrowserNotification(title, body) {
  if ('Notification' in window && Notification.permission === 'granted' && document.hidden) {
    new Notification(title, { body });
  }
}

// ---- TOAST SYSTEM ----
function showToast(type, title, body, actions) {
  const container = document.getElementById('toastContainer');
  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;

  const iconMap = {
    message:  `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`,
    request:  `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><line x1="19" y1="8" x2="19" y2="14"/><line x1="22" y1="11" x2="16" y2="11"/></svg>`,
    accepted: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6 9 17l-5-5"/></svg>`,
    info:     `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>`,
  };

  let actionsHtml = '';
  if (actions && actions.length) {
    actionsHtml = `<div class="toast-actions">${
      actions.map(a => `<button class="toast-action-btn toast-action-${a.style||'primary'}" onclick="${a.fn}; this.closest('.toast').remove()">${a.label}</button>`).join('')
    }</div>`;
  }

  toast.innerHTML = `
    <div class="toast-icon toast-icon-${type}">${iconMap[type] || iconMap.info}</div>
    <div class="toast-body">
      <div class="toast-title">${escHtml(title)}</div>
      ${body ? `<div class="toast-text">${escHtml(body)}</div>` : ''}
      ${actionsHtml}
    </div>
    <button class="toast-close" onclick="dismissToast(this.closest('.toast'))">
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 6 6 18M6 6l12 12"/></svg>
    </button>
    <div class="toast-progress"></div>
  `;

  container.appendChild(toast);
  requestAnimationFrame(() => toast.classList.add('toast-visible'));

  const delay = actions?.length ? 8000 : 5000;
  const progress = toast.querySelector('.toast-progress');
  setTimeout(() => { progress.style.transition = `width ${delay}ms linear`; progress.style.width = '0%'; }, 50);

  let timer = setTimeout(() => dismissToast(toast), delay);
  toast.addEventListener('mouseenter', () => { clearTimeout(timer); progress.style.transition = 'none'; });
  toast.addEventListener('mouseleave', () => {
    const pct = parseFloat(getComputedStyle(progress).width) / (toast.offsetWidth || 300);
    const rem = pct * delay;
    progress.style.transition = `width ${rem}ms linear`;
    progress.style.width = '0%';
    timer = setTimeout(() => dismissToast(toast), rem);
  });
}

function dismissToast(toast) {
  if (!toast) return;
  toast.classList.remove('toast-visible');
  toast.addEventListener('transitionend', () => toast.remove(), { once: true });
}

function dismissAllToasts() {
  document.querySelectorAll('.toast').forEach(t => dismissToast(t));
}

// ---- TITLE BADGE ----
function updateTitleBadge() {
  totalUnreadMessages = Object.values(messagePreviews).reduce((s, p) => s + (p.unreadCount || 0), 0);
  const total = totalUnreadMessages + pendingRequests.length;
  document.title = total > 0 ? `(${total}) Whispr` : 'Whispr';
}

// ---- SOCKET ----
function connectSocket(token) {
  socket = io({
    path: '/socket.io/',
    auth: { token },
    transports: ['websocket', 'polling'],   // try WS first, fall back to polling
    reconnection: true,
    reconnectionAttempts: Infinity,
    reconnectionDelay: 1000,
    reconnectionDelayMax: 5000,
    timeout: 10000
  });

  socket.on('connect', () => {
    const banner = document.getElementById('connectionStatus');
    banner.classList.add('hidden');
    banner.classList.remove('banner-error');
  });

  socket.on('connect_error', (err) => {
    console.warn('Socket connect error:', err.message);
    showConnectionBanner('error');
  });

  socket.on('disconnect', (reason) => {
    console.warn('Socket disconnected:', reason);
    if (reason !== 'io client disconnect') {
      showConnectionBanner('reconnecting');
    }
  });

  socket.on('reconnect_attempt', (n) => {
    showConnectionBanner('reconnecting', n);
  });

  socket.on('reconnect', () => {
    const banner = document.getElementById('connectionStatus');
    banner.classList.add('hidden');
    showToast('info', 'Back online', 'Connection restored.');
  });

// MESSAGES
  socket.on('new_message', (msg) => {
    const senderId = msg.sender._id || msg.sender;
    const isCurrentChat = currentChat && currentChat.userId === senderId;

    if (!messagePreviews[senderId]) messagePreviews[senderId] = { unreadCount: 0 };
    messagePreviews[senderId].lastMessage = msg;

    if (isCurrentChat) {
      appendMessage(msg);
      scrollToBottom();
      socket.emit('mark_read', { senderId });
      // 🎆 Trigger FX for received sticker
      if (msg.content && msg.content.startsWith('[sticker:')) {
        const stickerId = msg.content.slice(9, -1);
        if (typeof triggerStickerFx === 'function') triggerStickerFx(stickerId);
      }
      // 🎆 Trigger FX for received GIF
      if (msg.content && msg.content.startsWith('[gifsvg:')) {
        const gifId = msg.content.slice(8, -1);
        if (typeof triggerGifFx === 'function') triggerGifFx(gifId);
      }
    } else {
      messagePreviews[senderId].unreadCount = (messagePreviews[senderId].unreadCount || 0) + 1;
      const name = msg.sender.username || 'Someone';
      const preview = msg.content.startsWith('[sticker:') ? '🎭 Sticker' : msg.content.startsWith('[gif:') ? '🎞️ GIF' : msg.content;
      showToast('message', name, preview, [
        { label: 'Open chat', fn: `openChatById('${senderId}')`, style: 'primary' }
      ]);
      sendBrowserNotification('💬 ' + name, preview);
    }

    renderFriendsList();
    updateTitleBadge();
  });

  // Server confirmed our message — use deliveryStatus it sends back
  socket.on('message_sent', (realMsg) => {
    if (!realMsg.tempId) return;
    const tempEl = document.querySelector(`[data-msg-id="${realMsg.tempId}"]`);
    if (!tempEl) return;
    if (realMsg._id) tempEl.dataset.msgId = realMsg._id;
    const statusEl = tempEl.querySelector('.msg-status');
    // 'sent' = receiver offline, 'delivered' = receiver online
    transitionStatus(statusEl, realMsg.deliveryStatus || 'sent');
  });

  // Receiver just came online — their pending messages from us are now delivered
  socket.on('messages_delivered', ({ to, messageIds }) => {
    if (!currentChat || currentChat.userId !== to) return;
    const idSet = new Set(messageIds);
    document.querySelectorAll('.msg.mine').forEach(el => {
      if (!idSet.has(el.dataset.msgId)) return;
      const statusEl = el.querySelector('.msg-status');
      if (statusEl && !statusEl.classList.contains('status-delivered') && !statusEl.classList.contains('status-seen')) {
        transitionStatus(statusEl, 'delivered');
      }
    });
  });

  // STATUS
  socket.on('user_status', ({ userId, isOnline, lastSeen }) => {
    const f = friends.find(f => f._id === userId);
    if (f) { f.isOnline = isOnline; f.lastSeen = lastSeen; }
    renderFriendsList();
    if (currentChat?.userId === userId) updateChatStatus(isOnline, lastSeen);
  });

  // TYPING
  socket.on('user_typing', ({ senderId, isTyping: typing }) => {
    if (!currentChat || currentChat.userId !== senderId) return;
    document.getElementById('typingName').textContent = currentChat.username;
    document.getElementById('typingIndicator').classList.toggle('hidden', !typing);
  });

  // READ RECEIPTS — animate only the specific message IDs just seen
  socket.on('messages_read', ({ by, messageIds }) => {
    if (!currentChat || currentChat.userId !== by) return;
    if (!messageIds || messageIds.length === 0) return;
    const idSet = new Set(messageIds);
    const toAnimate = [];
    document.querySelectorAll('.msg.mine').forEach(el => {
      if (idSet.has(el.dataset.msgId)) toAnimate.push(el);
    });
    toAnimate.forEach((el, i) => {
      setTimeout(() => {
        const statusEl = el.querySelector('.msg-status');
        if (statusEl && !statusEl.classList.contains('status-seen')) {
          transitionStatus(statusEl, 'seen');
        }
      }, i * 55);
    });
  });

  // FRIEND REQUEST RECEIVED
  socket.on('friend_request', ({ request }) => {
    if (!pendingRequests.find(r => r._id.toString() === request._id.toString())) {
      pendingRequests.push(request);
    }
    updateRequestBadge();
    renderRequestsPanel();
    updateTitleBadge();

    showToast('request', request.sender.username + ' wants to connect', 'New friend request', [
      { label: '✓ Accept',  fn: `respondRequest('${request._id}','accepted')`, style: 'primary' },
      { label: '✕ Decline', fn: `respondRequest('${request._id}','rejected')`, style: 'ghost'   },
    ]);
    sendBrowserNotification('👋 Friend request', request.sender.username + ' wants to connect');
  });

  // FRIEND ACCEPTED
  socket.on('friend_accepted', ({ friend }) => {
    if (!friends.find(f => f._id.toString() === friend._id.toString())) {
      friends.push(friend);
      document.getElementById('friendCount').textContent = friends.length;
      renderFriendsList();
    }
    showToast('accepted', friend.username + ' accepted your request!', 'You are now friends', [
      { label: 'Say hi 👋', fn: `openChatById('${friend._id}')`, style: 'primary' }
    ]);
    sendBrowserNotification('✅ Friend accepted', friend.username + ' accepted your request');
  });

  socket.on('friend_rejected', () => {});
}

// ── CONNECTION BANNER ──
function showConnectionBanner(type = 'reconnecting', attempt = null) {
  const banner = document.getElementById('connectionStatus');
  const icons = {
    reconnecting: `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/></svg>`,
    error: `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>`
  };
  const label = type === 'error'
    ? 'Connection failed — retrying…'
    : attempt ? `Reconnecting… (attempt ${attempt})` : 'Reconnecting…';
  banner.innerHTML = `${icons[type] || icons.reconnecting} ${label}`;
  banner.classList.remove('hidden');
  banner.classList.toggle('banner-error', type === 'error');
}

// ---- PROFILE ----
function renderMyProfile() {
  if (!currentUser) return;
  const av = document.getElementById('myAvatar');
  av.textContent = currentUser.username[0].toUpperCase();
  av.className = `avatar av-${hashColor(currentUser.username)}`;
  document.getElementById('myUsername').textContent = currentUser.username;
}

function hashColor(str) {
  let h = 0;
  for (const c of str) h = (h * 31 + c.charCodeAt(0)) % 6;
  return h;
}

function getInitial(u) { return u ? u[0].toUpperCase() : '?'; }

// ---- FRIENDS ----
async function loadFriends() {
  try {
    const res = await apiFetch('/friends');
    friends = await res.json();
    document.getElementById('friendCount').textContent = friends.length;
    renderFriendsList();
  } catch (e) { console.error(e); }
}

async function loadMessagePreviews() {
  try {
    const res = await apiFetch('/messages/preview/all');
    const previews = await res.json();
    messagePreviews = {};
    previews.forEach(p => { messagePreviews[p._id] = { lastMessage: p.lastMessage, unreadCount: p.unreadCount }; });
    renderFriendsList();
    updateTitleBadge();
  } catch (e) { console.error(e); }
}

function renderFriendsList() {
  const list = document.getElementById('friendsList');
  if (!friends.length) {
    list.innerHTML = '<div class="empty-state">No friends yet — search to connect</div>';
    return;
  }
  const sorted = [...friends].sort((a, b) => {
    const ta = messagePreviews[a._id]?.lastMessage?.createdAt || a.createdAt || 0;
    const tb = messagePreviews[b._id]?.lastMessage?.createdAt || b.createdAt || 0;
    return new Date(tb) - new Date(ta);
  });
  list.innerHTML = sorted.map(f => {
    const preview = messagePreviews[f._id];
    const lastMsg = preview?.lastMessage;
    const unread = preview?.unreadCount || 0;
    const isActive = currentChat?.userId === f._id;
    let previewText = f.bio || 'Start a conversation';
    if (lastMsg) {
      const mine = (lastMsg.sender?._id || lastMsg.sender) === currentUser._id;
      previewText = (mine ? 'You: ' : '') + lastMsg.content;
    }
    return `
      <div class="friend-item ${isActive ? 'active' : ''}" onclick="openChat('${f._id}','${escHtml(f.username)}',${!!f.isOnline})">
        <div class="avatar-wrap">
          <div class="avatar sm av-${hashColor(f.username)}">${getInitial(f.username)}</div>
          ${f.isOnline ? `<div class="online-dot" style="border-color:var(--surface${isActive?'3':''})"></div>` : ''}
        </div>
        <div class="friend-info">
          <div class="friend-name">${escHtml(f.username)}</div>
          <div class="friend-preview ${unread > 0 ? 'preview-bold' : ''}">${escHtml(previewText)}</div>
        </div>
        <div class="friend-meta">
          ${lastMsg ? `<div class="time-label">${formatTime(lastMsg.createdAt)}</div>` : ''}
          ${unread > 0 ? `<div class="unread-badge">${unread}</div>` : ''}
        </div>
      </div>`;
  }).join('');
}

// ---- CHAT ----
async function openChat(userId, username, isOnline) {
  currentChat = { userId, username };
  closePanel();
  document.getElementById('chatEmpty').classList.add('hidden');
  document.getElementById('chatView').classList.remove('hidden');
  const av = document.getElementById('chatAvatar');
  av.textContent = getInitial(username);
  av.className = `avatar sm av-${hashColor(username)}`;
  document.getElementById('chatPartnerName').textContent = username;
  updateChatStatus(isOnline);
  document.getElementById('sidebar').classList.add('hidden-mobile');
  document.getElementById('messages').innerHTML = '';
  document.getElementById('typingIndicator').classList.add('hidden');
  if (messagePreviews[userId]) messagePreviews[userId].unreadCount = 0;
  renderFriendsList();
  updateTitleBadge();
  await loadMessages(userId);
  socket.emit('mark_read', { senderId: userId });
  document.getElementById('messageInput').focus();
}

function openChatById(userId) {
  dismissAllToasts();
  const f = friends.find(f => f._id === userId);
  if (f) openChat(userId, f.username, !!f.isOnline);
}

async function loadMessages(userId) {
  try {
    const res = await apiFetch(`/messages/${userId}`);
    if (!res.ok) return;
    const messages = await res.json();
    const container = document.getElementById('messages');
    container.innerHTML = '';
    let lastDate = null;
    messages.forEach(msg => {
      const d = new Date(msg.createdAt).toDateString();
      if (d !== lastDate) {
        lastDate = d;
        const div = document.createElement('div');
        div.className = 'date-divider';
        div.textContent = formatDate(msg.createdAt);
        container.appendChild(div);
      }
      appendMessage(msg, false);
    });
    scrollToBottom(false);
  } catch (e) { console.error(e); }
}

function appendMessage(msg, animate = true) {
  const container = document.getElementById('messages');
  const senderId = msg.sender?._id || msg.sender;
  const isMine = senderId === currentUser._id;

  const el = document.createElement('div');
  el.className = `msg ${isMine ? 'mine' : 'theirs'}`;
  if (msg._id) el.dataset.msgId = msg._id;
  if (!animate) el.style.animation = 'none';

  let bubbleContent = '';
  let isMedia = false;
  let isEmojiOnly = false;

  const content = msg.content || '';

  if (content.startsWith('[sticker:')) {
    const id = content.slice(9, -1);
    const sticker = typeof getStickerById === 'function' ? getStickerById(id) : null;
    if (sticker) {
      bubbleContent = `<div class="msg-sticker">${sticker.svg}</div>`;
      isMedia = true;
    } else {
      bubbleContent = `<span class="msg-text">${escHtml(msg.label || '🎭')}</span>`;
    }
  } else if (content.startsWith('[gif:')) {
    // Legacy URL-based gif (kept for backwards compat)
    const gifUrl = content.slice(5, -1);
    bubbleContent = `<div class="msg-gif"><img src="${escHtml(gifUrl)}" alt="GIF" loading="lazy" /></div>`;
    isMedia = true;
  } else if (content.startsWith('[gifsvg:')) {
    // New inline SVG gif by ID
    const gifId = content.slice(8, -1);
    const gifDef = (typeof GIF_CATEGORIES !== 'undefined')
      ? GIF_CATEGORIES.flatMap(c => c.gifs).find(g => g.id === gifId)
      : null;
    if (gifDef) {
      bubbleContent = `<div class="msg-gifsvg">${gifDef.html}</div>`;
    } else {
      bubbleContent = `<div class="msg-text">🎞️ GIF</div>`;
    }
    isMedia = true;
  } else if (content.startsWith('[voice:')) {
    const src = content.slice(7, -1);
    const uid = 'va_' + Math.random().toString(36).slice(2, 9);
    const dur = msg.voiceDuration || 0;
    const durStr = formatDur ? formatDur(dur) : (dur ? `${Math.floor(dur/60)}:${String(Math.floor(dur%60)).padStart(2,'0')}` : '0:00');
    bubbleContent = buildVoiceBubble(uid, src, durStr);
    isMedia = true;
  } else {
    // Detect pure-emoji messages for jumbo rendering
    isEmojiOnly = content.length > 0 && content.length <= 12 && isOnlyEmoji(content);
    bubbleContent = `<div class="msg-text">${escHtml(content)}</div>`;
  }

  let statusHtml = '';
  if (isMine) {
    const isTemp = String(msg._id || '').startsWith('temp_');
    let status;
    if (isTemp)          status = 'sending';
    else if (msg.readAt) status = 'seen';
    else                 status = 'delivered';
    statusHtml = buildStatusHtml(status);
  }

  el.innerHTML = `
    <div class="msg-bubble ${isMedia ? 'msg-bubble-media' : ''} ${isEmojiOnly ? 'emoji-only' : ''}">${bubbleContent}</div>
    <div class="msg-meta">
      <span class="msg-time" data-ts="${msg.createdAt}">${formatTime(msg.createdAt)}</span>
      ${statusHtml}
    </div>`;

  container.appendChild(el);
  return el;
}


// ── VOICE BUBBLE ─────────────────────────────────────────────
function buildVoiceBubble(uid, src, durationStr) {
  // Escape src for HTML attribute
  const safeSrc = src.replace(/"/g, '%22').replace(/'/g, '%27');
  return `
    <div class="voice-msg" id="${uid}">
      <button class="voice-play-btn" id="pbtn-${uid}" title="Play/Pause">
        <svg class="vp-icon-play" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M5 3l14 9-14 9V3z"/></svg>
        <svg class="vp-icon-pause hidden" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16" rx="1"/><rect x="14" y="4" width="4" height="16" rx="1"/></svg>
      </button>
      <div class="voice-bars" id="bars-${uid}">${buildWaveBars(28)}</div>
      <span class="voice-dur" id="dur-${uid}">${durationStr || '0:00'}</span>
      <audio id="audio-${uid}" src="${safeSrc}" preload="metadata"></audio>
    </div>`;
}

function buildWaveBars(n) {
  let s = '';
  for (let i = 0; i < n; i++) {
    const h = 20 + Math.random() * 60;
    s += `<span class="vbar" style="height:${h}%"></span>`;
  }
  return s;
}

// Wire play buttons via event delegation on messages container
document.addEventListener('click', e => {
  const btn = e.target.closest('.voice-play-btn');
  if (!btn) return;
  const uid = btn.id.replace('pbtn-', '');
  if (uid) playVoiceMessage(uid, btn);
});

function playVoiceMessage(uid, btn) {
  const audio  = document.getElementById(`audio-${uid}`);
  const durEl  = document.getElementById(`dur-${uid}`);
  const barsEl = document.getElementById(`bars-${uid}`);
  if (!audio || !btn) return;

  // Pause all other playing voice messages first
  document.querySelectorAll('.voice-msg audio').forEach(a => {
    if (a.id === `audio-${uid}` || a.paused) return;
    a.pause();
    const otherId  = a.id.replace('audio-', '');
    const otherBtn = document.getElementById(`pbtn-${otherId}`);
    otherBtn?.querySelector('.vp-icon-play')?.classList.remove('hidden');
    otherBtn?.querySelector('.vp-icon-pause')?.classList.add('hidden');
    document.getElementById(`bars-${otherId}`)?.classList.remove('playing');
  });

  if (audio.paused) {
    audio.play().then(() => {
      btn.querySelector('.vp-icon-play')?.classList.add('hidden');
      btn.querySelector('.vp-icon-pause')?.classList.remove('hidden');
      barsEl?.classList.add('playing');
    }).catch(err => {
      console.error('Audio play failed:', err);
    });

    audio.ontimeupdate = () => {
      const remaining = audio.duration - audio.currentTime;
      if (isFinite(remaining) && durEl) {
        durEl.textContent = `${Math.floor(remaining/60)}:${String(Math.floor(remaining%60)).padStart(2,'0')}`;
      }
      if (barsEl) {
        const pct   = audio.currentTime / (audio.duration || 1);
        const bars  = barsEl.querySelectorAll('.vbar');
        const filled = Math.floor(pct * bars.length);
        bars.forEach((b, i) => b.classList.toggle('played', i < filled));
      }
    };

    audio.onended = () => {
      btn.querySelector('.vp-icon-play')?.classList.remove('hidden');
      btn.querySelector('.vp-icon-pause')?.classList.add('hidden');
      barsEl?.classList.remove('playing');
      if (durEl) {
        const d = audio.duration;
        durEl.textContent = isFinite(d)
          ? `${Math.floor(d/60)}:${String(Math.floor(d%60)).padStart(2,'0')}`
          : '0:00';
      }
      barsEl?.querySelectorAll('.vbar').forEach(b => b.classList.remove('played'));
    };
  } else {
    audio.pause();
    btn.querySelector('.vp-icon-play')?.classList.remove('hidden');
    btn.querySelector('.vp-icon-pause')?.classList.add('hidden');
    barsEl?.classList.remove('playing');
  }
}
function buildStatusHtml(status) {
  const labels = { sending: '', sent: 'Sent', delivered: 'Delivered', seen: 'Seen' };
  const label = labels[status] || '';

  if (status === 'sending') {
    return `<span class="msg-status status-sending">
      <span class="tick-sending"></span>
    </span>`;
  }

  const doubleTick = `<svg class="tick-svg" viewBox="0 0 20 12" fill="none">
    <path class="tick-path-second" d="M1 6l3.5 3.5L11 2"/>
    <path class="tick-path-single" d="M7 6l3.5 3.5L17 2"/>
  </svg>`;

  const singleTick = `<svg class="tick-svg" viewBox="0 0 12 10" fill="none">
    <path class="tick-path-single" d="M1 5l3.5 3.5L11 1"/>
  </svg>`;

  const icon = (status === 'sent') ? singleTick : doubleTick;

  return `<span class="msg-status status-${status}">
    ${icon}
    <span class="status-label">${label}</span>
  </span>`;
}

// Transition status element to new state — updates icon + label
function transitionStatus(statusEl, newStatus) {
  if (!statusEl) return;

  statusEl.style.transition = 'opacity 0.15s, transform 0.15s';
  statusEl.style.opacity = '0';
  statusEl.style.transform = 'scale(0.7)';

  setTimeout(() => {
    const labels = { sending: '', sent: 'Sent', delivered: 'Delivered', seen: 'Seen' };
    const label = labels[newStatus] || '';

    const doubleTick = `<svg class="tick-svg" viewBox="0 0 20 12" fill="none">
      <path class="tick-path-second" d="M1 6l3.5 3.5L11 2"/>
      <path class="tick-path-single" d="M7 6l3.5 3.5L17 2"/>
    </svg>`;
    const singleTick = `<svg class="tick-svg" viewBox="0 0 12 10" fill="none">
      <path class="tick-path-single" d="M1 5l3.5 3.5L11 1"/>
    </svg>`;

    if (newStatus === 'sending') {
      statusEl.innerHTML = `<span class="tick-sending"></span>`;
    } else {
      const icon = (newStatus === 'sent') ? singleTick : doubleTick;
      statusEl.innerHTML = `${icon}<span class="status-label">${label}</span>`;
    }

    statusEl.className = `msg-status status-${newStatus}`;
    statusEl.style.opacity = '1';
    statusEl.style.transform = 'scale(1.12)';
    setTimeout(() => {
      statusEl.style.transition = 'opacity 0.15s, transform 0.25s cubic-bezier(0.34,1.56,0.64,1)';
      statusEl.style.transform = 'scale(1)';
    }, 20);
  }, 150);
}

// Live-refresh all visible timestamps every 30 seconds
setInterval(() => {
  document.querySelectorAll('.msg-time[data-ts]').forEach(el => {
    el.textContent = formatTime(el.dataset.ts);
  });
}, 30000);

function scrollToBottom(smooth = true) {
  const wrap = document.getElementById('messagesWrap');
  wrap.scrollTo({ top: wrap.scrollHeight, behavior: smooth ? 'smooth' : 'auto' });
}

function updateChatStatus(isOnline, lastSeen) {
  const el = document.getElementById('chatPartnerStatus');
  el.textContent = isOnline ? 'Active now' : (lastSeen ? `Last seen ${formatTime(lastSeen)}` : 'Offline');
  el.className = `chat-partner-status${isOnline ? ' online' : ''}`;
}

// ---- AUDIO ----
let _audioCtx = null;

function getAudioCtx() {
  if (!_audioCtx) _audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  // Resume if suspended (browser autoplay policy)
  if (_audioCtx.state === 'suspended') _audioCtx.resume();
  return _audioCtx;
}

function playSendTone() {
  try {
    const ctx = getAudioCtx();
    const now = ctx.currentTime;

    // Master gain — keep it subtle
    const master = ctx.createGain();
    master.gain.setValueAtTime(0, now);
    master.gain.linearRampToValueAtTime(0.13, now + 0.012);
    master.gain.exponentialRampToValueAtTime(0.001, now + 0.18);
    master.connect(ctx.destination);

    // Primary tone — a clean sine at 880 Hz (A5), slides up slightly
    const osc1 = ctx.createOscillator();
    osc1.type = 'sine';
    osc1.frequency.setValueAtTime(820, now);
    osc1.frequency.exponentialRampToValueAtTime(1080, now + 0.09);
    osc1.connect(master);
    osc1.start(now);
    osc1.stop(now + 0.2);

    // Soft overtone — triangle an octave up for air/brightness
    const osc2 = ctx.createOscillator();
    osc2.type = 'triangle';
    osc2.frequency.setValueAtTime(1640, now);
    osc2.frequency.exponentialRampToValueAtTime(2100, now + 0.07);

    const gain2 = ctx.createGain();
    gain2.gain.setValueAtTime(0.045, now);
    gain2.gain.exponentialRampToValueAtTime(0.001, now + 0.12);
    osc2.connect(gain2);
    gain2.connect(ctx.destination);
    osc2.start(now);
    osc2.stop(now + 0.14);

    // Tiny high-freq click at the very start for "tap" feel
    const click = ctx.createOscillator();
    click.type = 'sine';
    click.frequency.setValueAtTime(3200, now);

    const clickGain = ctx.createGain();
    clickGain.gain.setValueAtTime(0.06, now);
    clickGain.gain.exponentialRampToValueAtTime(0.001, now + 0.018);
    click.connect(clickGain);
    clickGain.connect(ctx.destination);
    click.start(now);
    click.stop(now + 0.022);

  } catch (e) {
    // Audio not available — silently skip
  }
}

// ---- SEND MESSAGE ----
let _tempMsgSeq = 0;
async function sendMessage() {
  if (!currentChat) return;
  const input = document.getElementById('messageInput');
  const content = input.value.trim();
  if (!content) return;
  input.value = '';
  autoResizeTextarea(input);
  stopTyping();

  // Play send tone
  playSendTone();

  const tempId = `temp_${Date.now()}_${_tempMsgSeq++}`;
  const tempMsg = {
    _id: tempId,
    sender: { _id: currentUser._id },
    receiver: currentChat.userId,
    content,
    createdAt: new Date().toISOString(),
    readAt: null
  };
  appendMessage(tempMsg);
  scrollToBottom();

  if (!messagePreviews[currentChat.userId]) messagePreviews[currentChat.userId] = { unreadCount: 0 };
  messagePreviews[currentChat.userId].lastMessage = tempMsg;
  renderFriendsList();

  socket.emit('send_message', { receiverId: currentChat.userId, content, tempId });
}

function handleKeyDown(e) {
  if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMessage(); }
}

function handleTyping(e) {
  autoResizeTextarea(document.getElementById('messageInput'));
  if (!currentChat) return;
  if (!isTyping) { isTyping = true; socket.emit('typing', { receiverId: currentChat.userId, isTyping: true }); }
  clearTimeout(typingTimer);
  typingTimer = setTimeout(stopTyping, 2000);
}

function stopTyping() {
  if (!isTyping || !currentChat) return;
  isTyping = false;
  socket.emit('typing', { receiverId: currentChat.userId, isTyping: false });
}

function autoResizeTextarea(ta) {
  ta.style.height = 'auto';
  ta.style.height = Math.min(ta.scrollHeight, 120) + 'px';
}

// ---- SEARCH ----
let searchTimer = null;
function handleSearch() { clearTimeout(searchTimer); searchTimer = setTimeout(doSearch, 300); }

async function doSearch() {
  const q = document.getElementById('searchInput').value.trim();
  const results = document.getElementById('searchResults');
  if (!q || q.length < 2) { results.innerHTML = '<div class="empty-state">Type to search for users</div>'; return; }
  results.innerHTML = '<div class="empty-state">Searching…</div>';
  try {
    const res = await apiFetch(`/users/search?q=${encodeURIComponent(q)}`);
    const users = await res.json();
    if (!users.length) { results.innerHTML = '<div class="empty-state">No users found</div>'; return; }
    results.innerHTML = users.map(u => {
      const isFriend = friends.some(f => f._id === u._id);
      let actionBtn = '';
      if (isFriend) actionBtn = `<button class="btn-sm btn-friend" onclick="openChatFromSearch('${u._id}','${escHtml(u.username)}')">Message</button>`;
      else if (u.friendStatus === 'pending' && u.requestDirection === 'sent') actionBtn = `<button class="btn-sm btn-pending" disabled>Requested</button>`;
      else if (u.friendStatus === 'pending' && u.requestDirection === 'received') actionBtn = `<button class="btn-sm btn-accept" onclick="respondRequest('${u.requestId}','accepted')">Accept</button>`;
      else actionBtn = `<button class="btn-sm btn-add" onclick="sendFriendRequest('${u._id}',this)">+ Add</button>`;
      return `
        <div class="user-result">
          <div class="avatar-wrap">
            <div class="avatar sm av-${hashColor(u.username)}">${getInitial(u.username)}</div>
            ${u.isOnline ? '<div class="online-dot"></div>' : ''}
          </div>
          <div class="user-info">
            <div class="user-name">${escHtml(u.username)}</div>
            <div class="user-status-text">${u.isOnline ? 'Active now' : 'Offline'}</div>
          </div>
          ${actionBtn}
        </div>`;
    }).join('');
  } catch { results.innerHTML = '<div class="empty-state">Error searching</div>'; }
}

function openChatFromSearch(userId, username) {
  closePanel();
  const f = friends.find(f => f._id === userId);
  openChat(userId, username, !!f?.isOnline);
}

async function sendFriendRequest(receiverId, btn) {
  btn.disabled = true; btn.textContent = 'Sending…';
  try {
    const res = await apiFetch('/friends/request', 'POST', { receiverId });
    if (res.ok) { btn.textContent = 'Requested'; btn.className = 'btn-sm btn-pending'; }
    else { const d = await res.json(); btn.textContent = d.error || 'Error'; btn.disabled = false; }
  } catch { btn.textContent = '+ Add'; btn.disabled = false; }
}

// ---- FRIEND REQUESTS ----
async function loadFriendRequests() {
  try {
    const res = await apiFetch('/friends/requests');
    pendingRequests = await res.json();
    updateRequestBadge();
    renderRequestsPanel();
    updateTitleBadge();
  } catch (e) { console.error(e); }
}

function updateRequestBadge() {
  const badge = document.getElementById('requestBadge');
  const count = pendingRequests.length;
  badge.textContent = count;
  badge.classList.toggle('hidden', count === 0);
}

function renderRequestsPanel() {
  const list = document.getElementById('requestsList');
  if (!pendingRequests.length) { list.innerHTML = '<div class="empty-state">No pending requests</div>'; return; }
  list.innerHTML = pendingRequests.map(r => `
    <div class="request-item" id="req-${r._id}">
      <div class="avatar-wrap">
        <div class="avatar sm av-${hashColor(r.sender.username)}">${getInitial(r.sender.username)}</div>
        ${r.sender.isOnline ? '<div class="online-dot"></div>' : ''}
      </div>
      <div class="req-info">
        <div class="req-name">${escHtml(r.sender.username)}</div>
        <div class="req-time">${formatTime(r.createdAt)}</div>
      </div>
      <div class="req-actions">
        <button class="btn-sm btn-accept" onclick="respondRequest('${r._id}','accepted')">Accept</button>
        <button class="btn-sm btn-reject" onclick="respondRequest('${r._id}','rejected')">Decline</button>
      </div>
    </div>`).join('');
}

async function respondRequest(requestId, status) {
  pendingRequests = pendingRequests.filter(r => r._id.toString() !== requestId.toString());
  updateRequestBadge();
  renderRequestsPanel();
  updateTitleBadge();
  const el = document.getElementById(`req-${requestId}`);
  if (el) el.remove();
  try {
    const res = await apiFetch(`/friends/request/${requestId}`, 'PATCH', { status });
    if (res.ok && status === 'accepted') { await loadFriends(); await loadMessagePreviews(); }
  } catch (e) { console.error(e); }
}

// ---- PROFILE ----
function initProfilePanel() {
  const av = document.getElementById('profileAvatarBig');
  av.textContent = getInitial(currentUser.username);
  av.className = `profile-avatar-big av-${hashColor(currentUser.username)}`;
  document.getElementById('profileUsername').textContent = currentUser.username;
  document.getElementById('bioInput').value = currentUser.bio || '';
}

async function saveBio() {
  const bio = document.getElementById('bioInput').value.trim();
  try {
    const res = await apiFetch('/users/me', 'PATCH', { bio });
    if (res.ok) {
      currentUser = await res.json();
      localStorage.setItem('whispr_user', JSON.stringify(currentUser));
      showToast('info', 'Profile updated', 'Your bio has been saved.');
    }
  } catch (e) { console.error(e); }
}

function logout() {
  // Disconnect socket cleanly so server marks user offline immediately
  if (socket) socket.disconnect();
  localStorage.removeItem('whispr_token');
  localStorage.removeItem('whispr_user');
  window.location.href = '/';
}

// ---- PANELS ----
function togglePanel(name) {
  const map = { search: 'searchPanel', requests: 'requestsPanel', profile: 'profilePanel' };
  const panel = document.getElementById(map[name]);
  const overlay = document.getElementById('panelOverlay');
  const isOpen = !panel.classList.contains('hidden');
  closePanel();
  if (!isOpen) {
    panel.classList.remove('hidden');
    overlay.classList.remove('hidden');
    if (name === 'requests') renderRequestsPanel();
    if (name === 'profile') initProfilePanel();
    if (name === 'search') setTimeout(() => document.getElementById('searchInput')?.focus(), 100);
  }
}

function closePanel() {
  ['searchPanel','requestsPanel','profilePanel'].forEach(id => document.getElementById(id).classList.add('hidden'));
  document.getElementById('panelOverlay').classList.add('hidden');
}

function showSidebar() {
  document.getElementById('sidebar').classList.remove('hidden-mobile');
  document.getElementById('chatView').classList.add('hidden');
  document.getElementById('chatEmpty').classList.remove('hidden');
  currentChat = null;
}

// ---- HELPERS ----
async function apiFetch(path, method = 'GET', body = null) {
  const opts = { method, headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${localStorage.getItem('whispr_token')}` } };
  if (body) opts.body = JSON.stringify(body);
  const res = await fetch(`${API}${path}`, opts);
  if (res.status === 401) { logout(); throw new Error('Unauthorized'); }
  return res;
}

// Returns true when str contains only emoji characters (no letters/numbers/punctuation).
// Used to render emoji-only messages at jumbo size in chat bubbles.
function isOnlyEmoji(str) {
  if (!str || !str.trim()) return false;
  // Remove all emoji (presentation + ZWJ sequences + variation selectors)
  const stripped = str.replace(/[\p{Emoji_Presentation}\p{Extended_Pictographic}\u{FE0F}\u{200D}]+/gu, '').trim();
  return stripped === '';
}

function escHtml(str) {
  if (!str) return '';
  return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#039;');
}

function formatTime(dateStr) {
  const d = new Date(dateStr), now = new Date(), diff = now - d;
  if (diff < 60000) return 'just now';
  if (diff < 3600000) return `${Math.floor(diff / 60000)}m ago`;
  if (d.toDateString() === now.toDateString()) return d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  return d.toLocaleDateString([], { month: 'short', day: 'numeric' });
}

function formatDate(dateStr) {
  const d = new Date(dateStr), now = new Date();
  if (d.toDateString() === now.toDateString()) return 'Today';
  const yest = new Date(now); yest.setDate(yest.getDate() - 1);
  if (d.toDateString() === yest.toDateString()) return 'Yesterday';
  return d.toLocaleDateString([], { weekday: 'long', month: 'long', day: 'numeric' });
}
