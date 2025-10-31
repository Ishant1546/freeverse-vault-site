// Theme toggle buttons
document.getElementById('light-toggle').addEventListener('click', () => {
  document.getElementById('bg-video').style.filter = 'brightness(1)';
  document.body.style.backgroundColor = '#fff';
  document.body.style.color = '#000';
});

document.getElementById('dark-toggle').addEventListener('click', () => {
  document.getElementById('bg-video').style.filter = 'brightness(0.6)';
  document.body.style.backgroundColor = '#000';
  document.body.style.color = '#fff';
});
