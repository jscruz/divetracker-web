// DiveMesh — scroll reveal
document.addEventListener('DOMContentLoaded', () => {
  // Mark body as JS-ready — this enables the fade-in animations.
  // Without this, all content is fully visible even if JS fails.
  document.body.classList.add('js-ready');

  const sections = document.querySelectorAll('.fade-in');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });

  sections.forEach(s => observer.observe(s));

  // Smooth active nav highlight
  const navLinks = document.querySelectorAll('nav a');
  const articleSections = document.querySelectorAll('[id]');

  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(l => l.style.color = '');
        const active = document.querySelector(`nav a[href="#${entry.target.id}"]`);
        if (active) active.style.color = 'var(--biolum)';
      }
    });
  }, { threshold: 0.4 });

  articleSections.forEach(s => navObserver.observe(s));
});
