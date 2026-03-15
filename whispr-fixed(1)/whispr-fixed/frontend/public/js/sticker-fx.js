// ============================================================
// WHISPR — Sticker Background FX Engine
// Triggered when a sticker message is sent or received
// ============================================================

const STICKER_FX = {
  // Hi / Wave
  s001: () => spawnParticles({ count:14, emojis:['👋','✨','💫','⭐'], mode:'burst', spread:260 }),
  s002: () => spawnParticles({ count:14, emojis:['👋','✨','💫','😄'], mode:'burst', spread:260 }),

  // How r u / Fine
  s003: () => spawnParticles({ count:12, emojis:['❓','🤔','💭','❔'], mode:'floatUp', spread:200 }),
  s004: () => spawnParticles({ count:16, emojis:['👍','✨','⭐','💪','🌟'], mode:'burst', spread:300 }),

  // What's up
  s005: () => spawnParticles({ count:18, emojis:['⭐','🌟','💫','✨','🚀'], mode:'shootUp', spread:280 }),

  // Food / Lunch
  s006: () => spawnParticles({ count:14, emojis:['🍜','🍱','🍚','🥢','🍛','😋'], mode:'floatUp', spread:220 }),
  s007: () => spawnParticles({ count:14, emojis:['🍴','🍔','😋','🤤','🍕','🌮'], mode:'floatUp', spread:220 }),

  // Miss you
  s008: () => heartRain({ count:22, colors:['#FB7185','#F9A8D4','#FECDD3','#E11D48','#FCA5A5'] }),
  s009: () => heartRain({ count:22, colors:['#93C5FD','#60A5FA','#3B82F6','#BAE6FD','#F9A8D4'] }),

  // Love
  s010: () => { heartExplosion({ colors:['#EF4444','#F9A8D4','#FB7185','#FECDD3','#E11D48'] }); spawnParticles({ count:10, emojis:['🌹','✨','💖','🌸'], mode:'burst', spread:320, delay:400 }); },
  s011: () => { heartExplosion({ colors:['#60A5FA','#EF4444','#F9A8D4','#FB7185'] }); spawnParticles({ count:10, emojis:['💙','❤️','✨','💖'], mode:'burst', spread:320, delay:400 }); },

  // Hugs
  s012: () => { glowPulse('#FB7185'); spawnParticles({ count:16, emojis:['🤗','💕','🌸','✨','💖'], mode:'burst', spread:280 }); },

  // Good morning
  s013: () => sunriseEffect(),

  // Good night
  s014: () => moonriseEffect(),

  // Thinking
  s015: () => spawnParticles({ count:10, emojis:['💭','🤔','❓','💡','🌀'], mode:'floatUp', spread:200 }),

  // Okay
  s016: () => spawnParticles({ count:18, emojis:['✅','👌','✔️','⭐','💚'], mode:'burst', spread:280 }),

  // Sorry
  s017: () => { spawnParticles({ count:16, emojis:['🙏','💧','😔','💦'], mode:'floatUp', spread:220 }); glowPulse('#93C5FD', 0.3); },

  // Yay / Celebrate
  s018: () => confettiExplosion(),

  // Waiting
  s019: () => spawnParticles({ count:12, emojis:['⏰','⏳','🕐','🕑','🕒'], mode:'floatUp', spread:180 }),

  // Kiss
  s020: () => kissEffect(),

  // Us / Couple
  s021: () => orbitingHearts(),

  // Aww
  s022: () => spawnParticles({ count:20, emojis:['🥺','💫','✨','⭐','🌸','💕'], mode:'burst', spread:300 }),

  // LOL
  s023: () => { spawnParticles({ count:14, emojis:['😂','🤣','💧','😹'], mode:'burst', spread:260 }); hahaText(); },
};

// ── CORE: get chat panel bounds ──────────────────────────────
function getChatRect() {
  const el = document.getElementById('messagesWrap');
  return el ? el.getBoundingClientRect() : document.body.getBoundingClientRect();
}

function getCenter() {
  const r = getChatRect();
  return { x: r.left + r.width / 2, y: r.top + r.height / 2 };
}

