// ============================================================
// WHISPR — Animated GIF Library  (human-face edition)
// Pure inline SVG + CSS keyframes — zero external requests
// Every GIF has a matching GIF_FX entry for background effects
// ============================================================

const GIF_CATEGORIES = [

// ─────────────────────────────────────────────────────────────
{id:'love', label:'❤️ Love', gifs:[

{id:'g_love1', alt:'Heart eyes in love', html:`
<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%">
<style>
@keyframes hpop{0%,100%{transform:scale(1) rotate(-8deg)}50%{transform:scale(1.35) rotate(8deg)}}
@keyframes blush{0%,100%{opacity:0.45}50%{opacity:0.8}}
.hp{animation:hpop 0.7s ease-in-out infinite}
.bl{animation:blush 1.2s ease-in-out infinite}
</style>
<rect width="80" height="80" fill="#FFF0F3" rx="12"/>
<circle cx="40" cy="42" r="24" fill="#FFDBB5"/>
<ellipse cx="40" cy="20" rx="22" ry="10" fill="#3D1F00"/>
<rect x="18" y="20" width="44" height="8" fill="#3D1F00" rx="4"/>
<g class="hp" style="transform-origin:27px 40px">
  <path d="M27 44C27 44 19 39 19 34.5C19 31.5 21.5 29.5 24 30.5C25.2 31 26.2 32 27 33.2C27.8 32 28.8 31 30 30.5C32.5 29.5 35 31.5 35 34.5C35 39 27 44 27 44Z" fill="#FF4D79"/>
</g>
<g class="hp" style="transform-origin:53px 40px">
  <path d="M53 44C53 44 45 39 45 34.5C45 31.5 47.5 29.5 50 30.5C51.2 31 52.2 32 53 33.2C53.8 32 54.8 31 56 30.5C58.5 29.5 61 31.5 61 34.5C61 39 53 44 53 44Z" fill="#FF4D79"/>
</g>
<ellipse class="bl" cx="22" cy="50" rx="7" ry="4" fill="#FF8FAB"/>
<ellipse class="bl" cx="58" cy="50" rx="7" ry="4" fill="#FF8FAB"/>
<path d="M28 54 Q40 65 52 54" stroke="#C0627A" stroke-width="2.5" fill="none" stroke-linecap="round"/>
</svg>`},

{id:'g_love2', alt:'Sending a kiss', html:`
<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%">
<style>
@keyframes wink{0%,85%,100%{transform:scaleY(1)}90%,95%{transform:scaleY(0.08)}}
@keyframes kissfly{0%{transform:translate(0,0) scale(0.4);opacity:0}30%{opacity:1;transform:translate(4px,-6px) scale(1)}100%{transform:translate(22px,-30px) scale(0.3);opacity:0}}
@keyframes pucker{0%,100%{transform:scale(1)}50%{transform:scale(1.15) translateY(-1px)}}
.wk{animation:wink 2.2s ease-in-out infinite;transform-origin:50px 38px}
.kf{animation:kissfly 1.6s ease-out infinite}
.kf2{animation:kissfly 1.6s ease-out 0.5s infinite}
.kf3{animation:kissfly 1.6s ease-out 1s infinite}
.pk{animation:pucker 0.9s ease-in-out infinite}
</style>
<rect width="80" height="80" fill="#FFF5F8" rx="12"/>
<circle cx="38" cy="44" r="22" fill="#FFDBB5"/>
<ellipse cx="38" cy="23" rx="20" ry="9" fill="#5C2D0E"/>
<rect x="18" y="23" width="40" height="6" fill="#5C2D0E" rx="3"/>
<ellipse cx="18" cy="36" rx="5" ry="12" fill="#5C2D0E"/>
<g class="wk"><ellipse cx="29" cy="38" rx="5" ry="5" fill="#2C1A0E"/><circle cx="30.5" cy="36.5" r="1.5" fill="white"/></g>
<ellipse cx="47" cy="38" rx="5" ry="5" fill="#2C1A0E"/><circle cx="48.5" cy="36.5" r="1.5" fill="white"/>
<ellipse cx="20" cy="49" rx="6" ry="3.5" fill="#FFB3C6" opacity=".6"/>
<ellipse cx="56" cy="49" rx="6" ry="3.5" fill="#FFB3C6" opacity=".6"/>
<g class="pk"><ellipse cx="38" cy="56" rx="8" ry="5" fill="#E06080"/><ellipse cx="38" cy="54" rx="7" ry="3" fill="#F08090"/></g>
<g class="kf" style="transform-origin:50px 45px"><text x="50" y="45" font-size="13">💋</text></g>
<g class="kf2" style="transform-origin:54px 38px"><text x="54" y="38" font-size="9">💋</text></g>
<g class="kf3" style="transform-origin:57px 50px"><text x="57" y="50" font-size="7">💋</text></g>
</svg>`},

{id:'g_love3', alt:'Blushing in love', html:`
<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%">
<style>
@keyframes blush2{0%,100%{opacity:0.3}60%{opacity:0.85}}
@keyframes bounce{0%,100%{transform:translateY(0)}50%{transform:translateY(-5px)}}
@keyframes hfloat{0%{transform:translateY(0) scale(1);opacity:1}100%{transform:translateY(-35px) scale(0.4);opacity:0}}
.bl2{animation:blush2 1.5s ease-in-out infinite}
.bc{animation:bounce 1.2s ease-in-out infinite}
.hf1{animation:hfloat 2s ease-in 0s infinite}
.hf2{animation:hfloat 2s ease-in 0.6s infinite}
.hf3{animation:hfloat 2s ease-in 1.2s infinite}
</style>
<rect width="80" height="80" fill="#FFF5F0" rx="12"/>
<g class="bc">
<circle cx="40" cy="44" r="22" fill="#FFD5A8"/>
<ellipse cx="40" cy="23" rx="21" ry="9" fill="#7B3F00"/>
<rect x="19" y="23" width="42" height="8" fill="#7B3F00" rx="3"/>
<ellipse cx="19" cy="40" rx="5" ry="16" fill="#7B3F00"/>
<ellipse cx="61" cy="40" rx="5" ry="16" fill="#7B3F00"/>
<path d="M27 40 Q32 36 37 40" stroke="#3D1F00" stroke-width="2.5" fill="none" stroke-linecap="round"/>
<path d="M43 40 Q48 36 53 40" stroke="#3D1F00" stroke-width="2.5" fill="none" stroke-linecap="round"/>
<ellipse class="bl2" cx="21" cy="50" rx="9" ry="5" fill="#FF6B9D"/>
<ellipse class="bl2" cx="59" cy="50" rx="9" ry="5" fill="#FF6B9D"/>
<path d="M32 56 Q40 63 48 56" stroke="#C0627A" stroke-width="2" fill="none" stroke-linecap="round"/>
</g>
<g class="hf1" style="transform-origin:33px 22px"><text x="30" y="22" font-size="11">❤️</text></g>
<g class="hf2" style="transform-origin:43px 18px"><text x="40" y="18" font-size="9">💖</text></g>
<g class="hf3" style="transform-origin:52px 22px"><text x="50" y="22" font-size="8">💕</text></g>
</svg>`},

{id:'g_love4', alt:'Hugging with love', html:`
<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%">
<style>
@keyframes squeeze{0%,100%{transform:scaleX(1)}50%{transform:scaleX(0.93) scaleY(1.04)}}
@keyframes eyesmile{0%,100%{transform:scaleY(1)}50%{transform:scaleY(0.3)}}
@keyframes heartpop{0%,100%{transform:translate(-50%,-50%) scale(0);opacity:0}40%,60%{transform:translate(-50%,-50%) scale(1);opacity:1}}
.sq{animation:squeeze 1.1s ease-in-out infinite;transform-origin:40px 45px}
.es{animation:eyesmile 1.1s ease-in-out infinite;transform-origin:center}
.ht{animation:heartpop 1.8s ease-in-out infinite}
.ht2{animation:heartpop 1.8s ease-in-out 0.6s infinite}
</style>
<rect width="80" height="80" fill="#FFF0F8" rx="12"/>
<g class="sq">
<path d="M14 55 Q20 42 30 46" stroke="#FFDBB5" stroke-width="8" fill="none" stroke-linecap="round"/>
<path d="M66 55 Q60 42 50 46" stroke="#FFDBB5" stroke-width="8" fill="none" stroke-linecap="round"/>
<ellipse cx="40" cy="62" rx="16" ry="10" fill="#A78BFA"/>
<circle cx="40" cy="40" r="20" fill="#FFDBB5"/>
<ellipse cx="40" cy="22" rx="19" ry="9" fill="#2C1A0E"/>
<g class="es"><path d="M28 38 Q33 34 38 38" stroke="#2C1A0E" stroke-width="2.5" fill="none" stroke-linecap="round"/></g>
<g class="es"><path d="M42 38 Q47 34 52 38" stroke="#2C1A0E" stroke-width="2.5" fill="none" stroke-linecap="round"/></g>
<ellipse cx="23" cy="46" rx="6" ry="3.5" fill="#FFB3C6" opacity=".7"/>
<ellipse cx="57" cy="46" rx="6" ry="3.5" fill="#FFB3C6" opacity=".7"/>
<path d="M28 50 Q40 62 52 50" stroke="#C0627A" stroke-width="2.5" fill="#FFCCD8" stroke-linecap="round"/>
</g>
<g class="ht" style="left:20px;top:15px"><text x="16" y="18" font-size="12" style="transform-origin:16px 18px">💕</text></g>
<g class="ht2"><text x="55" y="16" font-size="10" style="transform-origin:55px 16px">❤️</text></g>
</svg>`},

]},

// ─────────────────────────────────────────────────────────────
{id:'happy', label:'😄 Happy', gifs:[

{id:'g_hap1', alt:'Laughing out loud', html:`
<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%">
<style>
@keyframes shake{0%,100%{transform:rotate(0deg) translateX(0)}20%{transform:rotate(-5deg) translateX(-3px)}40%{transform:rotate(4deg) translateX(2px)}60%{transform:rotate(-3deg) translateX(-2px)}80%{transform:rotate(3deg) translateX(2px)}}
@keyframes tear{0%,20%{transform:scaleY(0) translateY(0);opacity:0}40%{transform:scaleY(1) translateY(0);opacity:1}100%{transform:scaleY(0.6) translateY(18px);opacity:0}}
@keyframes hafly{0%{transform:translate(0,0) scale(1);opacity:1}100%{transform:translate(18px,-28px) scale(0.4);opacity:0}}
.sk{animation:shake 0.4s ease-in-out infinite;transform-origin:40px 42px}
.tr{animation:tear 1.2s ease-in infinite}
.tr2{animation:tear 1.2s ease-in 0.3s infinite}
.ha1{animation:hafly 1.2s ease-out infinite}
.ha2{animation:hafly 1.2s ease-out 0.35s infinite}
.ha3{animation:hafly 1.2s ease-out 0.7s infinite}
</style>
<rect width="80" height="80" fill="#FFFBEB" rx="12"/>
<g class="sk">
<circle cx="40" cy="42" r="23" fill="#FFDBB5"/>
<ellipse cx="40" cy="21" rx="21" ry="9" fill="#2C1A0E"/>
<rect x="19" y="21" width="42" height="7" fill="#2C1A0E" rx="3"/>
<path d="M26 36 Q32 31 38 36" stroke="#2C1A0E" stroke-width="3" fill="none" stroke-linecap="round"/>
<path d="M42 36 Q48 31 54 36" stroke="#2C1A0E" stroke-width="3" fill="none" stroke-linecap="round"/>
<ellipse cx="22" cy="47" rx="7" ry="4" fill="#FFB6C1" opacity=".7"/>
<ellipse cx="58" cy="47" rx="7" ry="4" fill="#FFB6C1" opacity=".7"/>
<path d="M24 48 Q40 68 56 48" fill="#C0627A" stroke="#9D4E63" stroke-width="1.5"/>
<ellipse cx="40" cy="58" rx="11" ry="6" fill="#FF1A6C" opacity=".3"/>
<path d="M28 48 L52 48" stroke="#F9D4DC" stroke-width="3.5"/>
<g class="tr" style="transform-origin:22px 46px"><ellipse cx="22" cy="46" rx="2.5" ry="5" fill="#93C5FD" opacity=".9"/></g>
<g class="tr2" style="transform-origin:58px 46px"><ellipse cx="58" cy="46" rx="2.5" ry="5" fill="#93C5FD" opacity=".9"/></g>
</g>
<g class="ha1" style="transform-origin:10px 56px"><text x="8" y="57" font-family="sans-serif" font-size="11" font-weight="900" fill="#FBBF24">HA</text></g>
<g class="ha2" style="transform-origin:57px 54px"><text x="56" y="55" font-family="sans-serif" font-size="10" font-weight="900" fill="#F59E0B">HA!</text></g>
<g class="ha3" style="transform-origin:28px 74px"><text x="26" y="75" font-family="sans-serif" font-size="9" font-weight="900" fill="#FDE047">LOL</text></g>
</svg>`},

{id:'g_hap2', alt:'So excited jumping', html:`
<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%">
<style>
@keyframes jump{0%,100%{transform:translateY(0)}40%{transform:translateY(-12px)}70%{transform:translateY(-5px)}}
@keyframes armL{0%,100%{transform:rotate(0deg)}40%{transform:rotate(-35deg)}}
@keyframes armR{0%,100%{transform:rotate(0deg)}40%{transform:rotate(35deg)}}
@keyframes spark{0%{transform:scale(0);opacity:1}100%{transform:scale(1.8);opacity:0}}
.jmp{animation:jump 0.7s cubic-bezier(0.23,1,0.32,1) infinite}
.al{animation:armL 0.7s cubic-bezier(0.23,1,0.32,1) infinite;transform-origin:27px 52px}
.ar{animation:armR 0.7s cubic-bezier(0.23,1,0.32,1) infinite;transform-origin:53px 52px}
.sp{animation:spark 0.5s ease-out infinite}
.sp2{animation:spark 0.5s ease-out 0.2s infinite}
.sp3{animation:spark 0.5s ease-out 0.35s infinite}
</style>
<rect width="80" height="80" fill="#F0FFF4" rx="12"/>
<ellipse cx="40" cy="74" rx="13" ry="3" fill="#D1FAE5"/>
<g class="jmp">
<ellipse cx="40" cy="62" rx="13" ry="9" fill="#34D399"/>
<g class="al"><line x1="27" y1="52" x2="13" y2="40" stroke="#FFDBB5" stroke-width="7" stroke-linecap="round"/></g>
<g class="ar"><line x1="53" y1="52" x2="67" y2="40" stroke="#FFDBB5" stroke-width="7" stroke-linecap="round"/></g>
<circle cx="40" cy="40" r="20" fill="#FFDBB5"/>
<ellipse cx="40" cy="22" rx="19" ry="9" fill="#3D1F00"/>
<ellipse cx="31" cy="38" rx="5.5" ry="6" fill="white"/>
<ellipse cx="31" cy="38" rx="4" ry="4.5" fill="#2C1A0E"/>
<ellipse cx="32.5" cy="36.5" rx="1.3" ry="1.3" fill="white"/>
<ellipse cx="49" cy="38" rx="5.5" ry="6" fill="white"/>
<ellipse cx="49" cy="38" rx="4" ry="4.5" fill="#2C1A0E"/>
<ellipse cx="50.5" cy="36.5" rx="1.3" ry="1.3" fill="white"/>
<ellipse cx="22" cy="46" rx="6" ry="3.5" fill="#FFB3C6" opacity=".7"/>
<ellipse cx="58" cy="46" rx="6" ry="3.5" fill="#FFB3C6" opacity=".7"/>
<path d="M26 48 Q40 64 54 48" fill="#E04060" stroke="#9D2040" stroke-width="1.5"/>
<rect x="30" y="48" width="20" height="6" rx="2" fill="white"/>
</g>
<g class="sp"  style="transform-origin:8px 20px"><text x="5" y="22" font-size="14">✨</text></g>
<g class="sp2" style="transform-origin:63px 16px"><text x="61" y="18" font-size="12">⭐</text></g>
<g class="sp3" style="transform-origin:68px 42px"><text x="66" y="44" font-size="11">💫</text></g>
</svg>`},

{id:'g_hap3', alt:'Celebrating with confetti', html:`
<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%">
<style>
@keyframes cffall{0%{transform:translateY(-8px) rotate(0deg);opacity:1}100%{transform:translateY(72px) rotate(400deg);opacity:0}}
@keyframes cheer{0%,100%{transform:rotate(-4deg)}50%{transform:rotate(4deg)}}
@keyframes openmouth{0%,100%{transform:scaleY(1)}50%{transform:scaleY(1.2)}}
.c1{animation:cffall 1.8s linear 0s infinite}
.c2{animation:cffall 1.8s linear 0.25s infinite}
.c3{animation:cffall 1.8s linear 0.5s infinite}
.c4{animation:cffall 1.8s linear 0.75s infinite}
.c5{animation:cffall 1.8s linear 1s infinite}
.c6{animation:cffall 1.8s linear 1.3s infinite}
.ch{animation:cheer 0.5s ease-in-out infinite;transform-origin:40px 50px}
.om{animation:openmouth 0.5s ease-in-out infinite;transform-origin:40px 54px}
</style>
<rect width="80" height="80" fill="#FFF8F0" rx="12"/>
<g class="c1" style="transform-origin:12px 0"><rect x="10" y="0" width="6" height="6" rx="1" fill="#EF4444"/></g>
<g class="c2" style="transform-origin:24px 0"><rect x="22" y="0" width="5" height="5" rx="1" fill="#3B82F6" transform="rotate(20,24,2)"/></g>
<g class="c3" style="transform-origin:38px 0"><circle cx="38" cy="2" r="4" fill="#10B981"/></g>
<g class="c4" style="transform-origin:52px 0"><rect x="50" y="0" width="6" height="4" rx="1" fill="#F59E0B"/></g>
<g class="c5" style="transform-origin:64px 0"><rect x="62" y="0" width="5" height="5" rx="1" fill="#A78BFA"/></g>
<g class="c6" style="transform-origin:30px 0"><path d="M28 0 L30 5 L32 0 Z" fill="#F472B6"/></g>
<g class="ch">
<circle cx="40" cy="48" r="21" fill="#FFDBB5"/>
<ellipse cx="40" cy="29" rx="20" ry="9" fill="#1A1A2E"/>
<rect x="20" y="29" width="40" height="7" fill="#1A1A2E" rx="3"/>
<ellipse cx="31" cy="43" rx="5" ry="5.5" fill="white"/>
<ellipse cx="31" cy="43" rx="3.5" ry="4" fill="#2C1A0E"/>
<ellipse cx="32.5" cy="41.5" rx="1.2" ry="1.2" fill="white"/>
<ellipse cx="49" cy="43" rx="5" ry="5.5" fill="white"/>
<ellipse cx="49" cy="43" rx="3.5" ry="4" fill="#2C1A0E"/>
<ellipse cx="50.5" cy="41.5" rx="1.2" ry="1.2" fill="white"/>
<ellipse cx="22" cy="52" rx="7" ry="4" fill="#FFB3C6" opacity=".65"/>
<ellipse cx="58" cy="52" rx="7" ry="4" fill="#FFB3C6" opacity=".65"/>
<g class="om"><path d="M28 55 Q40 70 52 55" fill="#C0627A" stroke="#9D4E63" stroke-width="1.5"/>
<rect x="30" y="55" width="20" height="5" rx="2" fill="white"/></g>
</g>
</svg>`},

]},

// ─────────────────────────────────────────────────────────────
{id:'miss', label:'💕 Miss You', gifs:[

{id:'g_miss1', alt:'Missing you so much', html:`
<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%">
<style>
@keyframes sad{0%,100%{transform:translateY(0)}50%{transform:translateY(3px)}}
@keyframes teardrop{0%,30%{transform:translateY(0) scaleY(0);opacity:0}50%{transform:translateY(0) scaleY(1);opacity:1}100%{transform:translateY(20px) scaleY(0.5);opacity:0}}
@keyframes hfade{0%,100%{opacity:0;transform:scale(0.4) translateY(4px)}50%{opacity:1;transform:scale(1) translateY(0)}}
.sd{animation:sad 1.8s ease-in-out infinite;transform-origin:40px 44px}
.td1{animation:teardrop 2.2s ease-in infinite}
.td2{animation:teardrop 2.2s ease-in 0.7s infinite}
.hfd{animation:hfade 2.5s ease-in-out infinite}
.hfd2{animation:hfade 2.5s ease-in-out 0.8s infinite}
</style>
<rect width="80" height="80" fill="#F0F4FF" rx="12"/>
<g class="sd">
<circle cx="40" cy="44" r="22" fill="#FFDBB5"/>
<ellipse cx="40" cy="24" rx="20" ry="9" fill="#5C2D0E"/>
<rect x="20" y="24" width="40" height="7" fill="#5C2D0E" rx="3"/>
<ellipse cx="30" cy="40" rx="6.5" ry="7.5" fill="white"/>
<ellipse cx="30" cy="40" rx="5" ry="6" fill="#4E6FA0"/>
<ellipse cx="30" cy="40" rx="3.5" ry="4.5" fill="#1A2744"/>
<ellipse cx="31.5" cy="37.5" rx="1.5" ry="1.5" fill="white"/>
<ellipse cx="50" cy="40" rx="6.5" ry="7.5" fill="white"/>
<ellipse cx="50" cy="40" rx="5" ry="6" fill="#4E6FA0"/>
<ellipse cx="50" cy="40" rx="3.5" ry="4.5" fill="#1A2744"/>
<ellipse cx="51.5" cy="37.5" rx="1.5" ry="1.5" fill="white"/>
<path d="M30 57 Q40 50 50 57" stroke="#A05060" stroke-width="2.5" fill="none" stroke-linecap="round"/>
<ellipse cx="22" cy="50" rx="6.5" ry="3.5" fill="#FFAAC0" opacity=".5"/>
<ellipse cx="58" cy="50" rx="6.5" ry="3.5" fill="#FFAAC0" opacity=".5"/>
<g class="td1" style="transform-origin:28px 48px"><ellipse cx="28" cy="50" rx="2" ry="4" fill="#93C5FD" opacity=".85"/></g>
<g class="td2" style="transform-origin:52px 48px"><ellipse cx="52" cy="50" rx="2" ry="4" fill="#93C5FD" opacity=".85"/></g>
</g>
<g class="hfd"  style="transform-origin:14px 30px"><text x="11" y="32" font-size="12">💕</text></g>
<g class="hfd2" style="transform-origin:60px 22px"><text x="58" y="24" font-size="10">💔</text></g>
</svg>`},

{id:'g_miss2', alt:'Thinking of you', html:`
<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%">
<style>
@keyframes bubble{0%{transform:scale(0);opacity:0}20%{transform:scale(1);opacity:1}80%{transform:scale(1);opacity:1}100%{transform:scale(0);opacity:0}}
@keyframes think{0%,100%{transform:rotate(-5deg)}50%{transform:rotate(3deg)}}
@keyframes dotin{0%,60%,100%{opacity:0}30%{opacity:1}}
.th{animation:think 2.5s ease-in-out infinite;transform-origin:40px 50px}
.bb{animation:bubble 3s ease-in-out infinite}
.d1{animation:dotin 1.2s ease-in-out 0.3s infinite}
.d2{animation:dotin 1.2s ease-in-out 0.6s infinite}
.d3{animation:dotin 1.2s ease-in-out 0.9s infinite}
.bf{animation:bubble 3s ease-in-out 1.5s infinite}
</style>
<rect width="80" height="80" fill="#F8F0FF" rx="12"/>
<g class="th">
<circle cx="38" cy="50" r="22" fill="#FFD5A8"/>
<ellipse cx="38" cy="30" rx="21" ry="9" fill="#1A1A2E"/>
<rect x="17" y="30" width="42" height="7" fill="#1A1A2E" rx="3"/>
<ellipse cx="47" cy="67" rx="10" ry="7" fill="#FFDBB5"/>
<ellipse cx="28" cy="47" rx="5.5" ry="6" fill="white"/>
<ellipse cx="27" cy="46" rx="4" ry="4.5" fill="#2C1A0E"/>
<ellipse cx="28" cy="44.5" rx="1.3" ry="1.3" fill="white"/>
<ellipse cx="48" cy="47" rx="5.5" ry="6" fill="white"/>
<ellipse cx="47" cy="46" rx="4" ry="4.5" fill="#2C1A0E"/>
<ellipse cx="48" cy="44.5" rx="1.3" ry="1.3" fill="white"/>
<path d="M30 59 Q38 65 46 59" stroke="#C0627A" stroke-width="2" fill="none" stroke-linecap="round"/>
<ellipse cx="20" cy="55" rx="7" ry="4" fill="#FFB3C6" opacity=".5"/>
<ellipse cx="56" cy="55" rx="7" ry="4" fill="#FFB3C6" opacity=".5"/>
</g>
<g class="bb">
<circle cx="50" cy="38" r="2" fill="#DDD6FE" opacity=".9"/>
<circle cx="56" cy="30" r="3" fill="#DDD6FE" opacity=".9"/>
<rect x="55" y="14" width="22" height="14" rx="7" fill="#EDE9FE"/>
<text class="d1" x="59" y="24" font-size="9" fill="#7C3AED">💭</text>
</g>
<g class="bf"><text x="63" y="24" font-size="10">❤️</text></g>
</svg>`},

{id:'g_miss3', alt:'I miss you wave', html:`
<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%">
<style>
@keyframes wave{0%,100%{transform:rotate(-10deg)}50%{transform:rotate(25deg)}}
@keyframes bodyrock{0%,100%{transform:translateX(0)}50%{transform:translateX(3px)}}
@keyframes mtext{0%,100%{opacity:0;transform:translateX(-5px) scale(0.8)}40%,60%{opacity:1;transform:translateX(0) scale(1)}}
.wv{animation:wave 0.5s ease-in-out infinite;transform-origin:60px 38px}
.br{animation:bodyrock 0.5s ease-in-out infinite;transform-origin:35px 55px}
.mt{animation:mtext 2.5s ease-in-out infinite}
</style>
<rect width="80" height="80" fill="#FFF0F8" rx="12"/>
<g class="br">
<ellipse cx="35" cy="64" rx="13" ry="9" fill="#F472B6"/>
<g class="wv"><path d="M48 50 Q58 42 64 33" stroke="#FFDBB5" stroke-width="8" fill="none" stroke-linecap="round"/>
<circle cx="64" cy="33" r="5" fill="#FFDBB5"/></g>
<path d="M22 53 Q14 48 10 42" stroke="#FFDBB5" stroke-width="7" fill="none" stroke-linecap="round"/>
<circle cx="35" cy="40" r="21" fill="#FFDBB5"/>
<ellipse cx="35" cy="21" rx="20" ry="9" fill="#7B3F00"/>
<rect x="15" y="21" width="40" height="7" fill="#7B3F00" rx="3"/>
<ellipse cx="15" cy="37" rx="5" ry="14" fill="#7B3F00"/>
<ellipse cx="26" cy="38" rx="5.5" ry="6" fill="white"/>
<ellipse cx="26" cy="38" rx="4" ry="4.5" fill="#2C1A0E"/>
<ellipse cx="27.5" cy="36.5" rx="1.3" ry="1.3" fill="white"/>
<ellipse cx="44" cy="38" rx="5.5" ry="6" fill="white"/>
<ellipse cx="44" cy="38" rx="4" ry="4.5" fill="#2C1A0E"/>
<ellipse cx="45.5" cy="36.5" rx="1.3" ry="1.3" fill="white"/>
<ellipse cx="17" cy="47" rx="7" ry="4" fill="#FFB3C6" opacity=".65"/>
<ellipse cx="53" cy="47" rx="7" ry="4" fill="#FFB3C6" opacity=".65"/>
<path d="M22 50 Q35 62 48 50" stroke="#C0627A" stroke-width="2.5" fill="#FFCCD8" stroke-linecap="round"/>
</g>
<g class="mt"><text x="2" y="14" font-family="sans-serif" font-size="9" font-weight="700" fill="#F472B6">miss you!</text></g>
</svg>`},

]},

// ─────────────────────────────────────────────────────────────
{id:'hug', label:'🤗 Hug', gifs:[

{id:'g_hug1', alt:'Warm bear hug', html:`
<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%">
<style>
@keyframes hugpulse{0%,100%{transform:scaleX(1) scaleY(1)}50%{transform:scaleX(0.96) scaleY(1.03)}}
@keyframes warmglow{0%,100%{opacity:0.15}50%{opacity:0.35}}
@keyframes eyeshut{0%,100%{transform:scaleY(1)}50%{transform:scaleY(0.15)}}
.hug{animation:hugpulse 1.2s ease-in-out infinite;transform-origin:40px 50px}
.wg{animation:warmglow 1.2s ease-in-out infinite}
.es{animation:eyeshut 1.2s ease-in-out infinite;transform-origin:center}
</style>
<rect width="80" height="80" fill="#FFF8F0" rx="12"/>
<ellipse class="wg" cx="40" cy="50" rx="35" ry="28" fill="#FB923C" opacity=".15"/>
<g class="hug">
<path d="M8 60 Q18 44 30 48" stroke="#FFDBB5" stroke-width="9" fill="none" stroke-linecap="round"/>
<path d="M72 60 Q62 44 50 48" stroke="#FFDBB5" stroke-width="9" fill="none" stroke-linecap="round"/>
<ellipse cx="20" cy="66" rx="14" ry="10" fill="#FB923C"/>
<ellipse cx="60" cy="66" rx="14" ry="10" fill="#60A5FA"/>
<circle cx="40" cy="42" r="21" fill="#FFDBB5"/>
<ellipse cx="40" cy="23" rx="19" ry="9" fill="#3D1F00"/>
<rect x="21" y="23" width="38" height="7" fill="#3D1F00" rx="3"/>
<g class="es"><path d="M27 40 Q32 35.5 37 40" stroke="#3D1F00" stroke-width="2.5" fill="none" stroke-linecap="round"/></g>
<g class="es"><path d="M43 40 Q48 35.5 53 40" stroke="#3D1F00" stroke-width="2.5" fill="none" stroke-linecap="round"/></g>
<ellipse cx="22" cy="48" rx="7.5" ry="4.5" fill="#FF8FAB" opacity=".7"/>
<ellipse cx="58" cy="48" rx="7.5" ry="4.5" fill="#FF8FAB" opacity=".7"/>
<path d="M28 52 Q40 63 52 52" stroke="#C0627A" stroke-width="2.5" fill="#FFCCD8" stroke-linecap="round"/>
</g>
</svg>`},

{id:'g_hug2', alt:'Cozy side hug', html:`
<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%">
<style>
@keyframes lean{0%,100%{transform:rotate(0deg)}50%{transform:rotate(4deg)}}
@keyframes lean2{0%,100%{transform:rotate(0deg)}50%{transform:rotate(-4deg)}}
@keyframes heartrise{0%{transform:translateY(0) scale(1);opacity:1}100%{transform:translateY(-25px) scale(0.5);opacity:0}}
.ln{animation:lean 1.5s ease-in-out infinite;transform-origin:28px 45px}
.ln2{animation:lean2 1.5s ease-in-out infinite;transform-origin:52px 45px}
.hr1{animation:heartrise 2s ease-in 0s infinite}
.hr2{animation:heartrise 2s ease-in 0.65s infinite}
</style>
<rect width="80" height="80" fill="#FFF5F8" rx="12"/>
<g class="ln">
<ellipse cx="24" cy="64" rx="12" ry="8" fill="#A78BFA"/>
<circle cx="24" cy="38" r="17" fill="#FFD5A8"/>
<ellipse cx="24" cy="22" rx="16" ry="7" fill="#5C2D0E"/>
<rect x="8" y="22" width="32" height="6" fill="#5C2D0E" rx="3"/>
<path d="M16 35 Q21 31 26 35" stroke="#3D1F00" stroke-width="2.5" fill="none" stroke-linecap="round"/>
<ellipse cx="15" cy="44" rx="6" ry="3.5" fill="#FFB3C6" opacity=".6"/>
<path d="M15 46 Q24 54 33 46" stroke="#C0627A" stroke-width="2" fill="none" stroke-linecap="round"/>
</g>
<g class="ln2">
<ellipse cx="56" cy="64" rx="12" ry="8" fill="#34D399"/>
<circle cx="56" cy="38" r="17" fill="#FFDBB5"/>
<ellipse cx="56" cy="22" rx="16" ry="7" fill="#2C1A0E"/>
<rect x="40" y="22" width="32" height="6" fill="#2C1A0E" rx="3"/>
<path d="M48 35 Q53 31 58 35" stroke="#3D1F00" stroke-width="2.5" fill="none" stroke-linecap="round"/>
<ellipse cx="65" cy="44" rx="6" ry="3.5" fill="#FFB3C6" opacity=".6"/>
<path d="M47 46 Q56 54 65 46" stroke="#C0627A" stroke-width="2" fill="none" stroke-linecap="round"/>
</g>
<path d="M35 50 Q40 44 45 50" stroke="#FFDBB5" stroke-width="7" fill="none" stroke-linecap="round"/>
<g class="hr1" style="transform-origin:40px 32px"><text x="37" y="32" font-size="10">💕</text></g>
<g class="hr2" style="transform-origin:40px 24px"><text x="37" y="24" font-size="8">❤️</text></g>
</svg>`},

]},

// ─────────────────────────────────────────────────────────────
{id:'morning', label:'☀️ Morning', gifs:[

{id:'g_morn1', alt:'Good morning sunshine', html:`
<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%">
<style>
@keyframes sunray{0%,100%{transform:scale(1) rotate(0deg)}50%{transform:scale(1.15) rotate(20deg)}}
@keyframes yawn{0%,70%,100%{transform:scaleY(1)}80%,90%{transform:scaleY(1.3)}}
@keyframes stretch{0%,100%{transform:translateY(0) rotate(0deg)}50%{transform:translateY(-8px) rotate(-10deg)}}
@keyframes eyeopen{0%,30%{transform:scaleY(0.1)}60%,100%{transform:scaleY(1)}}
.sr{animation:sunray 2s ease-in-out infinite;transform-origin:40px 15px}
.yn{animation:yawn 3s ease-in-out infinite;transform-origin:40px 55px}
.st{animation:stretch 2s ease-in-out infinite;transform-origin:40px 55px}
.eo{animation:eyeopen 3s ease-in-out infinite;transform-origin:center}
</style>
<rect width="80" height="80" fill="#FFFBEB" rx="12"/>
<g class="sr">
<circle cx="40" cy="15" r="8" fill="#FCD34D"/>
<line x1="40" y1="4" x2="40" y2="1" stroke="#FCD34D" stroke-width="2.5" stroke-linecap="round"/>
<line x1="51" y1="7" x2="53" y2="5" stroke="#FCD34D" stroke-width="2.5" stroke-linecap="round"/>
<line x1="56" y1="15" x2="59" y2="15" stroke="#FCD34D" stroke-width="2.5" stroke-linecap="round"/>
<line x1="29" y1="7" x2="27" y2="5" stroke="#FCD34D" stroke-width="2.5" stroke-linecap="round"/>
<line x1="24" y1="15" x2="21" y2="15" stroke="#FCD34D" stroke-width="2.5" stroke-linecap="round"/>
</g>
<g class="st">
<ellipse cx="40" cy="70" rx="14" ry="9" fill="#FB923C"/>
<path d="M26 58 Q18 46 16 34" stroke="#FFDBB5" stroke-width="7" fill="none" stroke-linecap="round"/>
<path d="M54 58 Q62 46 64 34" stroke="#FFDBB5" stroke-width="7" fill="none" stroke-linecap="round"/>
<circle cx="40" cy="50" r="20" fill="#FFDBB5"/>
<ellipse cx="40" cy="32" rx="19" ry="9" fill="#3D1F00"/>
<path d="M22 32 Q28 26 35 30 Q40 24 45 30 Q52 26 58 32" fill="#3D1F00"/>
<g class="eo"><ellipse cx="31" cy="48" rx="5.5" ry="5.5" fill="white"/><ellipse cx="31" cy="48" rx="4" ry="4" fill="#2C1A0E"/><ellipse cx="32.5" cy="46.5" rx="1.3" ry="1.3" fill="white"/></g>
<g class="eo"><ellipse cx="49" cy="48" rx="5.5" ry="5.5" fill="white"/><ellipse cx="49" cy="48" rx="4" ry="4" fill="#2C1A0E"/><ellipse cx="50.5" cy="46.5" rx="1.3" ry="1.3" fill="white"/></g>
<ellipse cx="23" cy="55" rx="6.5" ry="3.5" fill="#FFB3C6" opacity=".55"/>
<ellipse cx="57" cy="55" rx="6.5" ry="3.5" fill="#FFB3C6" opacity=".55"/>
<g class="yn"><ellipse cx="40" cy="58" rx="7" ry="6" fill="#C0627A"/><ellipse cx="40" cy="56" rx="6" ry="3" fill="#F08090"/></g>
</g>
</svg>`},

{id:'g_morn2', alt:'Sipping morning coffee', html:`
<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%">
<style>
@keyframes sip{0%,100%{transform:rotate(0deg)}40%{transform:rotate(-18deg)}70%{transform:rotate(-12deg)}}
@keyframes steam{0%{transform:translateY(0) scaleX(1);opacity:0.9}100%{transform:translateY(-20px) scaleX(1.5);opacity:0}}
@keyframes contented{0%,100%{transform:scaleY(1)}50%{transform:scaleY(0.8)}}
.cup{animation:sip 2.5s ease-in-out infinite;transform-origin:45px 58px}
.st1{animation:steam 1.5s ease-out 0s infinite}
.st2{animation:steam 1.5s ease-out 0.4s infinite}
.st3{animation:steam 1.5s ease-out 0.8s infinite}
.co{animation:contented 2.5s ease-in-out infinite;transform-origin:center}
</style>
<rect width="80" height="80" fill="#FFF8F0" rx="12"/>
<g class="cup">
<rect x="36" y="56" width="24" height="16" rx="4" fill="#E07040"/>
<rect x="34" y="54" width="28" height="6" rx="3" fill="#F09060"/>
<path d="M60 60 Q68 60 68 66 Q68 72 60 70" stroke="#E07040" stroke-width="3" fill="none"/>
<g class="st1" style="transform-origin:44px 52px"><path d="M44 52 Q46 48 44 44" stroke="#D1D5DB" stroke-width="2" fill="none" stroke-linecap="round"/></g>
<g class="st2" style="transform-origin:48px 52px"><path d="M48 52 Q50 46 48 42" stroke="#D1D5DB" stroke-width="2" fill="none" stroke-linecap="round"/></g>
<g class="st3" style="transform-origin:52px 52px"><path d="M52 52 Q54 48 52 44" stroke="#D1D5DB" stroke-width="2" fill="none" stroke-linecap="round"/></g>
</g>
<path d="M28 58 Q35 55 40 58" stroke="#FFDBB5" stroke-width="7" fill="none" stroke-linecap="round"/>
<circle cx="28" cy="44" r="21" fill="#FFDBB5"/>
<ellipse cx="28" cy="25" rx="19" ry="9" fill="#1A1A2E"/>
<rect x="9" y="25" width="38" height="7" fill="#1A1A2E" rx="3"/>
<g class="co"><path d="M17 41 Q23 37 29 41" stroke="#2C1A0E" stroke-width="2.5" fill="none" stroke-linecap="round"/></g>
<g class="co"><path d="M29 41 Q34 37 39 41" stroke="#2C1A0E" stroke-width="2.5" fill="none" stroke-linecap="round"/></g>
<ellipse cx="12" cy="50" rx="6.5" ry="3.5" fill="#FFB3C6" opacity=".6"/>
<ellipse cx="44" cy="50" rx="6.5" ry="3.5" fill="#FFB3C6" opacity=".6"/>
<path d="M18 53 Q28 60 38 53" stroke="#C0627A" stroke-width="2" fill="none" stroke-linecap="round"/>
</svg>`},

]},

// ─────────────────────────────────────────────────────────────
{id:'night', label:'🌙 Night', gifs:[

{id:'g_night1', alt:'Good night sleepy face', html:`
<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%">
<style>
@keyframes zzz{0%{transform:translate(0,0) scale(0.4);opacity:0}30%{opacity:1;transform:translate(3px,-8px) scale(1)}100%{transform:translate(10px,-25px) scale(0.5);opacity:0}}
@keyframes nodnod{0%,100%{transform:rotate(0deg)}60%{transform:rotate(12deg)}}
@keyframes twink{0%,100%{opacity:0.2}50%{opacity:1}}
.z1{animation:zzz 2.5s ease-out 0s infinite}
.z2{animation:zzz 2.5s ease-out 0.7s infinite}
.z3{animation:zzz 2.5s ease-out 1.4s infinite}
.nd{animation:nodnod 3s ease-in-out infinite;transform-origin:40px 50px}
.tw{animation:twink 1.5s ease-in-out infinite}
.tw2{animation:twink 1.5s ease-in-out 0.5s infinite}
.tw3{animation:twink 1.5s ease-in-out 1s infinite}
</style>
<rect width="80" height="80" fill="#0F172A" rx="12"/>
<text class="tw" x="8" y="14" font-size="10">⭐</text>
<text class="tw2" x="62" y="18" font-size="8">✨</text>
<text class="tw3" x="14" y="28" font-size="7">💫</text>
<text class="tw" x="68" y="38" font-size="6">⭐</text>
<g class="nd">
<circle cx="40" cy="48" r="22" fill="#FFDBB5"/>
<ellipse cx="40" cy="28" rx="21" ry="10" fill="#1E1B4B"/>
<rect x="19" y="28" width="42" height="7" fill="#1E1B4B" rx="3"/>
<ellipse cx="30" cy="44" rx="6" ry="4" fill="white"/>
<rect x="24" y="40" width="12" height="4" rx="2" fill="#FFDBB5"/>
<ellipse cx="30" cy="44" rx="4" ry="2.5" fill="#2C1A0E"/>
<ellipse cx="50" cy="44" rx="6" ry="4" fill="white"/>
<rect x="44" y="40" width="12" height="4" rx="2" fill="#FFDBB5"/>
<ellipse cx="50" cy="44" rx="4" ry="2.5" fill="#2C1A0E"/>
<ellipse cx="22" cy="52" rx="7" ry="4" fill="#FFB3C6" opacity=".45"/>
<ellipse cx="58" cy="52" rx="7" ry="4" fill="#FFB3C6" opacity=".45"/>
<path d="M32 59 Q40 64 48 59" stroke="#C0627A" stroke-width="2" fill="none" stroke-linecap="round"/>
</g>
<g class="z1" style="transform-origin:58px 36px"><text x="56" y="36" font-family="sans-serif" font-size="14" font-weight="900" fill="#818CF8">Z</text></g>
<g class="z2" style="transform-origin:63px 26px"><text x="61" y="26" font-family="sans-serif" font-size="11" font-weight="900" fill="#A78BFA">Z</text></g>
<g class="z3" style="transform-origin:67px 18px"><text x="65" y="18" font-family="sans-serif" font-size="8" font-weight="900" fill="#C4B5FD">Z</text></g>
</svg>`},

{id:'g_night2', alt:'Sweet dreams blowing a kiss', html:`
<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%">
<style>
@keyframes moonbob{0%{transform:translateY(6px)}100%{transform:translateY(0px)}}
@keyframes starf{0%,100%{opacity:0.3;transform:scale(0.7)}50%{opacity:1;transform:scale(1)}}
@keyframes dreamheart{0%{transform:translate(0,0) scale(0);opacity:0}25%{transform:translate(2px,-6px) scale(1);opacity:1}100%{transform:translate(8px,-28px) scale(0.4);opacity:0}}
.mn{animation:moonbob 3s ease-in-out infinite alternate}
.sf1{animation:starf 1.8s ease-in-out 0s infinite}
.sf2{animation:starf 1.8s ease-in-out 0.5s infinite}
.sf3{animation:starf 1.8s ease-in-out 1s infinite}
.dh1{animation:dreamheart 2.2s ease-in-out 0s infinite}
.dh2{animation:dreamheart 2.2s ease-in-out 0.7s infinite}
</style>
<rect width="80" height="80" fill="#1E1B4B" rx="12"/>
<g class="mn"><text x="5" y="22" font-size="22">🌙</text></g>
<text class="sf1" x="48" y="14" font-size="10">⭐</text>
<text class="sf2" x="64" y="28" font-size="8">✨</text>
<text class="sf3" x="60" y="44" font-size="7">💫</text>
<circle cx="40" cy="50" r="22" fill="#FFDBB5"/>
<ellipse cx="40" cy="30" rx="21" ry="10" fill="#3D1F00"/>
<rect x="19" y="30" width="42" height="7" fill="#3D1F00" rx="3"/>
<ellipse cx="19" cy="46" rx="5" ry="16" fill="#3D1F00"/>
<path d="M26 46 Q31 42 36 46" stroke="#2C1A0E" stroke-width="2.5" fill="none" stroke-linecap="round"/>
<path d="M44 46 Q49 42 54 46" stroke="#2C1A0E" stroke-width="2.5" fill="none" stroke-linecap="round"/>
<ellipse cx="23" cy="56" rx="7" ry="4" fill="#FFB3C6" opacity=".5"/>
<ellipse cx="57" cy="56" rx="7" ry="4" fill="#FFB3C6" opacity=".5"/>
<path d="M28 60 Q40 70 52 60" stroke="#C0627A" stroke-width="2.5" fill="none" stroke-linecap="round"/>
<g class="dh1" style="transform-origin:56px 38px"><text x="53" y="38" font-size="11">💕</text></g>
<g class="dh2" style="transform-origin:60px 30px"><text x="57" y="30" font-size="9">💤</text></g>
</svg>`},

]},

// ─────────────────────────────────────────────────────────────
{id:'sorry', label:'🙏 Sorry', gifs:[

{id:'g_sorry1', alt:'Puppy eyes sorry', html:`
<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%">
<style>
@keyframes tremble{0%,100%{transform:translateX(0)}25%{transform:translateX(-1.5px)}75%{transform:translateX(1.5px)}}
@keyframes bigtear{0%,25%{transform:scaleY(0);opacity:0}50%{transform:scaleY(1);opacity:1}100%{transform:scaleY(0.4) translateY(16px);opacity:0}}
@keyframes plead{0%,100%{transform:rotate(-5deg)}50%{transform:rotate(5deg)}}
.tr{animation:tremble 0.25s ease-in-out infinite;transform-origin:40px 44px}
.bt1{animation:bigtear 2s ease-in 0.2s infinite}
.bt2{animation:bigtear 2s ease-in 0.9s infinite}
.pl{animation:plead 1s ease-in-out infinite;transform-origin:40px 64px}
</style>
<rect width="80" height="80" fill="#F0F4FF" rx="12"/>
<g class="tr">
<circle cx="40" cy="44" r="22" fill="#FFDBB5"/>
<ellipse cx="40" cy="24" rx="20" ry="9" fill="#5C2D0E"/>
<rect x="20" y="24" width="40" height="7" fill="#5C2D0E" rx="3"/>
<ellipse cx="30" cy="40" rx="7" ry="8.5" fill="white"/>
<ellipse cx="30" cy="40" rx="5.5" ry="7" fill="#5B8BCC"/>
<ellipse cx="30" cy="40" rx="4" ry="5.5" fill="#1A3060"/>
<ellipse cx="31.5" cy="36.5" rx="2" ry="2" fill="white"/>
<ellipse cx="50" cy="40" rx="7" ry="8.5" fill="white"/>
<ellipse cx="50" cy="40" rx="5.5" ry="7" fill="#5B8BCC"/>
<ellipse cx="50" cy="40" rx="4" ry="5.5" fill="#1A3060"/>
<ellipse cx="51.5" cy="36.5" rx="2" ry="2" fill="white"/>
<path d="M23 32 Q29 29 35 33" stroke="#5C2D0E" stroke-width="2.5" fill="none" stroke-linecap="round"/>
<path d="M45 33 Q51 29 57 32" stroke="#5C2D0E" stroke-width="2.5" fill="none" stroke-linecap="round"/>
<path d="M30 58 Q40 53 50 58" stroke="#A05060" stroke-width="2.5" fill="none" stroke-linecap="round"/>
<g class="bt1" style="transform-origin:27px 49px"><ellipse cx="27" cy="51" rx="2.5" ry="6" fill="#BFDBFE" opacity=".9"/></g>
<g class="bt2" style="transform-origin:53px 49px"><ellipse cx="53" cy="51" rx="2.5" ry="6" fill="#BFDBFE" opacity=".9"/></g>
</g>
<g class="pl"><text x="26" y="72" font-size="22">🙏</text></g>
</svg>`},

{id:'g_sorry2', alt:'Bashful sorry look away', html:`
<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%">
<style>
@keyframes lookaway{0%,100%{transform:rotate(0deg)}40%,60%{transform:rotate(-12deg)}}
@keyframes superblush{0%,100%{opacity:0.4}50%{opacity:0.9}}
@keyframes sweat{0%{transform:translateY(0) scaleY(0.3);opacity:0}40%{transform:translateY(0) scaleY(1);opacity:1}100%{transform:translateY(14px) scaleY(0.5);opacity:0}}
.la{animation:lookaway 2.5s ease-in-out infinite;transform-origin:40px 44px}
.sb{animation:superblush 1.5s ease-in-out infinite}
.sw{animation:sweat 2s ease-in 0.5s infinite}
</style>
<rect width="80" height="80" fill="#F0FFF4" rx="12"/>
<g class="la">
<circle cx="40" cy="44" r="22" fill="#FFDBB5"/>
<ellipse cx="40" cy="24" rx="20" ry="9" fill="#1A1A2E"/>
<rect x="20" y="24" width="40" height="7" fill="#1A1A2E" rx="3"/>
<ellipse cx="30" cy="40" rx="5.5" ry="6" fill="white"/>
<ellipse cx="27.5" cy="40" rx="4" ry="4.5" fill="#2C1A0E"/>
<ellipse cx="28.5" cy="38" rx="1.3" ry="1.3" fill="white"/>
<ellipse cx="50" cy="40" rx="5.5" ry="6" fill="white"/>
<ellipse cx="47.5" cy="40" rx="4" ry="4.5" fill="#2C1A0E"/>
<ellipse cx="48.5" cy="38" rx="1.3" ry="1.3" fill="white"/>
<ellipse class="sb" cx="21" cy="51" rx="9" ry="5.5" fill="#FF4D79"/>
<ellipse class="sb" cx="59" cy="51" rx="9" ry="5.5" fill="#FF4D79"/>
<path d="M31 57 Q40 64 49 57" stroke="#C0627A" stroke-width="2" fill="none" stroke-linecap="round"/>
<g class="sw" style="transform-origin:57px 32px"><ellipse cx="57" cy="32" rx="2" ry="4.5" fill="#93C5FD" opacity=".85"/></g>
</g>
<text x="5" y="14" font-family="sans-serif" font-size="8" font-weight="700" fill="#6B7280">sorry... 😅</text>
</svg>`},

]},

// ─────────────────────────────────────────────────────────────
{id:'funny', label:'😂 Funny', gifs:[

{id:'g_fun1', alt:'Rolling on floor laughing', html:`
<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%">
<style>
@keyframes roll{0%{transform:rotate(0deg) translateX(0)}25%{transform:rotate(-25deg) translateX(-5px)}50%{transform:rotate(5deg) translateX(5px)}75%{transform:rotate(-15deg) translateX(-3px)}100%{transform:rotate(0deg) translateX(0)}}
@keyframes loltear{0%,20%{transform:scaleY(0);opacity:0}50%{transform:scaleY(1);opacity:1}90%{transform:scaleY(0.5) translateY(15px);opacity:0}100%{transform:scaleY(0);opacity:0}}
@keyframes haup{0%{transform:translate(0,0) scale(0.5);opacity:0}20%{opacity:1;transform:translate(3px,-6px) scale(1)}100%{transform:translate(15px,-32px) scale(0.3);opacity:0}}
.rl{animation:roll 0.6s ease-in-out infinite;transform-origin:40px 50px}
.lt1{animation:loltear 1.5s ease-in 0s infinite}
.lt2{animation:loltear 1.5s ease-in 0.4s infinite}
.hu1{animation:haup 1s ease-out 0s infinite}
.hu2{animation:haup 1s ease-out 0.25s infinite}
.hu3{animation:haup 1s ease-out 0.5s infinite}
.hu4{animation:haup 1s ease-out 0.75s infinite}
</style>
<rect width="80" height="80" fill="#FFFBEB" rx="12"/>
<g class="rl">
<circle cx="40" cy="48" r="23" fill="#FFDBB5"/>
<ellipse cx="40" cy="27" rx="21" ry="9" fill="#2C1A0E"/>
<rect x="19" y="27" width="42" height="7" fill="#2C1A0E" rx="3"/>
<path d="M24 43 Q31 37 38 43" stroke="#2C1A0E" stroke-width="3.5" fill="none" stroke-linecap="round"/>
<path d="M42 43 Q49 37 56 43" stroke="#2C1A0E" stroke-width="3.5" fill="none" stroke-linecap="round"/>
<ellipse cx="20" cy="52" rx="8" ry="5" fill="#FF6B9D" opacity=".75"/>
<ellipse cx="60" cy="52" rx="8" ry="5" fill="#FF6B9D" opacity=".75"/>
<path d="M22 55 Q40 75 58 55" fill="#C0627A" stroke="#9D4E63" stroke-width="2"/>
<rect x="28" y="55" width="24" height="7" rx="3" fill="white"/>
<ellipse cx="40" cy="66" rx="9" ry="5" fill="#FF5080"/>
<g class="lt1" style="transform-origin:21px 51px"><ellipse cx="21" cy="52" rx="3" ry="6" fill="#BAE6FD"/></g>
<g class="lt2" style="transform-origin:59px 51px"><ellipse cx="59" cy="52" rx="3" ry="6" fill="#BAE6FD"/></g>
</g>
<g class="hu1" style="transform-origin:8px 58px"><text x="5" y="60" font-family="sans-serif" font-size="12" font-weight="900" fill="#FBBF24">HA</text></g>
<g class="hu2" style="transform-origin:58px 58px"><text x="56" y="60" font-family="sans-serif" font-size="11" font-weight="900" fill="#F59E0B">HA!</text></g>
<g class="hu3" style="transform-origin:20px 74px"><text x="18" y="76" font-family="sans-serif" font-size="9" font-weight="900" fill="#FDE047">LOL</text></g>
<g class="hu4" style="transform-origin:46px 72px"><text x="44" y="74" font-size="8" font-weight="900" fill="#FBBF24">😂</text></g>
</svg>`},

{id:'g_fun2', alt:'Cheeky wink and tongue', html:`
<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%">
<style>
@keyframes winkfast{0%,80%,100%{transform:scaleY(1)}85%,92%{transform:scaleY(0.05)}}
@keyframes tongue{0%,60%,100%{transform:translateY(0) scaleX(1)}70%,80%{transform:translateY(4px) scaleX(1.1)}}
@keyframes eyebrowup{0%,100%{transform:translateY(0)}50%{transform:translateY(-3px)}}
.wk{animation:winkfast 2s ease-in-out infinite;transform-origin:50px 38px}
.tg{animation:tongue 2s ease-in-out infinite;transform-origin:40px 56px}
.eb{animation:eyebrowup 2s ease-in-out infinite;transform-origin:50px 28px}
</style>
<rect width="80" height="80" fill="#FFF8F0" rx="12"/>
<circle cx="40" cy="44" r="23" fill="#FFDBB5"/>
<ellipse cx="40" cy="23" rx="21" ry="9" fill="#7B3F00"/>
<rect x="19" y="23" width="42" height="7" fill="#7B3F00" rx="3"/>
<ellipse cx="28" cy="39" rx="5.5" ry="6" fill="white"/>
<ellipse cx="28" cy="39" rx="4" ry="4.5" fill="#2C1A0E"/>
<ellipse cx="29.5" cy="37.5" rx="1.3" ry="1.3" fill="white"/>
<g class="eb"><path d="M45 28 Q50 25 56 27" stroke="#5C2D0E" stroke-width="2.5" fill="none" stroke-linecap="round"/></g>
<g class="wk"><path d="M44 39 Q50 33 56 39" stroke="#2C1A0E" stroke-width="3" fill="none" stroke-linecap="round"/></g>
<ellipse cx="20" cy="49" rx="7" ry="4" fill="#FFB3C6" opacity=".6"/>
<ellipse cx="60" cy="49" rx="7" ry="4" fill="#FFB3C6" opacity=".6"/>
<path d="M28 53 Q42 62 54 50" stroke="#C0627A" stroke-width="2.5" fill="none" stroke-linecap="round"/>
<g class="tg"><ellipse cx="40" cy="60" rx="7" ry="5" fill="#F472B6"/>
<ellipse cx="40" cy="58" rx="6" ry="3" fill="#FDA4AF"/></g>
</svg>`},

{id:'g_fun3', alt:'Dead from laughter X eyes', html:`
<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%">
<style>
@keyframes flophead{0%{transform:rotate(0deg) translateY(0)}30%{transform:rotate(8deg) translateY(2px)}50%{transform:rotate(-4deg) translateY(1px)}100%{transform:rotate(0deg) translateY(0)}}
@keyframes floatdead{0%{transform:translate(0,0) scale(1);opacity:1}100%{transform:translate(8px,-30px) scale(0.3);opacity:0}}
.fl{animation:flophead 0.5s ease-in-out infinite;transform-origin:40px 44px}
.fd1{animation:floatdead 1.5s ease-out 0s infinite}
.fd2{animation:floatdead 1.5s ease-out 0.3s infinite}
.fd3{animation:floatdead 1.5s ease-out 0.6s infinite}
</style>
<rect width="80" height="80" fill="#FFFBEB" rx="12"/>
<g class="fl">
<circle cx="40" cy="44" r="23" fill="#FFDBB5"/>
<path d="M18 36 Q22 22 32 26 Q40 18 48 26 Q58 22 62 36" fill="#2C1A0E" stroke="#2C1A0E" stroke-width="2"/>
<line x1="23" y1="35" x2="33" y2="45" stroke="#2C1A0E" stroke-width="3" stroke-linecap="round"/>
<line x1="33" y1="35" x2="23" y2="45" stroke="#2C1A0E" stroke-width="3" stroke-linecap="round"/>
<line x1="47" y1="35" x2="57" y2="45" stroke="#2C1A0E" stroke-width="3" stroke-linecap="round"/>
<line x1="57" y1="35" x2="47" y2="45" stroke="#2C1A0E" stroke-width="3" stroke-linecap="round"/>
<ellipse cx="20" cy="52" rx="8" ry="5" fill="#FF6B9D" opacity=".8"/>
<ellipse cx="60" cy="52" rx="8" ry="5" fill="#FF6B9D" opacity=".8"/>
<path d="M20 56 Q40 76 60 56" fill="#C0627A" stroke="#9D4E63" stroke-width="2"/>
<rect x="26" y="56" width="28" height="7" rx="3" fill="white"/>
<ellipse cx="40" cy="68" rx="11" ry="6" fill="#FF1A6C" opacity=".5"/>
</g>
<g class="fd1" style="transform-origin:8px 60px"><text x="5" y="62" font-size="13" font-weight="900" font-family="sans-serif" fill="#FBBF24">💀</text></g>
<g class="fd2" style="transform-origin:60px 56px"><text x="58" y="58" font-size="11" font-weight="900" font-family="sans-serif" fill="#F59E0B">😂</text></g>
<g class="fd3" style="transform-origin:30px 72px"><text x="28" y="74" font-family="sans-serif" font-size="10" font-weight="900" fill="#FDE047">DEAD</text></g>
</svg>`},

]},

// ─────────────────────────────────────────────────────────────
{id:'excited', label:'🤩 Excited', gifs:[

{id:'g_exc1', alt:'Star eyes starstruck', html:`
<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%">
<style>
@keyframes starspin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}
@keyframes starspin2{0%{transform:rotate(0deg)}100%{transform:rotate(-360deg)}}
@keyframes gasp{0%,100%{transform:scaleY(1)}50%{transform:scaleY(1.15)}}
@keyframes shimmer{0%,100%{opacity:0.5}50%{opacity:1}}
.ss{animation:starspin 1.2s linear infinite;transform-origin:28px 40px}
.ss2{animation:starspin2 1.2s linear infinite;transform-origin:52px 40px}
.gsp{animation:gasp 0.6s ease-in-out infinite;transform-origin:40px 56px}
.sh{animation:shimmer 0.8s ease-in-out infinite}
</style>
<rect width="80" height="80" fill="#FFFBEB" rx="12"/>
<text class="sh" x="4" y="18" font-size="11">✨</text>
<text class="sh" x="62" y="15" font-size="10" style="animation-delay:.3s">⭐</text>
<text class="sh" x="68" y="50" font-size="9" style="animation-delay:.6s">💫</text>
<text class="sh" x="2" y="56" font-size="8" style="animation-delay:.9s">🌟</text>
<circle cx="40" cy="44" r="23" fill="#FFDBB5"/>
<ellipse cx="40" cy="23" rx="21" ry="9" fill="#3D1F00"/>
<rect x="19" y="23" width="42" height="7" fill="#3D1F00" rx="3"/>
<g class="ss"><text x="19" y="47" font-size="18">⭐</text></g>
<g class="ss2"><text x="43" y="47" font-size="18">⭐</text></g>
<ellipse cx="20" cy="53" rx="7" ry="4" fill="#FFB3C6" opacity=".7"/>
<ellipse cx="60" cy="53" rx="7" ry="4" fill="#FFB3C6" opacity=".7"/>
<g class="gsp"><ellipse cx="40" cy="60" rx="9" ry="7" fill="#C0627A"/><ellipse cx="40" cy="57" rx="8" ry="4" fill="#F08090"/>
<ellipse cx="40" cy="64" rx="6" ry="3.5" fill="#FF1A6C" opacity=".4"/></g>
</svg>`},

{id:'g_exc2', alt:'Cant wait vibrating excited', html:`
<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%">
<style>
@keyframes vibrate{0%,100%{transform:translate(0,0) rotate(0deg)}20%{transform:translate(-2px,-1px) rotate(-2deg)}40%{transform:translate(2px,1px) rotate(2deg)}60%{transform:translate(-1px,2px) rotate(-1deg)}80%{transform:translate(1px,-2px) rotate(1deg)}}
@keyframes bigsmile{0%,100%{transform:scaleX(1)}50%{transform:scaleX(1.1)}}
@keyframes fistpump{0%,100%{transform:translateY(0) rotate(-5deg)}50%{transform:translateY(-6px) rotate(5deg)}}
.vb{animation:vibrate 0.12s ease-in-out infinite;transform-origin:40px 44px}
.bs{animation:bigsmile 0.3s ease-in-out infinite;transform-origin:40px 55px}
.fp{animation:fistpump 0.25s ease-in-out infinite;transform-origin:40px 65px}
</style>
<rect width="80" height="80" fill="#F0FFF4" rx="12"/>
<g class="vb">
<ellipse cx="40" cy="68" rx="14" ry="9" fill="#34D399"/>
<g class="fp">
<ellipse cx="18" cy="62" rx="7" ry="6" fill="#FFDBB5"/>
<ellipse cx="62" cy="62" rx="7" ry="6" fill="#FFDBB5"/>
</g>
<path d="M26 60 Q20 56 18 56" stroke="#FFDBB5" stroke-width="7" fill="none" stroke-linecap="round"/>
<path d="M54 60 Q60 56 62 56" stroke="#FFDBB5" stroke-width="7" fill="none" stroke-linecap="round"/>
<circle cx="40" cy="42" r="21" fill="#FFDBB5"/>
<ellipse cx="40" cy="23" rx="20" ry="9" fill="#1A1A2E"/>
<rect x="20" y="23" width="40" height="7" fill="#1A1A2E" rx="3"/>
<ellipse cx="30" cy="39" rx="6" ry="6.5" fill="white"/>
<ellipse cx="30" cy="39" rx="4.5" ry="5" fill="#2C1A0E"/>
<ellipse cx="32" cy="37" rx="1.5" ry="1.5" fill="white"/>
<ellipse cx="50" cy="39" rx="6" ry="6.5" fill="white"/>
<ellipse cx="50" cy="39" rx="4.5" ry="5" fill="#2C1A0E"/>
<ellipse cx="52" cy="37" rx="1.5" ry="1.5" fill="white"/>
<ellipse cx="21" cy="48" rx="7" ry="4" fill="#FFB3C6" opacity=".7"/>
<ellipse cx="59" cy="48" rx="7" ry="4" fill="#FFB3C6" opacity=".7"/>
<g class="bs">
<path d="M24 50 Q40 65 56 50" fill="#C0627A" stroke="#9D4E63" stroke-width="1.5"/>
<rect x="28" y="50" width="24" height="7" rx="3" fill="white"/>
</g>
</g>
</svg>`},

]},

]; // END GIF_CATEGORIES

