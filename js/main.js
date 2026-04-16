/* ==============================
   DUNGEON – main.js
   ============================== */

// ---- Navbar scroll effect ----
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
});

// ---- Mobile burger menu ----
const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');

burger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  burger.classList.toggle('active');
});

// Close nav when clicking a link
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    burger.classList.remove('active');
  });
});

// Close nav when clicking outside
document.addEventListener('click', (e) => {
  if (!navbar.contains(e.target)) {
    navLinks.classList.remove('open');
    burger.classList.remove('active');
  }
});

// ---- Burger animation ----
const style = document.createElement('style');
style.textContent = `
  .burger.active span:nth-child(1) { transform: rotate(45deg) translate(5px, 5px); }
  .burger.active span:nth-child(2) { opacity: 0; transform: scaleX(0); }
  .burger.active span:nth-child(3) { transform: rotate(-45deg) translate(5px, -5px); }
`;
document.head.appendChild(style);

// ---- Floating particles in hero ----
function createParticles() {
  const container = document.getElementById('particles');
  if (!container) return;

  for (let i = 0; i < 40; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    const size = Math.random() * 3 + 1;
    p.style.cssText = `
      left: ${Math.random() * 100}%;
      width: ${size}px;
      height: ${size}px;
      animation-duration: ${Math.random() * 15 + 8}s;
      animation-delay: ${Math.random() * 10}s;
      opacity: ${Math.random() * 0.6 + 0.2};
    `;
    container.appendChild(p);
  }
}
createParticles();

// ---- Scroll reveal ----
const revealEls = document.querySelectorAll(
  '.about-card, .event-card, .rule-item, .testimonial-card, .gallery-item, .video-item'
);

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      const delay = entry.target.dataset.delay || 0;
      setTimeout(() => {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }, parseInt(delay));
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

revealEls.forEach((el, i) => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  if (!el.dataset.delay) el.dataset.delay = i * 80;
  observer.observe(el);
});

// ---- Video play handler ----
window.playVideo = function(container, src) {
  const thumb = container.querySelector('.video-thumb');
  const existing = thumb.querySelector('video');
  if (existing) {
    existing.paused ? existing.play() : existing.pause();
    return;
  }
  const video = document.createElement('video');
  video.src = src;
  video.controls = true;
  video.autoplay = true;
  video.style.cssText = `
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 4px;
    z-index: 5;
  `;
  thumb.appendChild(video);
};

// ---- Newsletter form ----
window.handleSubscribe = function(e) {
  e.preventDefault();
  showToast('✅ נרשמת בהצלחה! נשלח לך עדכונים על אירועים קרובים.');
  e.target.reset();
};

// ---- Contact form ----
window.handleContact = function(e) {
  e.preventDefault();
  showToast('✉ ההודעה נשלחה! ניצור איתך קשר בקרוב.');
  e.target.reset();
};

// ---- Toast ----
function showToast(msg) {
  let toast = document.querySelector('.toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 4000);
}

// ---- Smooth active nav highlight ----
const sections = document.querySelectorAll('section[id], header[id]');
const navItems = document.querySelectorAll('.nav-links a');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.id;
      navItems.forEach(a => {
        a.style.color = '';
        if (a.getAttribute('href') === `#${id}`) {
          a.style.color = 'var(--red)';
        }
      });
    }
  });
}, { threshold: 0.4 });

sections.forEach(s => sectionObserver.observe(s));

// ---- Red glow cursor trail (desktop only) ----
if (window.matchMedia('(pointer: fine)').matches) {
  const trail = document.createElement('div');
  trail.style.cssText = `
    position: fixed;
    width: 12px;
    height: 12px;
    background: radial-gradient(circle, rgba(192,0,10,0.6), transparent);
    border-radius: 50%;
    pointer-events: none;
    z-index: 9998;
    transition: transform 0.1s;
    mix-blend-mode: screen;
  `;
  document.body.appendChild(trail);

  let mx = 0, my = 0;
  document.addEventListener('mousemove', e => {
    mx = e.clientX;
    my = e.clientY;
    trail.style.left = mx - 6 + 'px';
    trail.style.top = my - 6 + 'px';
  });
}

console.log('%c THE DUNGEON ', 'background:#c0000a;color:#fff;font-size:1.4rem;font-weight:900;padding:6px 20px;');