// ── PARTICLE SPAWNER ─────────────────────────────────────────
function spawnParticles({ count, emojis, mode, spread, delay = 0 }) {
  setTimeout(() => {
    const rect = getChatRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height * 0.65;

    for (let i = 0; i < count; i++) {
      const el = document.createElement('div');
      el.className = 'fx-particle';
      el.textContent = emojis[Math.floor(Math.random() * emojis.length)];
      el.style.cssText = `
        position: fixed;
        pointer-events: none;
        z-index: 9990;
        font-size: ${18 + Math.random() * 18}px;
        left: ${cx}px;
        top: ${cy}px;
        transform: translate(-50%, -50%);
        will-change: transform, opacity;
      `;
      document.body.appendChild(el);

      let tx, ty, rot;
      const angle = (Math.random() * 360) * Math.PI / 180;
      const dist = 60 + Math.random() * spread;

      if (mode === 'burst') {
        tx = Math.cos(angle) * dist;
        ty = Math.sin(angle) * dist - 20;
      } else if (mode === 'floatUp') {
        tx = (Math.random() - 0.5) * spread;
        ty = -(80 + Math.random() * 180);
      } else if (mode === 'shootUp') {
        tx = (Math.random() - 0.5) * spread;
        ty = -(100 + Math.random() * 220);
      }
      rot = (Math.random() - 0.5) * 720;

      const delay0 = Math.random() * 200;
      const dur = 900 + Math.random() * 700;

      el.animate([
        { transform: `translate(-50%,-50%) translate(0,0) rotate(0deg) scale(0.2)`, opacity: 0 },
        { transform: `translate(-50%,-50%) translate(${tx * 0.4}px,${ty * 0.4}px) rotate(${rot * 0.4}deg) scale(1.3)`, opacity: 1, offset: 0.15 },
        { transform: `translate(-50%,-50%) translate(${tx}px,${ty}px) rotate(${rot}deg) scale(0.6)`, opacity: 0 },
      ], { duration: dur, delay: delay0, easing: 'cubic-bezier(0.23,1,0.32,1)', fill: 'forwards' })
        .finished.then(() => el.remove());
    }
  }, delay);
}

// ── HEART RAIN ───────────────────────────────────────────────
function heartRain({ count, colors }) {
  const rect = getChatRect();

  for (let i = 0; i < count; i++) {
    const el = document.createElement('div');
    el.className = 'fx-particle';
    const color = colors[Math.floor(Math.random() * colors.length)];
    const size = 12 + Math.random() * 20;
    const startX = rect.left + Math.random() * rect.width;
    const startY = rect.top - 20;
    const endY = rect.bottom + 30;
    const sway = (Math.random() - 0.5) * 80;

    el.style.cssText = `
      position: fixed;
      pointer-events: none;
      z-index: 9990;
      font-size: ${size}px;
      left: ${startX}px;
      top: ${startY}px;
      will-change: transform, opacity;
    `;
    el.textContent = '❤️';
    el.style.filter = `hue-rotate(${Math.random() * 60 - 30}deg)`;
    document.body.appendChild(el);

    const dur = 1800 + Math.random() * 1400;
    const delay0 = Math.random() * 800;

    el.animate([
      { transform: `translateX(0) rotate(0deg) scale(0)`, opacity: 0 },
      { transform: `translateX(${sway * 0.3}px) rotate(15deg) scale(1.2)`, opacity: 0.9, offset: 0.1 },
      { transform: `translateX(${sway}px) rotate(-10deg) scale(1)`, opacity: 0.7, offset: 0.6 },
      { transform: `translateX(${sway * 1.3}px) translateY(${endY - startY}px) rotate(20deg) scale(0.4)`, opacity: 0 },
    ], { duration: dur, delay: delay0, easing: 'ease-in', fill: 'forwards' })
      .finished.then(() => el.remove());
  }
}