// ── Search helper ─────────────────────────────────────────────
function searchGifs(query) {
  if (!query) return GIF_CATEGORIES.flatMap(c => c.gifs);
  const q = query.toLowerCase().trim();
  return GIF_CATEGORIES.flatMap(c =>
    c.gifs.filter(g =>
      g.alt.toLowerCase().includes(q) ||
      c.id.includes(q) ||
      c.label.toLowerCase().includes(q)
    )
  );
}

// ── GIF → Background FX map ───────────────────────────────────
// Fires sticker-fx primitives matched to each GIF's emotion
const GIF_FX = {
  // Love — warm hearts
  g_love1: () => { heartExplosion({ colors:['#FF4D79','#FF8FAB','#FECDD3','#E11D48'] }); },
  g_love2: () => kissEffect(),
  g_love3: () => heartRain({ count:24, colors:['#FF4D79','#F9A8D4','#FECDD3','#E11D48','#FFB3C6'] }),
  g_love4: () => { glowPulse('#FF6B9D', 0.22); spawnParticles({ count:14, emojis:['🤗','💕','🌸','✨'], mode:'burst', spread:280 }); },

  // Happy — confetti & laughs
  g_hap1: () => { spawnParticles({ count:14, emojis:['😂','🤣','💧','😹'], mode:'burst', spread:260 }); hahaText(); },
  g_hap2: () => confettiExplosion(),
  g_hap3: () => { confettiExplosion(); spawnParticles({ count:8, emojis:['🎉','🎊','🥳'], mode:'shootUp', spread:280, delay:300 }); },

  // Miss you — soft blue hearts
  g_miss1: () => heartRain({ count:20, colors:['#93C5FD','#60A5FA','#3B82F6','#BAE6FD','#F9A8D4'] }),
  g_miss2: () => { glowPulse('#A78BFA', 0.18); spawnParticles({ count:10, emojis:['💭','💕','🌸','💫'], mode:'floatUp', spread:200 }); },
  g_miss3: () => { spawnParticles({ count:12, emojis:['💕','👋','✨','🌸'], mode:'burst', spread:260 }); glowPulse('#F472B6', 0.2); },

  // Hug — warm orange glow + particles
  g_hug1: () => { glowPulse('#FB923C', 0.25); spawnParticles({ count:16, emojis:['🤗','💕','🌸','✨','💖'], mode:'burst', spread:280 }); },
  g_hug2: () => { heartRain({ count:16, colors:['#60A5FA','#EF4444','#F9A8D4','#FB7185'] }); glowPulse('#FB7185', 0.15); },

  // Morning — sunrise
  g_morn1: () => sunriseEffect(),
  g_morn2: () => { spawnParticles({ count:10, emojis:['☕','✨','🌅','💛','🌤️'], mode:'floatUp', spread:200 }); glowPulse('#FCD34D', 0.2); },

  // Night — moonrise
  g_night1: () => moonriseEffect(),
  g_night2: () => { moonriseEffect(); spawnParticles({ count:8, emojis:['💕','💤','🌙','✨'], mode:'floatUp', spread:180, delay:600 }); },

  // Sorry — teardrops + blue glow
  g_sorry1: () => { spawnParticles({ count:16, emojis:['🙏','💧','😔','💦','😢'], mode:'floatUp', spread:220 }); glowPulse('#93C5FD', 0.3); },
  g_sorry2: () => { spawnParticles({ count:12, emojis:['😅','💦','🙏','😬'], mode:'burst', spread:200 }); glowPulse('#6EE7B7', 0.2); },

  // Funny — laughing explosion
  g_fun1: () => { spawnParticles({ count:18, emojis:['😂','🤣','💧','😹','💀'], mode:'burst', spread:300 }); hahaText(); },
  g_fun2: () => spawnParticles({ count:14, emojis:['😜','✨','💫','🎉','😏'], mode:'burst', spread:260 }),
  g_fun3: () => { confettiExplosion(); spawnParticles({ count:10, emojis:['💀','😂','😹'], mode:'shootUp', spread:260, delay:200 }); },

  // Excited — star burst
  g_exc1: () => { spawnParticles({ count:20, emojis:['⭐','🌟','✨','💫','🤩'], mode:'burst', spread:320 }); glowPulse('#FCD34D', 0.22); },
  g_exc2: () => { confettiExplosion(); spawnParticles({ count:10, emojis:['🎉','💪','✨','🔥'], mode:'shootUp', spread:280, delay:200 }); },
};

// ── Public trigger ────────────────────────────────────────────
function triggerGifFx(gifId) {
  const fn = GIF_FX[gifId];
  if (fn) setTimeout(fn, 100);
}

window.GIF_CATEGORIES  = GIF_CATEGORIES;
window.searchGifs      = searchGifs;
window.GIF_FX          = GIF_FX;
window.triggerGifFx    = triggerGifFx;
