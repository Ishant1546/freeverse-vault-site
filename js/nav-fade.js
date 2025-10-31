// intercept same-origin link clicks to fade out before navigation
document.addEventListener('click', (e) => {
  const a = e.target.closest('a');
  if (!a) return;
  const href = a.getAttribute('href');
  if (!href) return;
  // only intercept internal html links (no external, no #)
  if (href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('#') ) return;
  // allow links with target=_blank
  if (a.target === '_blank') return;
  e.preventDefault();
  const page = document.getElementById('page');
  if (page) {
    page.classList.remove('page-enter');
    page.classList.add('page-exit');
    setTimeout(() => {
      window.location.href = href;
    }, 380);
  } else {
    window.location.href = href;
  }
});