// ── HEART EXPLOSION ──────────────────────────────────────────
function heartExplosion({ colors }) {
  const { x: cx, y: cy } = getCenter();

  // Big center heart
  const big = document.createElement('div');
  big.style.cssText = `position:fixed;pointer-events:none;z-index:9992;left:${cx}px;top:${cy}px;font-size:80px;transform:translate(-50%,-50%) scale(0);will-change:transform,opacity;`;
  big.textContent = '❤️';
  document.body.appendChild(big);
  big.animate([
    { transform:'translate(-50%,-50%) scale(0)', opacity:0 },
    { transform:'translate(-50%,-50%) scale(1.6)', opacity:0.9, offset:0.3 },
    { transform:'translate(-50%,-50%) scale(1.2)', opacity:0.7, offset:0.6 },
    { transform:'translate(-50%,-50%) scale(3)', opacity:0 },
  ], { duration:1200, easing:'cubic-bezier(0.23,1,0.32,1)', fill:'forwards' })
    .finished.then(() => big.remove());

  // Ring of smaller hearts
  for (let i = 0; i < 16; i++) {
    const angle = (i / 16) * Math.PI * 2;
    const dist = 100 + Math.random() * 80;
    const el = document.createElement('div');
    el.style.cssText = `position:fixed;pointer-events:none;z-index:9991;left:${cx}px;top:${cy}px;font-size:${16 + Math.random()*18}px;will-change:transform,opacity;`;
    el.textContent = ['❤️','💕','💖','💗','💝'][Math.floor(Math.random()*5)];
    document.body.appendChild(el);
    el.animate([
      { transform:`translate(-50%,-50%) translate(0,0) scale(0)`, opacity:0 },
      { transform:`translate(-50%,-50%) translate(${Math.cos(angle)*dist*0.5}px,${Math.sin(angle)*dist*0.5}px) scale(1.4)`, opacity:1, offset:0.3 },
      { transform:`translate(-50%,-50%) translate(${Math.cos(angle)*dist}px,${Math.sin(angle)*dist}px) scale(0.3)`, opacity:0 },
    ], { duration:1400, delay: 100 + Math.random()*200, easing:'cubic-bezier(0.23,1,0.32,1)', fill:'forwards' })
      .finished.then(() => el.remove());
  }
}

// ── GLOW PULSE ───────────────────────────────────────────────
function glowPulse(color = '#7C6AF7', opacity = 0.18) {
  const rect = getChatRect();
  const el = document.createElement('div');
  el.style.cssText = `
    position:fixed;
    pointer-events:none;
    z-index:9989;
    left:${rect.left}px;
    top:${rect.top}px;
    width:${rect.width}px;
    height:${rect.height}px;
    background:radial-gradient(circle at 50% 60%, ${color} 0%, transparent 70%);
    opacity:0;
    will-change:opacity;
  `;
  document.body.appendChild(el);
  el.animate([
    { opacity: 0 },
    { opacity: opacity },
    { opacity: 0 },
  ], { duration: 1400, easing: 'ease-in-out', fill:'forwards' })
    .finished.then(() => el.remove());
}

// ── SUNRISE ──────────────────────────────────────────────────
function sunriseEffect() {
  const rect = getChatRect();
  const cx = rect.left + rect.width / 2;
  const bottom = rect.bottom;

  // Warm glow from bottom
  const glow = document.createElement('div');
  glow.style.cssText = `
    position:fixed;pointer-events:none;z-index:9988;
    left:${rect.left}px;top:${rect.top}px;
    width:${rect.width}px;height:${rect.height}px;
    background:linear-gradient(to top, rgba(251,191,36,0.22) 0%, rgba(251,146,60,0.1) 40%, transparent 75%);
    opacity:0;will-change:opacity;
  `;
  document.body.appendChild(glow);
  glow.animate([{opacity:0},{opacity:1},{opacity:0}],{duration:2800,easing:'ease-in-out',fill:'forwards'})
    .finished.then(()=>glow.remove());

  // Sun rising
  const sun = document.createElement('div');
  sun.style.cssText = `
    position:fixed;pointer-events:none;z-index:9992;
    left:${cx}px;top:${bottom + 30}px;
    font-size:64px;
    transform:translate(-50%,0);
    will-change:transform,opacity;
  `;
  sun.textContent = '☀️';
  document.body.appendChild(sun);
  sun.animate([
    { transform:`translate(-50%, 0) scale(0.4)`, opacity:0 },
    { transform:`translate(-50%, -${rect.height * 0.55}px) scale(1.4)`, opacity:1, offset:0.5 },
    { transform:`translate(-50%, -${rect.height * 0.65}px) scale(1)`, opacity:0.8, offset:0.8 },
    { transform:`translate(-50%, -${rect.height * 0.7}px) scale(0.6)`, opacity:0 },
  ], { duration: 2600, easing:'cubic-bezier(0.23,1,0.32,1)', fill:'forwards' })
    .finished.then(()=>sun.remove());

  // Birds
  for(let i=0;i<5;i++){
    const b = document.createElement('div');
    b.style.cssText=`position:fixed;pointer-events:none;z-index:9991;font-size:${12+i*3}px;left:${cx + (i-2)*55}px;top:${bottom}px;`;
    b.textContent='🐦';
    document.body.appendChild(b);
    b.animate([
      {transform:`translate(0,0) scale(0)`,opacity:0},
      {transform:`translate(${(i-2)*30}px,-${120+i*40}px) scale(1)`,opacity:0.8,offset:0.6},
      {transform:`translate(${(i-2)*80}px,-${200+i*50}px) scale(0.5)`,opacity:0},
    ],{duration:2200,delay:400+i*120,easing:'ease-out',fill:'forwards'})
      .finished.then(()=>b.remove());
  }

  // Stars fading
  for(let i=0;i<8;i++){
    const s=document.createElement('div');
    const sx=rect.left+Math.random()*rect.width;
    const sy=rect.top+Math.random()*rect.height*0.6;
    s.style.cssText=`position:fixed;pointer-events:none;z-index:9990;left:${sx}px;top:${sy}px;font-size:${10+Math.random()*8}px;`;
    s.textContent='⭐';
    document.body.appendChild(s);
    s.animate([{opacity:0.7},{opacity:0}],{duration:1200+Math.random()*600,delay:Math.random()*400,fill:'forwards'})
      .finished.then(()=>s.remove());
  }
}

