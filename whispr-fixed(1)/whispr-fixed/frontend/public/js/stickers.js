// ============================================================
// WHISPR STICKER PACK — Love & Everyday Conversations
// Boy (B) and Girl (G) characters, SVG-based
// ============================================================

const STICKER_PACK = [

// ── GREETINGS ──────────────────────────────────────────────

{ id:'s001', tags:['hi','hey','hello','wave','greet'],
  label:'Hi there!', svg:`<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
  <!-- Girl waving -->
  <circle cx="60" cy="32" r="22" fill="#FFDBB5"/>
  <ellipse cx="60" cy="32" rx="22" ry="20" fill="#FFDBB5"/>
  <!-- Hair -->
  <path d="M38 28 Q38 10 60 10 Q82 10 82 28" fill="#4A2C0A"/>
  <path d="M38 28 Q30 40 34 55" fill="#4A2C0A"/>
  <path d="M82 28 Q90 40 86 55" fill="#4A2C0A"/>
  <!-- Eyes -->
  <circle cx="52" cy="30" r="3.5" fill="#1A1A2E"/>
  <circle cx="68" cy="30" r="3.5" fill="#1A1A2E"/>
  <circle cx="53.5" cy="28.5" r="1.2" fill="white"/>
  <circle cx="69.5" cy="28.5" r="1.2" fill="white"/>
  <!-- Smile -->
  <path d="M52 40 Q60 47 68 40" stroke="#C0627A" stroke-width="2" fill="none" stroke-linecap="round"/>
  <!-- Blush -->
  <ellipse cx="46" cy="38" rx="6" ry="3.5" fill="#FFB6C1" opacity="0.6"/>
  <ellipse cx="74" cy="38" rx="6" ry="3.5" fill="#FFB6C1" opacity="0.6"/>
  <!-- Body -->
  <rect x="46" y="52" width="28" height="30" rx="8" fill="#FF85A1"/>
  <!-- Waving arm -->
  <path d="M74 58 Q88 50 92 40" stroke="#FFDBB5" stroke-width="8" stroke-linecap="round" fill="none"/>
  <circle cx="92" cy="38" r="6" fill="#FFDBB5"/>
  <!-- Other arm -->
  <path d="M46 62 Q36 68 34 76" stroke="#FFDBB5" stroke-width="8" stroke-linecap="round" fill="none"/>
  <!-- Legs -->
  <rect x="50" y="80" width="9" height="22" rx="4" fill="#7E57C2"/>
  <rect x="61" y="80" width="9" height="22" rx="4" fill="#7E57C2"/>
  <!-- Hi text -->
  <text x="60" y="115" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="bold" fill="#FF85A1">Hi! 👋</text>
</svg>`},

{ id:'s002', tags:['hi','hey','hello','wave','greet','boy'],
  label:'Hey!', svg:`<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
  <!-- Boy waving -->
  <circle cx="60" cy="32" r="22" fill="#FFDBB5"/>
  <!-- Hair short -->
  <path d="M38 26 Q40 8 60 8 Q80 8 82 26 Q78 18 60 18 Q42 18 38 26Z" fill="#2C1A0E"/>
  <!-- Eyes -->
  <circle cx="52" cy="30" r="3.5" fill="#1A1A2E"/>
  <circle cx="68" cy="30" r="3.5" fill="#1A1A2E"/>
  <circle cx="53.5" cy="28.5" r="1.2" fill="white"/>
  <circle cx="69.5" cy="28.5" r="1.2" fill="white"/>
  <!-- Smile big -->
  <path d="M51 39 Q60 48 69 39" stroke="#C0627A" stroke-width="2.5" fill="none" stroke-linecap="round"/>
  <!-- Body -->
  <rect x="46" y="52" width="28" height="30" rx="8" fill="#5B8DEF"/>
  <!-- Waving arm right -->
  <path d="M74 56 Q90 46 95 34" stroke="#FFDBB5" stroke-width="8" stroke-linecap="round" fill="none"/>
  <circle cx="96" cy="32" r="6" fill="#FFDBB5"/>
  <!-- Fingers hint -->
  <path d="M92 27 Q96 24 98 28" stroke="#FFDBB5" stroke-width="3" stroke-linecap="round" fill="none"/>
  <path d="M95 25 Q99 23 100 27" stroke="#FFDBB5" stroke-width="2.5" stroke-linecap="round" fill="none"/>
  <!-- Arm left -->
  <path d="M46 60 Q36 66 32 74" stroke="#FFDBB5" stroke-width="8" stroke-linecap="round" fill="none"/>
  <!-- Legs -->
  <rect x="50" y="80" width="9" height="22" rx="4" fill="#2C3E6B"/>
  <rect x="61" y="80" width="9" height="22" rx="4" fill="#2C3E6B"/>
  <text x="60" y="115" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="bold" fill="#5B8DEF">Hey! 😄</text>
</svg>`},

// ── HOW ARE YOU ───────────────────────────────────────────

{ id:'s003', tags:['how are you','how r u','hru','doing'],
  label:'How r u?', svg:`<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
  <!-- Girl curious expression -->
  <circle cx="60" cy="35" r="24" fill="#FFDBB5"/>
  <path d="M36 30 Q38 10 60 10 Q82 10 84 30" fill="#4A2C0A"/>
  <path d="M36 30 Q28 44 32 58" fill="#4A2C0A"/>
  <path d="M84 30 Q92 44 88 58" fill="#4A2C0A"/>
  <circle cx="52" cy="33" r="3.5" fill="#1A1A2E"/>
  <circle cx="68" cy="33" r="3.5" fill="#1A1A2E"/>
  <circle cx="53.5" cy="31.5" r="1.2" fill="white"/>
  <circle cx="69.5" cy="31.5" r="1.2" fill="white"/>
  <!-- Curious mouth -->
  <path d="M54 44 Q60 49 66 44" stroke="#C0627A" stroke-width="2" fill="none"/>
  <!-- Question mark bubble -->
  <circle cx="90" cy="20" r="16" fill="#FFE066" opacity="0.95"/>
  <text x="90" y="26" text-anchor="middle" font-family="sans-serif" font-size="18" fill="#FF8C00">?</text>
  <!-- Body -->
  <rect x="46" y="57" width="28" height="28" rx="8" fill="#A78BFA"/>
  <path d="M46 66 Q36 72 34 82" stroke="#FFDBB5" stroke-width="8" stroke-linecap="round" fill="none"/>
  <path d="M74 66 Q84 72 86 82" stroke="#FFDBB5" stroke-width="8" stroke-linecap="round" fill="none"/>
  <rect x="50" y="83" width="9" height="20" rx="4" fill="#7C3AED"/>
  <rect x="61" y="83" width="9" height="20" rx="4" fill="#7C3AED"/>
  <text x="60" y="116" text-anchor="middle" font-family="sans-serif" font-size="9" font-weight="bold" fill="#7C3AED">How r u? 🤔</text>
</svg>`},

{ id:'s004', tags:['im fine','good','doing well','great'],
  label:"I'm fine!", svg:`<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
  <!-- Boy thumbs up + big smile -->
  <circle cx="60" cy="33" r="23" fill="#FFDBB5"/>
  <path d="M37 26 Q40 8 60 8 Q80 8 83 26 Q78 16 60 16 Q42 16 37 26Z" fill="#2C1A0E"/>
  <circle cx="52" cy="31" r="3.5" fill="#1A1A2E"/>
  <circle cx="68" cy="31" r="3.5" fill="#1A1A2E"/>
  <!-- Big smile with teeth -->
  <path d="M50 41 Q60 52 70 41" stroke="#C0627A" stroke-width="2.5" fill="#FFD0D8"/>
  <path d="M53 42 L67 42" stroke="white" stroke-width="2.5"/>
  <ellipse cx="46" cy="39" rx="6" ry="3.5" fill="#FFB6C1" opacity="0.55"/>
  <ellipse cx="74" cy="39" rx="6" ry="3.5" fill="#FFB6C1" opacity="0.55"/>
  <!-- Body -->
  <rect x="46" y="55" width="28" height="28" rx="8" fill="#5B8DEF"/>
  <!-- Thumbs up arm -->
  <path d="M74 60 Q86 55 90 50" stroke="#FFDBB5" stroke-width="8" stroke-linecap="round" fill="none"/>
  <!-- Thumb -->
  <circle cx="90" cy="48" r="7" fill="#FFDBB5"/>
  <path d="M88 48 Q90 38 94 40 Q96 44 90 46" fill="#FFDBB5" stroke="#FFDBB5" stroke-width="1"/>
  <!-- Arm left down -->
  <path d="M46 64 Q36 70 34 78" stroke="#FFDBB5" stroke-width="8" stroke-linecap="round" fill="none"/>
  <rect x="50" y="81" width="9" height="20" rx="4" fill="#1E3A6E"/>
  <rect x="61" y="81" width="9" height="20" rx="4" fill="#1E3A6E"/>
  <text x="60" y="114" text-anchor="middle" font-family="sans-serif" font-size="9" font-weight="bold" fill="#5B8DEF">I'm great! 👍</text>
</svg>`},

// ── WHAT'S UP ─────────────────────────────────────────────

{ id:'s005', tags:['whats up','sup','wassup','what up'],
  label:"What's up?", svg:`<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
  <!-- Boy cool pose, shrug -->
  <circle cx="60" cy="32" r="22" fill="#FFDBB5"/>
  <path d="M38 25 Q40 8 60 8 Q80 8 82 25 Q78 14 60 14 Q42 14 38 25Z" fill="#1A0A00"/>
  <!-- Cool eyes (half-closed) -->
  <path d="M48 30 Q52 27 56 30" stroke="#1A1A2E" stroke-width="2.5" fill="none" stroke-linecap="round"/>
  <path d="M64 30 Q68 27 72 30" stroke="#1A1A2E" stroke-width="2.5" fill="none" stroke-linecap="round"/>
  <circle cx="52" cy="31" r="2.5" fill="#1A1A2E"/>
  <circle cx="68" cy="31" r="2.5" fill="#1A1A2E"/>
  <!-- Smirk -->
  <path d="M54 41 Q62 46 68 40" stroke="#C0627A" stroke-width="2" fill="none" stroke-linecap="round"/>
  <!-- Shrug arms -->
  <path d="M46 58 Q30 52 26 46" stroke="#FFDBB5" stroke-width="8" stroke-linecap="round" fill="none"/>
  <path d="M74 58 Q90 52 94 46" stroke="#FFDBB5" stroke-width="8" stroke-linecap="round" fill="none"/>
  <circle cx="24" cy="44" r="6" fill="#FFDBB5"/>
  <circle cx="96" cy="44" r="6" fill="#FFDBB5"/>
  <!-- Body -->
  <rect x="46" y="52" width="28" height="30" rx="8" fill="#F59E0B"/>
  <!-- Legs -->
  <rect x="50" y="80" width="9" height="22" rx="4" fill="#374151"/>
  <rect x="61" y="80" width="9" height="22" rx="4" fill="#374151"/>
  <!-- Stars -->
  <text x="50" y="18" font-size="10">✨</text>
  <text x="64" y="16" font-size="10">✨</text>
  <text x="60" y="115" text-anchor="middle" font-family="sans-serif" font-size="9" font-weight="bold" fill="#D97706">Wassup? 😎</text>
</svg>`},

// ── LUNCH / FOOD ─────────────────────────────────────────

{ id:'s006', tags:['lunch','had lunch','food','eat','hungry','dinner'],
  label:'Had lunch?', svg:`<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
  <!-- Girl holding food bowl -->
  <circle cx="60" cy="30" r="21" fill="#FFDBB5"/>
  <path d="M39 26 Q40 10 60 10 Q80 10 81 26" fill="#4A2C0A"/>
  <path d="M39 26 Q32 38 35 52" fill="#4A2C0A"/>
  <path d="M81 26 Q88 38 85 52" fill="#4A2C0A"/>
  <circle cx="52" cy="28" r="3" fill="#1A1A2E"/>
  <circle cx="68" cy="28" r="3" fill="#1A1A2E"/>
  <circle cx="53" cy="27" r="1" fill="white"/>
  <circle cx="69" cy="27" r="1" fill="white"/>
  <path d="M52 39 Q60 45 68 39" stroke="#C0627A" stroke-width="2" fill="none"/>
  <ellipse cx="47" cy="36" rx="5" ry="3" fill="#FFB6C1" opacity="0.5"/>
  <ellipse cx="73" cy="36" rx="5" ry="3" fill="#FFB6C1" opacity="0.5"/>
  <!-- Body -->
  <rect x="46" y="49" width="28" height="28" rx="8" fill="#34D399"/>
  <!-- Arms holding bowl -->
  <path d="M46 58 Q36 64 34 72" stroke="#FFDBB5" stroke-width="8" stroke-linecap="round" fill="none"/>
  <path d="M74 58 Q84 64 86 72" stroke="#FFDBB5" stroke-width="8" stroke-linecap="round" fill="none"/>
  <!-- Bowl -->
  <ellipse cx="60" cy="82" rx="20" ry="10" fill="#F3F4F6"/>
  <ellipse cx="60" cy="79" rx="20" ry="8" fill="white" stroke="#D1D5DB" stroke-width="1"/>
  <!-- Rice/food in bowl -->
  <ellipse cx="60" cy="78" rx="16" ry="5" fill="#FEF3C7"/>
  <circle cx="52" cy="77" r="2.5" fill="#F59E0B" opacity="0.8"/>
  <circle cx="60" cy="76" r="2.5" fill="#EF4444" opacity="0.8"/>
  <circle cx="68" cy="77" r="2.5" fill="#10B981" opacity="0.8"/>
  <!-- Steam -->
  <path d="M52 70 Q50 65 52 60" stroke="#9CA3AF" stroke-width="1.5" fill="none" stroke-linecap="round"/>
  <path d="M60 68 Q58 63 60 58" stroke="#9CA3AF" stroke-width="1.5" fill="none" stroke-linecap="round"/>
  <path d="M68 70 Q66 65 68 60" stroke="#9CA3AF" stroke-width="1.5" fill="none" stroke-linecap="round"/>
  <!-- Legs -->
  <rect x="50" y="75" width="9" height="20" rx="4" fill="#065F46"/>
  <rect x="61" y="75" width="9" height="20" rx="4" fill="#065F46"/>
  <text x="60" y="115" text-anchor="middle" font-family="sans-serif" font-size="8.5" font-weight="bold" fill="#065F46">Had lunch? 🍜</text>
</svg>`},

{ id:'s007', tags:['hungry','starving','food','eat'],
  label:'So hungry!', svg:`<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
  <!-- Boy hungry face -->
  <circle cx="60" cy="34" r="24" fill="#FFDBB5"/>
  <path d="M36 28 Q38 10 60 10 Q82 10 84 28 Q80 16 60 16 Q40 16 36 28Z" fill="#2C1A0E"/>
  <!-- Hunger eyes -->
  <circle cx="52" cy="32" r="4" fill="#1A1A2E"/>
  <circle cx="68" cy="32" r="4" fill="#1A1A2E"/>
  <circle cx="54" cy="30" r="1.5" fill="white"/>
  <circle cx="70" cy="30" r="1.5" fill="white"/>
  <!-- Drooling mouth -->
  <path d="M50 44 Q60 54 70 44" fill="#FFD0D8" stroke="#C0627A" stroke-width="2"/>
  <!-- Drool drop -->
  <ellipse cx="66" cy="56" rx="3" ry="4" fill="#BAE6FD" opacity="0.8"/>
  <circle cx="66" cy="61" r="2" fill="#BAE6FD" opacity="0.8"/>
  <!-- Body -->
  <rect x="46" y="58" width="28" height="26" rx="8" fill="#F97316"/>
  <!-- Fork in one hand -->
  <path d="M74 62 Q86 60 90 55" stroke="#FFDBB5" stroke-width="8" stroke-linecap="round" fill="none"/>
  <rect x="88" y="44" width="4" height="14" rx="1" fill="#9CA3AF"/>
  <rect x="86" y="44" width="2" height="8" rx="1" fill="#9CA3AF"/>
  <rect x="91" y="44" width="2" height="8" rx="1" fill="#9CA3AF"/>
  <!-- Stomach growl waves -->
  <path d="M48 70 Q54 67 60 70 Q66 73 72 70" stroke="#FFF7ED" stroke-width="1.5" fill="none" opacity="0.6"/>
  <path d="M48 74 Q54 71 60 74 Q66 77 72 74" stroke="#FFF7ED" stroke-width="1.5" fill="none" opacity="0.4"/>
  <rect x="50" y="82" width="9" height="22" rx="4" fill="#7C2D12"/>
  <rect x="61" y="82" width="9" height="22" rx="4" fill="#7C2D12"/>
  <text x="60" y="116" text-anchor="middle" font-family="sans-serif" font-size="8.5" font-weight="bold" fill="#EA580C">So hungry! 🍴</text>
</svg>`},

// ── MISS YOU ──────────────────────────────────────────────

{ id:'s008', tags:['miss you','missing you','i miss you','miss'],
  label:'Miss you 💕', svg:`<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
  <!-- Girl sad + hearts floating -->
  <circle cx="60" cy="34" r="23" fill="#FFDBB5"/>
  <path d="M37 29 Q39 10 60 10 Q81 10 83 29" fill="#4A2C0A"/>
  <path d="M37 29 Q30 42 34 56" fill="#4A2C0A"/>
  <path d="M83 29 Q90 42 86 56" fill="#4A2C0A"/>
  <!-- Sad eyes with tear -->
  <circle cx="52" cy="32" r="4" fill="#1A1A2E"/>
  <circle cx="68" cy="32" r="4" fill="#1A1A2E"/>
  <circle cx="53.5" cy="30.5" r="1.5" fill="white"/>
  <circle cx="69.5" cy="30.5" r="1.5" fill="white"/>
  <!-- Tear drop -->
  <ellipse cx="50" cy="42" rx="2.5" ry="3.5" fill="#BAE6FD" opacity="0.9"/>
  <circle cx="50" cy="46" r="2" fill="#BAE6FD" opacity="0.9"/>
  <!-- Sad mouth -->
  <path d="M52 45 Q60 40 68 45" stroke="#C0627A" stroke-width="2" fill="none" stroke-linecap="round"/>
  <!-- Body -->
  <rect x="46" y="56" width="28" height="27" rx="8" fill="#F9A8D4"/>
  <!-- Arms crossed -->
  <path d="M46 64 Q40 70 42 78" stroke="#FFDBB5" stroke-width="7" stroke-linecap="round" fill="none"/>
  <path d="M74 64 Q80 70 78 78" stroke="#FFDBB5" stroke-width="7" stroke-linecap="round" fill="none"/>
  <!-- Legs -->
  <rect x="50" y="81" width="9" height="20" rx="4" fill="#BE185D"/>
  <rect x="61" y="81" width="9" height="20" rx="4" fill="#BE185D"/>
  <!-- Floating hearts -->
  <text x="84" y="28" font-size="13">💕</text>
  <text x="90" y="42" font-size="10">💗</text>
  <text x="78" y="16" font-size="10">💓</text>
  <text x="60" y="113" text-anchor="middle" font-family="sans-serif" font-size="9" font-weight="bold" fill="#BE185D">Miss you 💕</text>
</svg>`},

{ id:'s009', tags:['miss you','i miss you boy','miss'],
  label:'Miss you!', svg:`<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
  <!-- Boy sad + hearts -->
  <circle cx="60" cy="34" r="23" fill="#FFDBB5"/>
  <path d="M37 27 Q40 9 60 9 Q80 9 83 27 Q78 15 60 15 Q42 15 37 27Z" fill="#2C1A0E"/>
  <circle cx="52" cy="32" r="4" fill="#1A1A2E"/>
  <circle cx="68" cy="32" r="4" fill="#1A1A2E"/>
  <circle cx="53.5" cy="30.5" r="1.5" fill="white"/>
  <circle cx="69.5" cy="30.5" r="1.5" fill="white"/>
  <!-- Tears both eyes -->
  <ellipse cx="49" cy="41" rx="2" ry="3" fill="#BAE6FD" opacity="0.9"/>
  <ellipse cx="71" cy="41" rx="2" ry="3" fill="#BAE6FD" opacity="0.9"/>
  <!-- Sad mouth -->
  <path d="M52 44 Q60 39 68 44" stroke="#C0627A" stroke-width="2" fill="none" stroke-linecap="round"/>
  <!-- Body -->
  <rect x="46" y="56" width="28" height="27" rx="8" fill="#93C5FD"/>
  <path d="M46 64 Q36 70 34 80" stroke="#FFDBB5" stroke-width="8" stroke-linecap="round" fill="none"/>
  <path d="M74 64 Q84 70 86 80" stroke="#FFDBB5" stroke-width="8" stroke-linecap="round" fill="none"/>
  <rect x="50" y="81" width="9" height="20" rx="4" fill="#1D4ED8"/>
  <rect x="61" y="81" width="9" height="20" rx="4" fill="#1D4ED8"/>
  <text x="84" y="28" font-size="14">💙</text>
  <text x="20" y="38" font-size="12">💭</text>
  <text x="60" y="113" text-anchor="middle" font-family="sans-serif" font-size="9" font-weight="bold" fill="#1D4ED8">I miss you 💙</text>
</svg>`},

// ── LOVE ──────────────────────────────────────────────────

{ id:'s010', tags:['love','i love you','ily','heart'],
  label:'I love you ❤️', svg:`<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
  <!-- Girl heart eyes -->
  <circle cx="60" cy="34" r="24" fill="#FFDBB5"/>
  <path d="M36 28 Q38 9 60 9 Q82 9 84 28" fill="#4A2C0A"/>
  <path d="M36 28 Q28 42 32 56" fill="#4A2C0A"/>
  <path d="M84 28 Q92 42 88 56" fill="#4A2C0A"/>
  <!-- Heart eyes -->
  <text x="46" y="36" font-size="14">❤️</text>
  <text x="61" y="36" font-size="14">❤️</text>
  <!-- Big smile -->
  <path d="M49 44 Q60 54 71 44" fill="#FFB6C1" stroke="#C0627A" stroke-width="2"/>
  <ellipse cx="46" cy="40" rx="6" ry="3" fill="#FFB6C1" opacity="0.6"/>
  <ellipse cx="74" cy="40" rx="6" ry="3" fill="#FFB6C1" opacity="0.6"/>
  <!-- Body -->
  <rect x="46" y="57" width="28" height="28" rx="8" fill="#FB7185"/>
  <!-- Arms open wide -->
  <path d="M46 62 Q32 58 26 52" stroke="#FFDBB5" stroke-width="8" stroke-linecap="round" fill="none"/>
  <path d="M74 62 Q88 58 94 52" stroke="#FFDBB5" stroke-width="8" stroke-linecap="round" fill="none"/>
  <circle cx="24" cy="50" r="6" fill="#FFDBB5"/>
  <circle cx="96" cy="50" r="6" fill="#FFDBB5"/>
  <!-- Legs -->
  <rect x="50" y="83" width="9" height="20" rx="4" fill="#9F1239"/>
  <rect x="61" y="83" width="9" height="20" rx="4" fill="#9F1239"/>
  <!-- Hearts -->
  <text x="42" y="20" font-size="12">💖</text>
  <text x="68" y="16" font-size="14">💖</text>
  <text x="60" y="115" text-anchor="middle" font-family="sans-serif" font-size="9" font-weight="bold" fill="#9F1239">I love you! ❤️</text>
</svg>`},

{ id:'s011', tags:['love','i love you','ily','heart','boy'],
  label:'Love u!', svg:`<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
  <!-- Boy holding heart -->
  <circle cx="60" cy="32" r="22" fill="#FFDBB5"/>
  <path d="M38 26 Q40 8 60 8 Q80 8 82 26 Q78 15 60 15 Q42 15 38 26Z" fill="#2C1A0E"/>
  <!-- Blushing smile -->
  <circle cx="52" cy="30" r="3.5" fill="#1A1A2E"/>
  <circle cx="68" cy="30" r="3.5" fill="#1A1A2E"/>
  <circle cx="53.5" cy="28.5" r="1.2" fill="white"/>
  <circle cx="69.5" cy="28.5" r="1.2" fill="white"/>
  <path d="M51 40 Q60 48 69 40" fill="#FFD0D8" stroke="#C0627A" stroke-width="2"/>
  <ellipse cx="46" cy="37" rx="7" ry="4" fill="#FFB6C1" opacity="0.6"/>
  <ellipse cx="74" cy="37" rx="7" ry="4" fill="#FFB6C1" opacity="0.6"/>
  <!-- Body -->
  <rect x="46" y="52" width="28" height="28" rx="8" fill="#60A5FA"/>
  <!-- Big heart held out -->
  <path d="M56 68 Q56 58 66 58 Q76 58 76 68 Q76 78 60 88 Q44 78 44 68 Q44 58 54 58 Q56 58 56 68Z" fill="#EF4444" transform="translate(0,0) scale(0.8) translate(15, 10)"/>
  <!-- Simpler heart -->
  <path d="M60 90 Q44 80 44 70 Q44 60 54 60 Q58 60 60 64 Q62 60 66 60 Q76 60 76 70 Q76 80 60 90Z" fill="#EF4444"/>
  <rect x="50" y="82" width="9" height="20" rx="4" fill="#1E40AF"/>
  <rect x="61" y="82" width="9" height="20" rx="4" fill="#1E40AF"/>
  <text x="60" y="114" text-anchor="middle" font-family="sans-serif" font-size="9" font-weight="bold" fill="#1E40AF">Love u! 💙❤️</text>
</svg>`},

{ id:'s012', tags:['hug','hugs','cuddle','hold'],
  label:'Hugs!', svg:`<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
  <!-- Girl and boy hugging -->
  <!-- Girl (left) -->
  <circle cx="40" cy="34" r="17" fill="#FFDBB5"/>
  <path d="M23 28 Q24 15 40 15 Q56 15 57 28" fill="#4A2C0A"/>
  <path d="M23 28 Q18 38 22 48" fill="#4A2C0A"/>
  <circle cx="35" cy="33" r="3" fill="#1A1A2E"/>
  <circle cx="45" cy="33" r="3" fill="#1A1A2E"/>
  <path d="M34 41 Q40 46 46 41" stroke="#C0627A" stroke-width="1.8" fill="none"/>
  <ellipse cx="31" cy="39" rx="4" ry="2.5" fill="#FFB6C1" opacity="0.5"/>
  <ellipse cx="49" cy="39" rx="4" ry="2.5" fill="#FFB6C1" opacity="0.5"/>
  <rect x="28" y="50" width="22" height="22" rx="6" fill="#F9A8D4"/>
  <!-- Boy (right) -->
  <circle cx="80" cy="34" r="17" fill="#FFDBB5"/>
  <path d="M63 28 Q64 15 80 15 Q96 15 97 28 Q94 18 80 18 Q66 18 63 28Z" fill="#2C1A0E"/>
  <circle cx="75" cy="33" r="3" fill="#1A1A2E"/>
  <circle cx="85" cy="33" r="3" fill="#1A1A2E"/>
  <path d="M74 41 Q80 46 86 41" stroke="#C0627A" stroke-width="1.8" fill="none"/>
  <ellipse cx="71" cy="39" rx="4" ry="2.5" fill="#FFB6C1" opacity="0.5"/>
  <ellipse cx="89" cy="39" rx="4" ry="2.5" fill="#FFB6C1" opacity="0.5"/>
  <rect x="69" y="50" width="22" height="22" rx="6" fill="#93C5FD"/>
  <!-- Hugging arms -->
  <path d="M50 58 Q60 54 70 58" stroke="#FFDBB5" stroke-width="9" stroke-linecap="round" fill="none"/>
  <!-- Heart above -->
  <text x="52" y="20" font-size="16">❤️</text>
  <!-- Legs girl -->
  <rect x="32" y="70" width="7" height="18" rx="3" fill="#BE185D"/>
  <rect x="41" y="70" width="7" height="18" rx="3" fill="#BE185D"/>
  <!-- Legs boy -->
  <rect x="72" y="70" width="7" height="18" rx="3" fill="#1D4ED8"/>
  <rect x="81" y="70" width="7" height="18" rx="3" fill="#1D4ED8"/>
  <text x="60" y="100" text-anchor="middle" font-family="sans-serif" font-size="9.5" font-weight="bold" fill="#9D174D">Hugs! 🤗</text>
</svg>`},

// ── GOOD MORNING/NIGHT ────────────────────────────────────

{ id:'s013', tags:['good morning','morning','gm','rise'],
  label:'Good morning!', svg:`<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
  <!-- Sun -->
  <circle cx="60" cy="30" r="18" fill="#FDE047" opacity="0.9"/>
  <circle cx="60" cy="30" r="13" fill="#FACC15"/>
  <!-- Sun rays -->
  <line x1="60" y1="6" x2="60" y2="2" stroke="#FACC15" stroke-width="3" stroke-linecap="round"/>
  <line x1="60" y1="54" x2="60" y2="58" stroke="#FACC15" stroke-width="3" stroke-linecap="round"/>
  <line x1="36" y1="30" x2="32" y2="30" stroke="#FACC15" stroke-width="3" stroke-linecap="round"/>
  <line x1="84" y1="30" x2="88" y2="30" stroke="#FACC15" stroke-width="3" stroke-linecap="round"/>
  <line x1="43" y1="13" x2="40" y2="10" stroke="#FACC15" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="77" y1="13" x2="80" y2="10" stroke="#FACC15" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="43" y1="47" x2="40" y2="50" stroke="#FACC15" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="77" y1="47" x2="80" y2="50" stroke="#FACC15" stroke-width="2.5" stroke-linecap="round"/>
  <!-- Sun face -->
  <circle cx="55" cy="28" r="2.5" fill="#854D0E"/>
  <circle cx="65" cy="28" r="2.5" fill="#854D0E"/>
  <path d="M54 34 Q60 39 66 34" stroke="#854D0E" stroke-width="1.8" fill="none" stroke-linecap="round"/>
  <!-- Girl waking up -->
  <circle cx="60" cy="80" r="17" fill="#FFDBB5"/>
  <path d="M43 74 Q44 62 60 62 Q76 62 77 74" fill="#4A2C0A"/>
  <!-- Sleepy eyes opening -->
  <path d="M53 78 Q57 75 61 78" stroke="#1A1A2E" stroke-width="2.2" fill="none" stroke-linecap="round"/>
  <path d="M63 78 Q67 75 71 78" stroke="#1A1A2E" stroke-width="2.2" fill="none" stroke-linecap="round"/>
  <circle cx="57" cy="79" r="2" fill="#1A1A2E"/>
  <circle cx="67" cy="79" r="2" fill="#1A1A2E"/>
  <path d="M54 86 Q60 91 66 86" stroke="#C0627A" stroke-width="2" fill="none"/>
  <ellipse cx="47" cy="84" rx="5" ry="3" fill="#FFB6C1" opacity="0.5"/>
  <ellipse cx="73" cy="84" rx="5" ry="3" fill="#FFB6C1" opacity="0.5"/>
  <!-- Stars fading -->
  <text x="28" y="70" font-size="10" opacity="0.4">⭐</text>
  <text x="84" y="66" font-size="10" opacity="0.4">⭐</text>
  <text x="60" y="112" text-anchor="middle" font-family="sans-serif" font-size="8.5" font-weight="bold" fill="#D97706">Good morning! ☀️</text>
</svg>`},

{ id:'s014', tags:['good night','night','gn','sleep','sweet dreams'],
  label:'Good night!', svg:`<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
  <!-- Night sky -->
  <rect x="0" y="0" width="120" height="80" rx="12" fill="#0F172A"/>
  <!-- Moon -->
  <circle cx="85" cy="22" r="14" fill="#FDE68A"/>
  <circle cx="91" cy="16" r="11" fill="#0F172A"/>
  <!-- Stars -->
  <text x="10" y="20" font-size="8">⭐</text>
  <text x="30" y="12" font-size="6">✨</text>
  <text x="50" y="18" font-size="7">⭐</text>
  <text x="20" y="36" font-size="6">✨</text>
  <text x="40" y="30" font-size="5">✨</text>
  <!-- Boy sleeping in bed -->
  <rect x="10" y="72" width="100" height="14" rx="6" fill="#6B7280"/>
  <rect x="10" y="70" width="100" height="8" rx="4" fill="#9CA3AF"/>
  <circle cx="36" cy="72" r="16" fill="#FFDBB5"/>
  <path d="M20 64 Q22 50 36 50 Q50 50 52 64 Q48 55 36 55 Q24 55 20 64Z" fill="#2C1A0E"/>
  <!-- ZZZ -->
  <text x="54" y="58" font-family="sans-serif" font-size="12" font-weight="bold" fill="#A5B4FC" opacity="0.9">z</text>
  <text x="64" y="50" font-family="sans-serif" font-size="14" font-weight="bold" fill="#A5B4FC" opacity="0.7">z</text>
  <text x="76" y="42" font-family="sans-serif" font-size="16" font-weight="bold" fill="#A5B4FC" opacity="0.5">z</text>
  <!-- Peaceful sleeping face -->
  <path d="M28 70 Q32 68 36 70 Q40 68 44 70" stroke="#1A1A2E" stroke-width="1.8" fill="none" stroke-linecap="round"/>
  <path d="M30 76 Q36 80 42 76" stroke="#C0627A" stroke-width="1.5" fill="none" stroke-linecap="round"/>
  <!-- Pillow -->
  <ellipse cx="36" cy="82" rx="20" ry="6" fill="#E5E7EB" opacity="0.5"/>
  <text x="60" y="100" text-anchor="middle" font-family="sans-serif" font-size="8.5" font-weight="bold" fill="#818CF8">Good night! 🌙</text>
</svg>`},

// ── THINKING / WAITING ────────────────────────────────────

{ id:'s015', tags:['thinking','hmm','wait','wondering'],
  label:'Hmm thinking…', svg:`<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
  <circle cx="60" cy="36" r="24" fill="#FFDBB5"/>
  <path d="M36 30 Q38 10 60 10 Q82 10 84 30" fill="#4A2C0A"/>
  <path d="M36 30 Q28 44 32 58" fill="#4A2C0A"/>
  <path d="M84 30 Q92 44 88 58" fill="#4A2C0A"/>
  <!-- Thinking eyes (one squinted) -->
  <circle cx="52" cy="34" r="3.5" fill="#1A1A2E"/>
  <path d="M63 32 Q68 30 72 32" stroke="#1A1A2E" stroke-width="2.5" fill="none" stroke-linecap="round"/>
  <circle cx="67.5" cy="34" r="2.5" fill="#1A1A2E"/>
  <circle cx="53.5" cy="32.5" r="1.2" fill="white"/>
  <!-- Pursed lips -->
  <path d="M53 44 Q60 47 65 43" stroke="#C0627A" stroke-width="2" fill="none" stroke-linecap="round"/>
  <!-- Hand on chin -->
  <path d="M74 62 Q86 58 88 50" stroke="#FFDBB5" stroke-width="8" stroke-linecap="round" fill="none"/>
  <circle cx="88" cy="48" r="7" fill="#FFDBB5"/>
  <!-- Body -->
  <rect x="46" y="58" width="28" height="27" rx="8" fill="#A78BFA"/>
  <path d="M46 66 Q36 72 34 80" stroke="#FFDBB5" stroke-width="8" stroke-linecap="round" fill="none"/>
  <!-- Thought bubble -->
  <circle cx="94" cy="34" r="4" fill="#E5E7EB" opacity="0.9"/>
  <circle cx="102" cy="26" r="6" fill="#E5E7EB" opacity="0.9"/>
  <circle cx="110" cy="16" r="9" fill="#F3F4F6"/>
  <text x="108" y="20" text-anchor="middle" font-size="10">🤔</text>
  <rect x="50" y="83" width="9" height="20" rx="4" fill="#7C3AED"/>
  <rect x="61" y="83" width="9" height="20" rx="4" fill="#7C3AED"/>
  <text x="55" y="115" text-anchor="middle" font-family="sans-serif" font-size="8" font-weight="bold" fill="#7C3AED">Hmm… 🤔</text>
</svg>`},

// ── OKAY / SURE ───────────────────────────────────────────

{ id:'s016', tags:['okay','ok','sure','alright','fine','sure thing'],
  label:'Okay!', svg:`<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
  <circle cx="60" cy="33" r="23" fill="#FFDBB5"/>
  <path d="M37 27 Q40 9 60 9 Q80 9 83 27 Q78 15 60 15 Q42 15 37 27Z" fill="#2C1A0E"/>
  <circle cx="52" cy="31" r="3.5" fill="#1A1A2E"/>
  <circle cx="68" cy="31" r="3.5" fill="#1A1A2E"/>
  <circle cx="53.5" cy="29.5" r="1.2" fill="white"/>
  <circle cx="69.5" cy="29.5" r="1.2" fill="white"/>
  <path d="M51 41 Q60 49 69 41" fill="#FFD0D8" stroke="#C0627A" stroke-width="2"/>
  <!-- OK sign hand -->
  <path d="M74 58 Q86 54 90 46" stroke="#FFDBB5" stroke-width="8" stroke-linecap="round" fill="none"/>
  <circle cx="90" cy="44" r="7" fill="#FFDBB5"/>
  <!-- OK circle with finger tip -->
  <circle cx="90" cy="40" r="5" stroke="#FFDBB5" stroke-width="2" fill="none"/>
  <path d="M86 40 Q90 32 95 34" stroke="#FFDBB5" stroke-width="3.5" stroke-linecap="round" fill="none"/>
  <!-- Body -->
  <rect x="46" y="54" width="28" height="28" rx="8" fill="#34D399"/>
  <path d="M46 62 Q36 68 34 78" stroke="#FFDBB5" stroke-width="8" stroke-linecap="round" fill="none"/>
  <rect x="50" y="80" width="9" height="22" rx="4" fill="#065F46"/>
  <rect x="61" y="80" width="9" height="22" rx="4" fill="#065F46"/>
  <text x="60" y="114" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="bold" fill="#065F46">Okay! 👌</text>
</svg>`},

// ── SORRY ─────────────────────────────────────────────────

{ id:'s017', tags:['sorry','apologize','my bad','oops'],
  label:'Sorry! 🙏', svg:`<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
  <!-- Girl apologizing bow -->
  <circle cx="60" cy="36" r="23" fill="#FFDBB5"/>
  <path d="M37 30 Q39 11 60 11 Q81 11 83 30" fill="#4A2C0A"/>
  <path d="M37 30 Q30 43 34 57" fill="#4A2C0A"/>
  <path d="M83 30 Q90 43 86 57" fill="#4A2C0A"/>
  <!-- Closed eyes (bow) -->
  <path d="M49 34 Q52 31 55 34" stroke="#1A1A2E" stroke-width="2.5" fill="none" stroke-linecap="round"/>
  <path d="M65 34 Q68 31 71 34" stroke="#1A1A2E" stroke-width="2.5" fill="none" stroke-linecap="round"/>
  <!-- ^^v mouth -->
  <path d="M53 44 Q60 39 67 44" stroke="#C0627A" stroke-width="2" fill="none" stroke-linecap="round"/>
  <!-- Blush heavy -->
  <ellipse cx="46" cy="41" rx="8" ry="4" fill="#FFB6C1" opacity="0.7"/>
  <ellipse cx="74" cy="41" rx="8" ry="4" fill="#FFB6C1" opacity="0.7"/>
  <!-- Body leaning forward slightly -->
  <rect x="46" y="58" width="28" height="26" rx="8" fill="#FCA5A5"/>
  <!-- Both hands pressed together (prayer) -->
  <path d="M46 65 Q40 72 42 80" stroke="#FFDBB5" stroke-width="7" stroke-linecap="round" fill="none"/>
  <path d="M74 65 Q80 72 78 80" stroke="#FFDBB5" stroke-width="7" stroke-linecap="round" fill="none"/>
  <!-- Praying hands in front -->
  <ellipse cx="60" cy="78" rx="8" ry="5" fill="#FFDBB5"/>
  <rect x="50" y="82" width="9" height="20" rx="4" fill="#B91C1C"/>
  <rect x="61" y="82" width="9" height="20" rx="4" fill="#B91C1C"/>
  <text x="60" y="114" text-anchor="middle" font-family="sans-serif" font-size="9" font-weight="bold" fill="#B91C1C">So sorry! 🙏</text>
</svg>`},

// ── HAPPY / YAY ───────────────────────────────────────────

{ id:'s018', tags:['happy','yay','excited','celebrate','woohoo'],
  label:'Yay! 🎉', svg:`<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
  <!-- Girl celebrating with confetti -->
  <!-- Confetti -->
  <rect x="15" y="10" width="6" height="6" rx="1" fill="#F59E0B" transform="rotate(20,18,13)"/>
  <rect x="90" y="8" width="5" height="5" rx="1" fill="#EF4444" transform="rotate(-15,92,10)"/>
  <rect x="100" y="25" width="4" height="8" rx="1" fill="#10B981" transform="rotate(30,102,29)"/>
  <rect x="18" y="28" width="4" height="8" rx="1" fill="#A78BFA" transform="rotate(-20,20,32)"/>
  <circle cx="106" cy="14" r="3" fill="#FBBF24"/>
  <circle cx="12" cy="22" r="3" fill="#60A5FA"/>
  <path d="M88 18 L93 14 L89 22Z" fill="#F472B6"/>
  <path d="M26 14 L31 10 L27 18Z" fill="#34D399"/>
  <!-- Character -->
  <circle cx="60" cy="36" r="23" fill="#FFDBB5"/>
  <path d="M37 30 Q39 11 60 11 Q81 11 83 30" fill="#4A2C0A"/>
  <path d="M37 30 Q30 43 34 57" fill="#4A2C0A"/>
  <path d="M83 30 Q90 43 86 57" fill="#4A2C0A"/>
  <!-- Excited eyes -->
  <circle cx="52" cy="33" r="4.5" fill="#1A1A2E"/>
  <circle cx="68" cy="33" r="4.5" fill="#1A1A2E"/>
  <circle cx="54" cy="31" r="1.8" fill="white"/>
  <circle cx="70" cy="31" r="1.8" fill="white"/>
  <!-- Big O mouth -->
  <ellipse cx="60" cy="44" rx="7" ry="6" fill="#C0627A"/>
  <ellipse cx="60" cy="44" rx="5" ry="4" fill="#FF1493" opacity="0.4"/>
  <ellipse cx="46" cy="38" rx="7" ry="4" fill="#FFB6C1" opacity="0.7"/>
  <ellipse cx="74" cy="38" rx="7" ry="4" fill="#FFB6C1" opacity="0.7"/>
  <!-- Body arms up -->
  <rect x="46" y="58" width="28" height="26" rx="8" fill="#FB923C"/>
  <path d="M46 60 Q32 52 28 42" stroke="#FFDBB5" stroke-width="8" stroke-linecap="round" fill="none"/>
  <path d="M74 60 Q88 52 92 42" stroke="#FFDBB5" stroke-width="8" stroke-linecap="round" fill="none"/>
  <circle cx="26" cy="40" r="7" fill="#FFDBB5"/>
  <circle cx="94" cy="40" r="7" fill="#FFDBB5"/>
  <rect x="50" y="82" width="9" height="20" rx="4" fill="#C2410C"/>
  <rect x="61" y="82" width="9" height="20" rx="4" fill="#C2410C"/>
  <text x="60" y="114" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="bold" fill="#C2410C">YAY! 🎉</text>
</svg>`},

// ── WAITING / BORED ───────────────────────────────────────

{ id:'s019', tags:['waiting','bored','when','hurry','come on'],
  label:'Waiting…', svg:`<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
  <circle cx="60" cy="35" r="23" fill="#FFDBB5"/>
  <path d="M37 29 Q40 11 60 11 Q80 11 83 29 Q78 17 60 17 Q42 17 37 29Z" fill="#2C1A0E"/>
  <!-- Flat eyes -->
  <path d="M48 33 Q52 31 56 33" stroke="#1A1A2E" stroke-width="2.5" fill="none" stroke-linecap="round"/>
  <path d="M64 33 Q68 31 72 33" stroke="#1A1A2E" stroke-width="2.5" fill="none" stroke-linecap="round"/>
  <!-- Flat mouth -->
  <line x1="53" y1="44" x2="67" y2="44" stroke="#C0627A" stroke-width="2" stroke-linecap="round"/>
  <!-- Tapping finger arm -->
  <path d="M74 62 Q86 58 90 52" stroke="#FFDBB5" stroke-width="8" stroke-linecap="round" fill="none"/>
  <circle cx="90" cy="50" r="7" fill="#FFDBB5"/>
  <!-- Tapping point finger -->
  <path d="M90 44 Q90 36 92 34" stroke="#FFDBB5" stroke-width="3.5" stroke-linecap="round" fill="none"/>
  <!-- Body -->
  <rect x="46" y="57" width="28" height="27" rx="8" fill="#6B7280"/>
  <path d="M46 65 Q36 71 34 79" stroke="#FFDBB5" stroke-width="8" stroke-linecap="round" fill="none"/>
  <!-- Clock bubble -->
  <circle cx="22" cy="30" r="14" fill="white" stroke="#D1D5DB" stroke-width="1.5"/>
  <circle cx="22" cy="30" r="2" fill="#374151"/>
  <line x1="22" y1="30" x2="22" y2="22" stroke="#374151" stroke-width="2" stroke-linecap="round"/>
  <line x1="22" y1="30" x2="28" y2="30" stroke="#EF4444" stroke-width="2" stroke-linecap="round"/>
  <rect x="50" y="82" width="9" height="20" rx="4" fill="#374151"/>
  <rect x="61" y="82" width="9" height="20" rx="4" fill="#374151"/>
  <text x="60" y="114" text-anchor="middle" font-family="sans-serif" font-size="9" font-weight="bold" fill="#374151">Waiting… ⏰</text>
</svg>`},

// ── KISS / BLOWING KISS ───────────────────────────────────

{ id:'s020', tags:['kiss','mwah','blow kiss','muah','kissy'],
  label:'Mwah! 💋', svg:`<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
  <circle cx="55" cy="36" r="24" fill="#FFDBB5"/>
  <path d="M31 30 Q33 10 55 10 Q77 10 79 30" fill="#4A2C0A"/>
  <path d="M31 30 Q24 43 28 57" fill="#4A2C0A"/>
  <path d="M79 30 Q86 43 82 57" fill="#4A2C0A"/>
  <circle cx="47" cy="33" r="4" fill="#1A1A2E"/>
  <circle cx="63" cy="33" r="4" fill="#1A1A2E"/>
  <circle cx="48.5" cy="31.5" r="1.5" fill="white"/>
  <circle cx="64.5" cy="31.5" r="1.5" fill="white"/>
  <!-- Kissing lips puckered -->
  <ellipse cx="55" cy="45" rx="5" ry="4" fill="#E11D48"/>
  <ellipse cx="55" cy="43" rx="5" ry="2.5" fill="#FB7185"/>
  <!-- Blush heavy -->
  <ellipse cx="42" cy="40" rx="8" ry="4" fill="#FFB6C1" opacity="0.7"/>
  <ellipse cx="68" cy="40" rx="8" ry="4" fill="#FFB6C1" opacity="0.7"/>
  <!-- Flying hearts + kiss marks -->
  <text x="76" y="34" font-size="16">💋</text>
  <text x="86" y="20" font-size="13">💕</text>
  <text x="96" y="34" font-size="10">💗</text>
  <!-- Body -->
  <rect x="40" y="59" width="28" height="27" rx="8" fill="#F9A8D4"/>
  <path d="M40 67 Q30 73 28 81" stroke="#FFDBB5" stroke-width="8" stroke-linecap="round" fill="none"/>
  <path d="M68 67 Q78 73 80 81" stroke="#FFDBB5" stroke-width="8" stroke-linecap="round" fill="none"/>
  <rect x="44" y="84" width="9" height="20" rx="4" fill="#9D174D"/>
  <rect x="55" y="84" width="9" height="20" rx="4" fill="#9D174D"/>
  <text x="55" y="115" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="bold" fill="#9D174D">Mwah! 💋</text>
</svg>`},

// ── COUPLE ────────────────────────────────────────────────

{ id:'s021', tags:['together','couple','us','love','heart'],
  label:'Us ❤️', svg:`<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
  <!-- Boy left -->
  <circle cx="36" cy="34" r="18" fill="#FFDBB5"/>
  <path d="M18 27 Q20 12 36 12 Q52 12 54 27 Q50 18 36 18 Q22 18 18 27Z" fill="#2C1A0E"/>
  <circle cx="30" cy="33" r="3" fill="#1A1A2E"/>
  <circle cx="42" cy="33" r="3" fill="#1A1A2E"/>
  <path d="M29 41 Q36 46 43 41" stroke="#C0627A" stroke-width="1.8" fill="none"/>
  <ellipse cx="27" cy="39" rx="4" ry="2.5" fill="#FFB6C1" opacity="0.5"/>
  <ellipse cx="45" cy="39" rx="4" ry="2.5" fill="#FFB6C1" opacity="0.5"/>
  <!-- Girl right -->
  <circle cx="84" cy="34" r="18" fill="#FFDBB5"/>
  <path d="M66 28 Q67 13 84 13 Q101 13 102 28" fill="#4A2C0A"/>
  <path d="M66 28 Q60 39 63 51" fill="#4A2C0A"/>
  <path d="M102 28 Q108 39 105 51" fill="#4A2C0A"/>
  <circle cx="78" cy="33" r="3" fill="#1A1A2E"/>
  <circle cx="90" cy="33" r="3" fill="#1A1A2E"/>
  <path d="M77 41 Q84 46 91 41" stroke="#C0627A" stroke-width="1.8" fill="none"/>
  <ellipse cx="75" cy="39" rx="4" ry="2.5" fill="#FFB6C1" opacity="0.5"/>
  <ellipse cx="93" cy="39" rx="4" ry="2.5" fill="#FFB6C1" opacity="0.5"/>
  <!-- Bodies -->
  <rect x="22" y="51" width="26" height="24" rx="7" fill="#60A5FA"/>
  <rect x="72" y="51" width="26" height="24" rx="7" fill="#F9A8D4"/>
  <!-- Holding hands in middle -->
  <path d="M48 62 Q60 58 72 62" stroke="#FFDBB5" stroke-width="8" stroke-linecap="round" fill="none"/>
  <!-- Heart above -->
  <path d="M60 20 Q60 10 70 10 Q80 10 80 20 Q80 30 60 40 Q40 30 40 20 Q40 10 50 10 Q60 10 60 20Z" fill="#EF4444" opacity="0.85"/>
  <!-- Legs boy -->
  <rect x="26" y="73" width="7" height="19" rx="3" fill="#1D4ED8"/>
  <rect x="35" y="73" width="7" height="19" rx="3" fill="#1D4ED8"/>
  <!-- Legs girl -->
  <rect x="76" y="73" width="7" height="19" rx="3" fill="#BE185D"/>
  <rect x="85" y="73" width="7" height="19" rx="3" fill="#BE185D"/>
  <text x="60" y="104" text-anchor="middle" font-family="sans-serif" font-size="9" font-weight="bold" fill="#9F1239">Us ❤️</text>
</svg>`},

// ── CUTE BONUS ────────────────────────────────────────────

{ id:'s022', tags:['cute','aww','adorable','sweet'],
  label:'Aww! 🥺', svg:`<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
  <circle cx="60" cy="38" r="28" fill="#FFDBB5"/>
  <path d="M32 32 Q34 9 60 9 Q86 9 88 32" fill="#4A2C0A"/>
  <path d="M32 32 Q24 46 28 62" fill="#4A2C0A"/>
  <path d="M88 32 Q96 46 92 62" fill="#4A2C0A"/>
  <!-- Puppy eyes big -->
  <circle cx="50" cy="36" r="6.5" fill="#1A1A2E"/>
  <circle cx="70" cy="36" r="6.5" fill="#1A1A2E"/>
  <circle cx="52" cy="33" r="2.5" fill="white"/>
  <circle cx="72" cy="33" r="2.5" fill="white"/>
  <!-- tiny tear puppy -->
  <ellipse cx="47" cy="46" rx="2" ry="3" fill="#BAE6FD" opacity="0.8"/>
  <!-- Tiny quivering lip -->
  <path d="M54 50 Q60 54 66 50" stroke="#C0627A" stroke-width="2.5" fill="#FFD0D8"/>
  <ellipse cx="48" cy="44" rx="7" ry="4" fill="#FFB6C1" opacity="0.6"/>
  <ellipse cx="72" cy="44" rx="7" ry="4" fill="#FFB6C1" opacity="0.6"/>
  <rect x="46" y="64" width="28" height="26" rx="8" fill="#C4B5FD"/>
  <path d="M46 72 Q34 78 32 86" stroke="#FFDBB5" stroke-width="8" stroke-linecap="round" fill="none"/>
  <path d="M74 72 Q86 78 88 86" stroke="#FFDBB5" stroke-width="8" stroke-linecap="round" fill="none"/>
  <rect x="50" y="88" width="9" height="18" rx="4" fill="#6D28D9"/>
  <rect x="61" y="88" width="9" height="18" rx="4" fill="#6D28D9"/>
  <text x="60" y="116" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="bold" fill="#6D28D9">Aww! 🥺</text>
</svg>`},

{ id:'s023', tags:['laughing','lol','funny','haha','lmao'],
  label:'LOL 😂', svg:`<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
  <circle cx="60" cy="36" r="24" fill="#FFDBB5"/>
  <path d="M36 30 Q38 10 60 10 Q82 10 84 30" fill="#4A2C0A"/>
  <path d="M36 30 Q28 43 32 57" fill="#4A2C0A"/>
  <path d="M84 30 Q92 43 88 57" fill="#4A2C0A"/>
  <!-- Laughing closed eyes crescent -->
  <path d="M46 31 Q52 26 58 31" stroke="#1A1A2E" stroke-width="3" fill="none" stroke-linecap="round"/>
  <path d="M62 31 Q68 26 74 31" stroke="#1A1A2E" stroke-width="3" fill="none" stroke-linecap="round"/>
  <!-- LOL mouth wide open -->
  <path d="M48 41 Q60 56 72 41" fill="#C0627A" stroke="#9D4E63" stroke-width="1.5"/>
  <ellipse cx="60" cy="50" rx="8" ry="4" fill="#FF1493" opacity="0.3"/>
  <path d="M53 41 L67 41" stroke="#F9A8D4" stroke-width="2.5"/>
  <!-- Laugh tears flying -->
  <ellipse cx="40" cy="38" rx="3" ry="4" fill="#BAE6FD" transform="rotate(-20,40,38)"/>
  <ellipse cx="80" cy="38" rx="3" ry="4" fill="#BAE6FD" transform="rotate(20,80,38)"/>
  <!-- HA HA text bubbles -->
  <circle cx="18" cy="24" r="10" fill="#FEF08A" opacity="0.9"/>
  <text x="18" y="27" text-anchor="middle" font-family="sans-serif" font-size="8" font-weight="bold" fill="#854D0E">HA</text>
  <circle cx="102" cy="20" r="10" fill="#FEF08A" opacity="0.9"/>
  <text x="102" y="23" text-anchor="middle" font-family="sans-serif" font-size="8" font-weight="bold" fill="#854D0E">HA</text>
  <!-- Body holding belly -->
  <rect x="46" y="59" width="28" height="26" rx="8" fill="#FBBF24"/>
  <path d="M46 67 Q36 73 36 81 Q44 78 50 74" stroke="#FFDBB5" stroke-width="8" stroke-linecap="round" fill="none"/>
  <path d="M74 67 Q84 73 84 81 Q76 78 70 74" stroke="#FFDBB5" stroke-width="8" stroke-linecap="round" fill="none"/>
  <rect x="50" y="83" width="9" height="20" rx="4" fill="#92400E"/>
  <rect x="61" y="83" width="9" height="20" rx="4" fill="#92400E"/>
  <text x="60" y="115" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="bold" fill="#92400E">LOL 😂</text>
</svg>`},

];

