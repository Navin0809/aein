// ============================================================
// WHISPR — Emoji / Sticker / GIF Picker
// ============================================================

let pickerOpen = false;
let activePickerTab = 'emoji';
let gifSearchTimer = null;
let activeGifCategory = 'love'; // initialised here; reset when GIF tab opens
let currentEmojiCategory = 'smileys';

// ── TOGGLE PICKER ──────────────────────────────────────────
function togglePicker(forceTab) {
  const panel = document.getElementById('pickerPanel');
  pickerOpen = !panel.classList.contains('hidden');
  if (pickerOpen) {
    closePicker();
  } else {
    panel.classList.remove('hidden');
    pickerOpen = true;
    document.getElementById('emojiBtn').classList.add('active');
    switchPickerTab(forceTab || activePickerTab);
    if (activePickerTab === 'emoji') renderEmojiGrid();
    else if (activePickerTab === 'stickers') renderStickerGrid(STICKER_PACK);
  }
}

function openGifPicker() {
  const panel = document.getElementById('pickerPanel');
  panel.classList.remove('hidden');
  pickerOpen = true;
  switchPickerTab('gifs');
  // initGifTab called inside switchPickerTab
}

function closePicker() {
  document.getElementById('pickerPanel').classList.add('hidden');
  document.getElementById('emojiBtn').classList.remove('active');
  pickerOpen = false;
}

// Close picker on outside click
document.addEventListener('click', (e) => {
  if (!pickerOpen) return;
  const panel = document.getElementById('pickerPanel');
  const emojiBtn = document.getElementById('emojiBtn');
  const toolbar = document.querySelector('.input-toolbar');
  if (!panel.contains(e.target) && !toolbar?.contains(e.target)) {
    closePicker();
  }
}, true);

// ── TABS ───────────────────────────────────────────────────
function switchPickerTab(tab) {
  activePickerTab = tab;
  document.querySelectorAll('.picker-tab').forEach(t => {
    t.classList.toggle('active', t.dataset.tab === tab);
  });
  document.querySelectorAll('.picker-content').forEach(c => {
    c.classList.toggle('active', c.id === `tab-${tab}`);
  });
  if (tab === 'emoji')    renderEmojiGrid();
  if (tab === 'stickers') renderStickerGrid(STICKER_PACK);
  if (tab === 'gifs')     initGifTab();
}