// ── MOONRISE ─────────────────────────────────────────────────
function moonriseEffect() {
  const rect = getChatRect();
  const cx = rect.left + rect.width / 2;
  const bottom = rect.bottom;

  // Dark blue glow
  const glow = document.createElement('div');
  glow.style.cssText = `
    position:fixed;pointer-events:none;z-index:9988;
    left:${rect.left}px;top:${rect.top}px;
    width:${rect.width}px;height:${rect.height}px;
    background:linear-gradient(to top, rgba(30,27,75,0.35) 0%, rgba(49,46,129,0.15) 50%, transparent 80%);
    opacity:0;will-change:opacity;
  `;
  document.body.appendChild(glow);
  glow.animate([{opacity:0},{opacity:1},{opacity:0}],{duration:2800,easing:'ease-in-out',fill:'forwards'})
    .finished.then(()=>glow.remove());

  // Moon rising
  const moon = document.createElement('div');
  moon.style.cssText=`position:fixed;pointer-events:none;z-index:9992;left:${cx}px;top:${bottom+30}px;font-size:60px;transform:translate(-50%,0);will-change:transform,opacity;`;
  moon.textContent='🌙';
  document.body.appendChild(moon);
  moon.animate([
    {transform:`translate(-50%,0) scale(0.3) rotate(-30deg)`,opacity:0},
    {transform:`translate(-50%,-${rect.height*0.55}px) scale(1.3) rotate(10deg)`,opacity:1,offset:0.5},
    {transform:`translate(-50%,-${rect.height*0.68}px) scale(0.9) rotate(0deg)`,opacity:0},
  ],{duration:2600,easing:'cubic-bezier(0.23,1,0.32,1)',fill:'forwards'})
    .finished.then(()=>moon.remove());

  // Stars twinkling in
  for(let i=0;i<18;i++){
    const s=document.createElement('div');
    const sx=rect.left+Math.random()*rect.width;
    const sy=rect.top+Math.random()*rect.height*0.85;
    s.style.cssText=`position:fixed;pointer-events:none;z-index:9991;left:${sx}px;top:${sy}px;font-size:${8+Math.random()*12}px;`;
    s.textContent=['⭐','✨','💫','🌟'][Math.floor(Math.random()*4)];
    document.body.appendChild(s);
    const d=600+Math.random()*1000;
    s.animate([
      {opacity:0,transform:'scale(0)'},
      {opacity:1,transform:'scale(1.3)'},
      {opacity:0.7,transform:'scale(0.9)'},
      {opacity:0,transform:'scale(0)'},
    ],{duration:d,delay:Math.random()*1200,iterations:2,easing:'ease-in-out',fill:'forwards'})
      .finished.then(()=>s.remove());
  }
}

