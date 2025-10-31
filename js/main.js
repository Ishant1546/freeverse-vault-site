// load includes (header/footer)
async function loadInclude(id, path) {
  const el = document.getElementById(id + '-placeholder');
  if (!el) return;
  try {
    const res = await fetch('/includes/' + path);
    const txt = await res.text();
    el.innerHTML = txt;
    // after header loads, attach theme toggle handler if present
    const themeBtn = document.getElementById('theme-toggle');
    if (themeBtn) themeBtn.addEventListener('click', toggleTheme);
  } catch (e) {
    console.error('Include load failed', id, e);
  }
}
loadInclude('header', 'header.html');
loadInclude('footer', 'footer.html');

// theme toggle with localStorage
function setTheme(t) {
  if (t === 'light') document.body.classList.add('light');
  else document.body.classList.remove('light');
  localStorage.setItem('fv_theme', t);
}
function toggleTheme() {
  const current = localStorage.getItem('fv_theme') || 'dark';
  setTheme(current === 'dark' ? 'light' : 'dark');
}
// init theme
const saved = localStorage.getItem('fv_theme') || 'dark';
setTheme(saved);

// fade-in already applied via page-enter; add fade-out on internal nav
document.addEventListener('DOMContentLoaded', () => {
  // ensure page-enter is present (for direct loads)
  const page = document.getElementById('page');
  if (page) page.classList.add('page-enter');
});
