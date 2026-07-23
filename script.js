/* Prajas Labs — Website Script */

/* ── Navbar scroll effect ── */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
});

/* ── Mobile hamburger ── */
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', open);
    document.body.style.overflow = open ? 'hidden' : '';
});

navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        document.body.style.overflow = '';
    });
});

/* ── Scroll-triggered fade-in ── */
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add('visible'), i * 80);
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.12 });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

/* ── Contact form ── */
const form     = document.getElementById('contactForm');
const formNote = document.getElementById('formNote');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name    = form.querySelector('input[type="text"]').value.trim();
    const email   = form.querySelector('input[type="email"]').value.trim();
    const subject = form.querySelector('select').value || 'General Enquiry';
    const message = form.querySelector('textarea').value.trim();

    const body = `Name: ${name}\nEmail: ${email}\nInterest: ${subject}\n\nMessage:\n${message}`;
    const mailto = `mailto:contact@prajaslabs.com?subject=Enquiry: ${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;

    formNote.style.color = '#22C55E';
    formNote.textContent = 'Your email client will open. Thank you for reaching out!';
});

/* ── Count-up animation ── */
function countUp(el, target, duration) {
    const start = performance.now();
    const step = (now) => {
        const p = Math.min((now - start) / duration, 1);
        const ease = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.floor(ease * target);
        if (p < 1) requestAnimationFrame(step);
        else el.textContent = target;
    };
    requestAnimationFrame(step);
}
const countObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const el = entry.target;
            countUp(el, parseInt(el.dataset.count, 10), 1400);
            countObserver.unobserve(el);
        }
    });
}, { threshold: 0.6 });
document.querySelectorAll('[data-count]').forEach(el => countObserver.observe(el));

/* ── Smooth active nav link highlight on scroll ── */
const sections = document.querySelectorAll('section[id]');
const links    = document.querySelectorAll('.nav-links a[href^="#"]');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(sec => {
        if (window.scrollY >= sec.offsetTop - 120) current = sec.id;
    });
    links.forEach(a => {
        a.classList.toggle('active-link', a.getAttribute('href') === `#${current}`);
    });
}, { passive: true });