// ── KISS EFFECT ──────────────────────────────────────────────
function kissEffect() {
  const rect = getChatRect();

  // Big lip print lands in center
  const { x: cx, y: cy } = getCenter();
  const big = document.createElement('div');
  big.style.cssText=`position:fixed;pointer-events:none;z-index:9993;left:${cx}px;top:${cy}px;font-size:90px;transform:translate(-50%,-50%) scale(0) rotate(-20deg);will-change:transform,opacity;`;
  big.textContent='💋';
  document.body.appendChild(big);
  big.animate([
    {transform:'translate(-50%,-50%) scale(0) rotate(-20deg)',opacity:0},
    {transform:'translate(-50%,-50%) scale(1.8) rotate(5deg)',opacity:1,offset:0.35},
    {transform:'translate(-50%,-50%) scale(1.4) rotate(0deg)',opacity:0.85,offset:0.6},
    {transform:'translate(-50%,-50%) scale(2.2) rotate(-3deg)',opacity:0},
  ],{duration:1600,easing:'cubic-bezier(0.23,1,0.32,1)',fill:'forwards'})
    .finished.then(()=>big.remove());

  // Flying kiss marks
  for(let i=0;i<12;i++){
    const angle=(Math.random()*Math.PI*2);
    const dist=80+Math.random()*140;
    const el=document.createElement('div');
    el.style.cssText=`position:fixed;pointer-events:none;z-index:9991;left:${cx}px;top:${cy}px;font-size:${14+Math.random()*18}px;`;
    el.textContent=['💋','💕','💖','😘','💗'][Math.floor(Math.random()*5)];
    document.body.appendChild(el);
    el.animate([
      {transform:`translate(-50%,-50%) translate(0,0) scale(0) rotate(0deg)`,opacity:0},
      {transform:`translate(-50%,-50%) translate(${Math.cos(angle)*dist*0.5}px,${Math.sin(angle)*dist*0.5}px) scale(1.2) rotate(${Math.random()*60-30}deg)`,opacity:1,offset:0.3},
      {transform:`translate(-50%,-50%) translate(${Math.cos(angle)*dist}px,${Math.sin(angle)*dist}px) scale(0.3) rotate(${Math.random()*120-60}deg)`,opacity:0},
    ],{duration:1200+Math.random()*600,delay:200+Math.random()*300,easing:'cubic-bezier(0.23,1,0.32,1)',fill:'forwards'})
      .finished.then(()=>el.remove());
  }

  // Pink glow
  glowPulse('#FB7185', 0.2);
}

// ── ORBITING HEARTS (Us/Couple) ──────────────────────────────
function orbitingHearts() {
  const { x: cx, y: cy } = getCenter();

  // Two hearts that orbit and merge
  const colors = ['#3B82F6', '#EF4444'];
  const startOffsets = [-1, 1];

  const hearts = colors.map((c, idx) => {
    const el = document.createElement('div');
    el.style.cssText=`position:fixed;pointer-events:none;z-index:9992;left:${cx}px;top:${cy}px;font-size:36px;will-change:transform,opacity;`;
    el.textContent = idx === 0 ? '💙' : '❤️';
    document.body.appendChild(el);

    const frames=[];
    const steps=30;
    for(let t=0;t<=steps;t++){
      const progress=t/steps;
      const eased=progress<0.5?2*progress*progress:1-Math.pow(-2*progress+2,2)/2;
      const orbitR=90*(1-eased*0.9);
      const angle=startOffsets[idx]*Math.PI + progress*Math.PI*4;
      const tx=Math.cos(angle)*orbitR;
      const ty=Math.sin(angle)*orbitR*0.5;
      const scale=1+Math.sin(progress*Math.PI)*0.4;
      const op=t===0?0:t<steps?0.85:0;
      frames.push({transform:`translate(-50%,-50%) translate(${tx}px,${ty}px) scale(${scale})`,opacity:op});
    }
    el.animate(frames,{duration:2000,easing:'linear',fill:'forwards'}).finished.then(()=>el.remove());
    return el;
  });

  // Merged big heart
  setTimeout(()=>{
    const big=document.createElement('div');
    big.style.cssText=`position:fixed;pointer-events:none;z-index:9993;left:${cx}px;top:${cy}px;font-size:72px;transform:translate(-50%,-50%) scale(0);will-change:transform,opacity;`;
    big.textContent='❤️';
    document.body.appendChild(big);
    big.animate([
      {transform:'translate(-50%,-50%) scale(0)',opacity:0},
      {transform:'translate(-50%,-50%) scale(2)',opacity:1,offset:0.4},
      {transform:'translate(-50%,-50%) scale(1.5)',opacity:0.8,offset:0.7},
      {transform:'translate(-50%,-50%) scale(2.5)',opacity:0},
    ],{duration:1000,easing:'cubic-bezier(0.23,1,0.32,1)',fill:'forwards'}).finished.then(()=>big.remove());
  },1800);

  glowPulse('#FB7185', 0.18);
}