// Tag-to-sticker index for fast lookup
const STICKER_TAG_MAP = {};
STICKER_PACK.forEach(s => {
  s.tags.forEach(tag => {
    if (!STICKER_TAG_MAP[tag]) STICKER_TAG_MAP[tag] = [];
    STICKER_TAG_MAP[tag].push(s);
  });
});

// Keyword triggers for auto-suggest
const SUGGEST_TRIGGERS = {
  'hi': ['s001','s002'],
  'hey': ['s001','s002'],
  'hello': ['s001','s002'],
  'how r': ['s003','s004'],
  'how are': ['s003','s004'],
  'hru': ['s003'],
  'whats up': ['s005'],
  'wassup': ['s005'],
  'sup': ['s005'],
  'lunch': ['s006','s007'],
  'hungry': ['s007'],
  'eat': ['s006','s007'],
  'miss you': ['s008','s009'],
  'i miss': ['s008','s009'],
  'love': ['s010','s011'],
  'i love': ['s010','s011'],
  'ily': ['s010','s011'],
  'hug': ['s012'],
  'morning': ['s013'],
  'gm': ['s013'],
  'night': ['s014'],
  'gn': ['s014'],
  'sleep': ['s014'],
  'sorry': ['s017'],
  'ok': ['s016'],
  'okay': ['s016'],
  'sure': ['s016'],
  'yay': ['s018'],
  'happy': ['s018'],
  'wait': ['s019'],
  'waiting': ['s019'],
  'kiss': ['s020'],
  'mwah': ['s020'],
  'us': ['s021'],
  'together': ['s021'],
  'cute': ['s022'],
  'aww': ['s022'],
  'lol': ['s023'],
  'haha': ['s023'],
  'funny': ['s023'],
  'thinking': ['s015'],
  'hmm': ['s015'],
};

function getStickerById(id) {
  return STICKER_PACK.find(s => s.id === id);
}

function searchStickers(query) {
  if (!query) return STICKER_PACK;
  const q = query.toLowerCase().trim();
  const seen = new Set();
  const results = [];
  STICKER_PACK.forEach(s => {
    if (!seen.has(s.id) && s.tags.some(t => t.includes(q))) {
      seen.add(s.id);
      results.push(s);
    }
  });
  return results;
}

function getSuggestedStickers(text) {
  const lower = text.toLowerCase();
  const seen = new Set();
  const ids = [];
  for (const [kw, stickerIds] of Object.entries(SUGGEST_TRIGGERS)) {
    if (lower.includes(kw)) {
      stickerIds.forEach(id => { if (!seen.has(id)) { seen.add(id); ids.push(id); } });
    }
  }
  return ids.map(id => STICKER_PACK.find(s => s.id === id)).filter(Boolean);
}
