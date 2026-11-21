(() => {
  const toggle = document.querySelector('.menu-button');
  const nav = document.getElementById('primary-navigation');
  if (toggle && nav) {
    const close = () => { nav.classList.remove('is-open'); toggle.setAttribute('aria-expanded', 'false'); toggle.setAttribute('aria-label', 'Open navigation'); };
    toggle.addEventListener('click', () => {
      const open = !nav.classList.contains('is-open');
      nav.classList.toggle('is-open', open);
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
    });
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', close));
    document.addEventListener('keydown', event => { if (event.key === 'Escape') close(); });
    document.addEventListener('click', event => { if (!nav.contains(event.target) && !toggle.contains(event.target)) close(); });
  }
  document.querySelectorAll('#year').forEach(el => {el.textContent = String(new Date().getFullYear());});
})();