// ── CONFETTI EXPLOSION ───────────────────────────────────────
function confettiExplosion() {
  const rect = getChatRect();
  const cx = rect.left + rect.width / 2;
  const cy = rect.top + rect.height * 0.5;

  const colors=['#EF4444','#F59E0B','#10B981','#3B82F6','#A78BFA','#F472B6','#34D399','#FBBF24'];
  const shapes=['▪','▸','●','◆','▲'];

  for(let i=0;i<60;i++){
    const el=document.createElement('div');
    const color=colors[Math.floor(Math.random()*colors.length)];
    const shape=shapes[Math.floor(Math.random()*shapes.length)];
    const size=8+Math.random()*12;
    el.style.cssText=`
      position:fixed;pointer-events:none;z-index:9990;
      left:${cx}px;top:${cy}px;
      font-size:${size}px;color:${color};
      will-change:transform,opacity;
    `;
    el.textContent=shape;
    document.body.appendChild(el);

    const angle=Math.random()*Math.PI*2;
    const dist=100+Math.random()*200;
    const gravity=150+Math.random()*200;
    const rot=(Math.random()-0.5)*1080;

    el.animate([
      {transform:`translate(-50%,-50%) translate(0,0) rotate(0deg) scale(0)`,opacity:1},
      {transform:`translate(-50%,-50%) translate(${Math.cos(angle)*dist*0.6}px,${Math.sin(angle)*dist*0.6 - 80}px) rotate(${rot*0.5}deg) scale(1.3)`,opacity:1,offset:0.3},
      {transform:`translate(-50%,-50%) translate(${Math.cos(angle)*dist}px,${Math.sin(angle)*dist + gravity}px) rotate(${rot}deg) scale(0.4)`,opacity:0},
    ],{duration:1400+Math.random()*800,delay:Math.random()*300,easing:'cubic-bezier(0.23,1,0.32,1)',fill:'forwards'})
      .finished.then(()=>el.remove());
  }

  // Emoji burst too
  spawnParticles({count:14,emojis:['🎉','🎊','🥳','🎈','🌟','✨'],mode:'burst',spread:300,delay:100});
}

// ── HA HA TEXT ────────────────────────────────────────────────
function hahaText() {
  const rect = getChatRect();
  const texts = ['HA','HA!','LOL','😂','HA','HAHA'];
  texts.forEach((txt, i) => {
    const el = document.createElement('div');
    const x = rect.left + 40 + Math.random() * (rect.width - 80);
    const y = rect.bottom - 40;
    el.style.cssText=`
      position:fixed;pointer-events:none;z-index:9992;
      left:${x}px;top:${y}px;
      font-family:'Syne',sans-serif;
      font-size:${20+Math.random()*18}px;
      font-weight:900;
      color:${['#FBBF24','#F59E0B','#FDE047'][Math.floor(Math.random()*3)]};
      will-change:transform,opacity;
    `;
    el.textContent=txt;
    document.body.appendChild(el);
    el.animate([
      {transform:`translate(-50%,0) scale(0) rotate(${(Math.random()-0.5)*30}deg)`,opacity:0},
      {transform:`translate(-50%,-${60+Math.random()*80}px) scale(1.4) rotate(${(Math.random()-0.5)*15}deg)`,opacity:1,offset:0.3},
      {transform:`translate(-50%,-${140+Math.random()*100}px) scale(0.6) rotate(${(Math.random()-0.5)*40}deg)`,opacity:0},
    ],{duration:1100+Math.random()*400,delay:i*80,easing:'cubic-bezier(0.23,1,0.32,1)',fill:'forwards'})
      .finished.then(()=>el.remove());
  });
}

// ── PUBLIC: trigger FX for a sticker ID ──────────────────────
function triggerStickerFx(stickerId) {
  const fn = STICKER_FX[stickerId];
  if (fn) {
    // Small random delay so it feels natural after the message appears
    setTimeout(fn, 120);
  }
}
