window.addEventListener('load', () => {
  document.querySelectorAll('main button').forEach((btn, i) => {
    setTimeout(() => btn.classList.add('visible'), i * 150); // stagger by 150ms
  });
});
