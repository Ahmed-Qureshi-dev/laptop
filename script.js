const WA_NUMBER = '923193921895';

function orderNow(name, spec, price) {
  const msg = `Hello Alfa Biz! I want to ORDER NOW:

Product: ${name}
Specs: ${spec}
Price: ${price}

Please confirm and share payment details.`;
  window.open('https://wa.me/' + WA_NUMBER + '?text=' + encodeURIComponent(msg), '_blank');
}

// SCROLL REVEAL
const reveals = document.querySelectorAll('.reveal');
const ro = new IntersectionObserver(es => {
  es.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.1 });
reveals.forEach(r => ro.observe(r));



// PRODUCT FILTER
function filterP(btn, cat) {
  document.querySelectorAll('.fbtn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.pcard').forEach(c => {
    const cats = c.dataset.cat || '';
    if (cat === 'all' || cats.includes(cat)) {
      c.style.display = '';
      setTimeout(() => { c.style.opacity = '1'; c.style.transform = ''; }, 10);
    } else {
      c.style.opacity = '0';
      c.style.transform = 'scale(0.95)';
      setTimeout(() => c.style.display = 'none', 280);
    }
  });
}

// SIDE DRAWER
function toggleDrawer() {
  const drawer = document.getElementById('drawer');
  const overlay = document.getElementById('overlay');
  drawer.classList.toggle('active');
  overlay.classList.toggle('active');
  document.body.style.overflow = drawer.classList.contains('active') ? 'hidden' : '';
}

// WHATSAPP INQUIRY
function inquireWA(product) {
  const msg = 'Hello! I am interested in the ' + product + '. Please share details and price.';
  window.open('https://wa.me/' + WA_NUMBER + '?text=' + encodeURIComponent(msg), '_blank');
}

// CONTACT FORM TO WHATSAPP
function sendContact() {
  const name = document.getElementById('cgName').value.trim();
  const phone = document.getElementById('cgPhone').value.trim();
  const email = document.getElementById('cgEmail').value.trim();
  const msg = document.getElementById('cgMsg').value.trim();

  let text = `Hello Alfa Biz!

`;
  if (name) text += `Name: ${name}
`;
  if (phone) text += `Phone: ${phone}
`;
  if (email) text += `Email: ${email}
`;
  if (msg) text += `Message: ${msg}
`;
  text += `
Please get back to me as soon as possible.`;

  window.open('https://wa.me/' + WA_NUMBER + '?text=' + encodeURIComponent(text), '_blank');
}

// BANNER SCROLL
function scrollToContact(e) {
  e.preventDefault();
  document.getElementById('why').scrollIntoView({ behavior: 'smooth' });
}