// ── EMOJI ──────────────────────────────────────────────────
function renderEmojiCategories() {
  const bar = document.getElementById('emojiCategories');
  if (!bar || bar.children.length > 0) return;
  EMOJI_CATEGORIES.forEach(cat => {
    const btn = document.createElement('button');
    btn.className = 'emoji-cat-btn' + (cat.id === currentEmojiCategory ? ' active' : '');
    btn.textContent = cat.label;
    btn.title = cat.name;
    btn.onclick = () => {
      currentEmojiCategory = cat.id;
      document.querySelectorAll('.emoji-cat-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderEmojiGrid();
    };
    bar.appendChild(btn);
  });
}

function renderEmojiGrid(filter) {
  renderEmojiCategories();
  const grid = document.getElementById('emojiGrid');
  if (!grid) return;
  let emojis;
  if (filter) {
    // Search across all categories
    emojis = EMOJI_CATEGORIES.flatMap(c => c.emojis).filter(e =>
      e.includes(filter) || getEmojiName(e).includes(filter.toLowerCase())
    );
  } else {
    const cat = EMOJI_CATEGORIES.find(c => c.id === currentEmojiCategory);
    emojis = cat ? cat.emojis : EMOJI_CATEGORIES[0].emojis;
  }
  grid.innerHTML = '';
  emojis.forEach(emoji => {
    const btn = document.createElement('button');
    btn.className = 'emoji-btn';
    btn.textContent = emoji;
    btn.onclick = () => insertEmoji(emoji);
    grid.appendChild(btn);
  });
}

function filterEmoji(val) {
  renderEmojiGrid(val.trim());
}

function getEmojiName(e) { return ''; } // simple — can be extended

function insertEmoji(emoji) {
  const input = document.getElementById('messageInput');
  const pos = input.selectionStart;
  const before = input.value.slice(0, pos);
  const after = input.value.slice(input.selectionEnd);
  input.value = before + emoji + after;
  const newPos = pos + emoji.length;
  input.setSelectionRange(newPos, newPos);
  input.focus();
  autoResizeTextarea(input);
  handleTyping();
}

// ── STICKERS ───────────────────────────────────────────────
function renderStickerGrid(stickers) {
  const grid = document.getElementById('stickerGrid');
  if (!grid) return;
  if (!stickers.length) {
    grid.innerHTML = '<div class="picker-empty">No stickers found</div>';
    return;
  }
  grid.innerHTML = '';
  stickers.forEach(s => {
    const btn = document.createElement('button');
    btn.className = 'sticker-btn';
    btn.innerHTML = s.svg;
    btn.title = s.label;
    btn.onclick = () => sendSticker(s);
    grid.appendChild(btn);
  });
}

function filterStickers(val) {
  const results = searchStickers(val.trim());
  renderStickerGrid(results);
}

function sendSticker(sticker) {
  if (!currentChat) return;
  closePicker();
  hideStickerSuggestBar();

  // Encode sticker as a special message type
  const content = `[sticker:${sticker.id}]`;
  const stickerLabel = sticker.label;

  playSendTone();

  const tempId = `temp_${Date.now()}_${_tempMsgSeq++}`;
  const tempMsg = {
    _id: tempId,
    sender: { _id: currentUser._id },
    receiver: currentChat.userId,
    content,
    createdAt: new Date().toISOString(),
    readAt: null,
    isSticker: true,
    stickerId: sticker.id
  };

  appendMessage(tempMsg);
  scrollToBottom();

  // 🎆 Trigger background animation
  triggerStickerFx(sticker.id);

  if (!messagePreviews[currentChat.userId]) messagePreviews[currentChat.userId] = { unreadCount: 0 };
  messagePreviews[currentChat.userId].lastMessage = { ...tempMsg, content: stickerLabel };
  renderFriendsList();

  socket.emit('send_message', { receiverId: currentChat.userId, content, tempId });
}

// ── STICKER SUGGEST BAR ────────────────────────────────────
function handleTypingWithStickerSuggest(e) {
  handleTyping(e);
  const val = document.getElementById('messageInput').value;
  if (!val.trim()) { hideStickerSuggestBar(); return; }
  const suggestions = getSuggestedStickers(val);
  if (suggestions.length > 0) {
    renderStickerSuggestBar(suggestions);
  } else {
    hideStickerSuggestBar();
  }
}

function renderStickerSuggestBar(stickers) {
  const bar = document.getElementById('stickerSuggestBar');
  bar.innerHTML = '';
  stickers.slice(0, 8).forEach(s => {
    const btn = document.createElement('button');
    btn.className = 'suggest-sticker-btn';
    btn.innerHTML = s.svg;
    btn.title = s.label;
    btn.onclick = () => sendSticker(s);
    bar.appendChild(btn);
  });
  bar.classList.remove('hidden');
}

function hideStickerSuggestBar() {
  document.getElementById('stickerSuggestBar')?.classList.add('hidden');
}

// ── GIF TAB ────────────────────────────────────────────────
// FIX: gifSearchTimer was already declared at the top of this file.
// A duplicate `let` declaration is a SyntaxError — it prevented picker.js
// from loading entirely, which is why emoji, sticker and GIF clicks all
// did nothing. Only assign here; do not re-declare.
activeGifCategory = 'love'; // default tab when GIF panel opens

function initGifTab() {
  renderGifCategoryTabs();
  renderGifGrid(GIF_CATEGORIES.find(c => c.id === activeGifCategory)?.gifs || []);
}

function renderGifCategoryTabs() {
  const bar = document.getElementById('gifCatTabs');
  if (!bar || bar.children.length) return; // already built
  GIF_CATEGORIES.forEach(cat => {
    const btn = document.createElement('button');
    btn.className = 'gif-cat-btn' + (cat.id === activeGifCategory ? ' active' : '');
    btn.textContent = cat.label;
    btn.onclick = () => {
      activeGifCategory = cat.id;
      document.querySelectorAll('.gif-cat-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      document.getElementById('gifSearch').value = '';
      renderGifGrid(GIF_CATEGORIES.find(c => c.id === cat.id)?.gifs || []);
    };
    bar.appendChild(btn);
  });
}

function renderGifGrid(gifs) {
  const grid = document.getElementById('gifGrid');
  if (!grid) return;
  if (!gifs || !gifs.length) {
    grid.innerHTML = '<div class="picker-empty">No GIFs found</div>';
    return;
  }
  grid.innerHTML = '';
  const frag = document.createDocumentFragment();
  gifs.forEach(gif => {
    const btn = document.createElement('button');
    btn.className = 'gif-btn gif-btn-svg';
    btn.type = 'button';
    btn.title = gif.alt;
    btn.innerHTML = gif.html;           // inline SVG animation — no external fetch needed
    btn.addEventListener('click', () => sendGif(gif.id, gif.alt, gif.html));
    frag.appendChild(btn);
  });
  grid.appendChild(frag);
}

function handleGifSearch(val) {
  clearTimeout(gifSearchTimer);
  gifSearchTimer = setTimeout(() => {
    const q = val.trim();
    if (!q) {
      renderGifGrid(GIF_CATEGORIES.find(c => c.id === activeGifCategory)?.gifs || []);
    } else {
      renderGifGrid(typeof searchGifs === 'function' ? searchGifs(q) : []);
    }
  }, 200);
}

// GIF content is stored as [gifsvg:id] — receiver looks up HTML from GIF_CATEGORIES
// This means both sides must have gifs.js, which they do (it's a static asset)
function sendGif(gifId, description, html) {
  if (!currentChat) { showToast('info', 'Open a chat first', 'Select a friend to send GIFs.'); return; }
  closePicker();
  playSendTone();

  // Fire matching background FX for this GIF's emotion
  if (typeof triggerGifFx === 'function') triggerGifFx(gifId);

  const content = `[gifsvg:${gifId}]`;
  const tempId  = `temp_${Date.now()}_${_tempMsgSeq++}`;
  const tempMsg = {
    _id:       tempId,
    sender:    { _id: currentUser._id },
    receiver:  currentChat.userId,
    content,
    createdAt: new Date().toISOString(),
    readAt:    null,
  };

  appendMessage(tempMsg);
  scrollToBottom();

  if (!messagePreviews[currentChat.userId]) messagePreviews[currentChat.userId] = { unreadCount: 0 };
  messagePreviews[currentChat.userId].lastMessage = { ...tempMsg, content: `🎞️ ${description}` };
  renderFriendsList();

  socket.emit('send_message', { receiverId: currentChat.userId, content, tempId });
}
