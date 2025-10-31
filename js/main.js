// Theme toggle
const toggle = document.getElementById('theme-toggle');
toggle?.addEventListener('click', () => {
  document.body.classList.toggle('light');
  toggle.textContent = document.body.classList.contains('light') ? '☀️' : '🌙';
});

// Load header and footer dynamically
async function loadComponent(id, file) {
  const el = document.getElementById(id);
  if (el) {
    const res = await fetch(`includes/${file}`);
    el.innerHTML = await res.text();
  }
}

loadComponent('header', 'header.html');
loadComponent('footer', 'footer.html');

document.getElementById('light-toggle').addEventListener('click', () => {
  document.body.style.filter = 'brightness(1.2)';
});

document.getElementById('dark-toggle').addEventListener('click', () => {
  document.body.style.filter = 'brightness(0.7)';
});