// PARTICLES SYSTEM
function initParticles() {
  const canvas = document.getElementById('particlesCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let particles = [];
  
  function resize() {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
  }
  window.addEventListener('resize', resize);
  resize();

  class Particle {
    constructor() {
      this.reset();
    }
    reset() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.vx = (Math.random() - 0.5) * 0.3;
      this.vy = (Math.random() - 0.5) * 0.3;
      this.size = Math.random() * 1.5 + 0.5;
      this.alpha = Math.random() * 0.5 + 0.3;
      this.glow = Math.random() * 5 + 2;
    }
    update() {
      this.x += this.vx;
      this.y += this.vy;
      if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) {
        this.reset();
      }
    }
    draw() {
      ctx.shadowBlur = this.glow;
      ctx.shadowColor = 'rgba(0, 242, 254, 0.8)';
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(0, 242, 254, ${this.alpha})`;
      ctx.fill();
      ctx.shadowBlur = 0;
    }
  }

  for (let i = 0; i < 100; i++) particles.push(new Particle());

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      p.update();
      p.draw();
    });
    requestAnimationFrame(animate);
  }
  animate();
}

// LENIS SMOOTH SCROLL
const lScript = document.createElement('script');
lScript.src = "https://unpkg.com/@studio-freight/lenis@1.0.33/dist/lenis.min.js";
lScript.onload = () => {
  const lenis = new Lenis({ duration: 1.2, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), smoothWheel: true });
  function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
  requestAnimationFrame(raf);
};
document.head.appendChild(lScript);

// ═══════════════════════════════════════════
// FUTURISTIC PRELOADER — CANVAS PARTICLE ENGINE
// ═══════════════════════════════════════════
(function() {
  const preloader = document.getElementById('preloader');
  if (!preloader || sessionStorage.getItem('lw_preloader_played')) {
    if (preloader) preloader.style.display = 'none';
    return;
  }
  const canvas = document.getElementById('preloader-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  const isMobile = window.innerWidth < 768;
  
  function resize() {
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  // Particle class
  class Particle {
    constructor() { this.reset(true); }
    reset(initial) {
      this.x     = Math.random() * canvas.width;
      this.y     = initial ? Math.random() * canvas.height : canvas.height + 10;
      this.r     = Math.random() * 2 + 0.5;
      this.speed = Math.random() * 0.6 + 0.2;
      this.vx    = (Math.random() - 0.5) * 0.4;
      this.alpha = Math.random() * 0.6 + 0.2;
      this.pulse = Math.random() * Math.PI * 2;
    }
    update() {
      this.y -= this.speed;
      this.x += this.vx;
      this.pulse += 0.04;
      this.alpha = 0.3 + Math.sin(this.pulse) * 0.3;
      if (this.y < -10) this.reset(false);
    }
    draw() {
      ctx.save();
      ctx.globalAlpha = this.alpha;
      if (!isMobile) {
        ctx.shadowBlur  = 12;
        ctx.shadowColor = '#00f2fe';
      }
      ctx.fillStyle   = '#00f2fe';
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }
  }

  const PARTICLE_COUNT = isMobile ? 45 : 120;
  const particles = Array.from({ length: PARTICLE_COUNT }, () => new Particle());
  const CONNECTION_DIST = isMobile ? 0 : 100;

  function drawConnections() {
    if (CONNECTION_DIST === 0) return;
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < CONNECTION_DIST) {
          const alpha = (1 - dist / CONNECTION_DIST) * 0.15;
          ctx.save();
          ctx.globalAlpha = alpha;
          ctx.strokeStyle = '#00f2fe';
          ctx.lineWidth   = 0.5;
          ctx.shadowBlur  = 6;
          ctx.shadowColor = '#00f2fe';
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
          ctx.restore();
        }
      }
    }
  }

  // Radial glow behind logo center
  function drawCenterGlow() {
    const cx = canvas.width / 2;
    const cy = canvas.height / 2;
    const t  = Date.now() / 1000;
    const r1 = 180 + Math.sin(t * 1.2) * 20;
    const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, r1);
    grad.addColorStop(0,   'rgba(0,242,254,0.08)');
    grad.addColorStop(0.5, 'rgba(0,242,254,0.03)');
    grad.addColorStop(1,   'rgba(0,242,254,0)');
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.arc(cx, cy, r1, 0, Math.PI * 2);
    ctx.fill();
  }

  let animId;
  function loop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawCenterGlow();
    drawConnections();
    particles.forEach(p => { p.update(); p.draw(); });
    animId = requestAnimationFrame(loop);
  }
  loop();

  // Live % counter synced to the CSS bar animation (2.8s)
  const pctEl = document.getElementById('loader-pct');
  const statusEl = document.querySelector('.loader-status');
  const messages = [
    'INITIALIZING SYSTEMS',
    'LOADING ASSETS',
    'SYNCING DATABASE',
    'SECURING CONNECTION',
    'LAUNCHING INTERFACE'
  ];
  let msgIdx = 0;
  let pct = 0;
  const keyframes = [
    { t: 0,    v: 0   },
    { t: 280,  v: 5   },
    { t: 840,  v: 30  },
    { t: 1540, v: 60  },
    { t: 2240, v: 88  },
    { t: 2800, v: 100 }
  ];
  const start = Date.now();

  const pctInterval = setInterval(() => {
    const elapsed = Date.now() - start;
    // Interpolate from keyframes
    for (let i = 1; i < keyframes.length; i++) {
      if (elapsed <= keyframes[i].t) {
        const seg   = keyframes[i].t - keyframes[i - 1].t;
        const prog  = (elapsed - keyframes[i - 1].t) / seg;
        pct = keyframes[i - 1].v + (keyframes[i].v - keyframes[i - 1].v) * prog;
        break;
      }
    }
    pct = Math.min(Math.round(pct), 100);
    if (pctEl) pctEl.textContent = pct + '%';

    // Cycle status messages
    const newIdx = Math.floor((pct / 100) * messages.length);
    if (newIdx !== msgIdx && newIdx < messages.length) {
      msgIdx = newIdx;
      if (statusEl) statusEl.textContent = messages[msgIdx];
    }

    if (pct >= 100) clearInterval(pctInterval);
  }, 40);

  // Dismiss preloader
  window.addEventListener('load', () => {
    setTimeout(() => {
      const preloader = document.getElementById('preloader');
      if (preloader) {
        preloader.classList.add('loaded');
        sessionStorage.setItem('lw_preloader_played', 'true');
        setTimeout(() => {
          cancelAnimationFrame(animId);
          preloader.style.display = 'none';
        }, 1800);
      }
    }, 2900);
  });
})();

// INIT
document.addEventListener('DOMContentLoaded', () => {
  initParticles();

  // Floating capsule navbar scroll effect
  const navbar = document.querySelector('nav');
  if (navbar) {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Run once in case page loaded scrolled down
  }
});
