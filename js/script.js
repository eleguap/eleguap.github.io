window.addEventListener('DOMContentLoaded', () => {
  const initialDelay = 0.3;
  const stagger = 0.2;

  const items = document.querySelectorAll('.fade-item');
  items.forEach((el, i) => {
    el.style.animationDelay = `${initialDelay + i * stagger}s`;
    el.classList.add('fade-in');
  });
});
