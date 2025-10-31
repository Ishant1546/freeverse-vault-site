async function loadHTML(id, file) {
  const container = document.getElementById(id);
  container.classList.add('fade-out');
  
  const res = await fetch(file);
  const html = await res.text();
  
  setTimeout(() => {
    container.innerHTML = html;
    container.classList.remove('fade-out');
    container.classList.add('fade-in');
  }, 300);
}

window.addEventListener("DOMContentLoaded", () => {
  loadHTML("header", "assets/partials/header.html");
  loadHTML("content", "assets/partials/services.html");
  loadHTML("footer", "assets/partials/footer.html");
});
