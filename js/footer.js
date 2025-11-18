// === Бесконечная бегущая строка брендов ===
(function () {
  const track = document.getElementById('brandsTrack');
  if (!track) return;

  // Дублируем содержимое для бесшовности
  track.innerHTML = track.innerHTML + track.innerHTML;

  let x = 0;
  let speed = 0.6;
  let paused = false;

  function loop() {
    if (!paused) {
      x -= speed;
      const half = track.scrollWidth / 2;
      if (-x >= half) x += half;
      track.style.transform = `translateX(${x}px)`;
    }
    requestAnimationFrame(loop);
  }
  requestAnimationFrame(loop);

  const container = track.parentElement;
  container.addEventListener('mouseenter', () => (paused = true));
  container.addEventListener('mouseleave', () => (paused = false));
  document.addEventListener('visibilitychange', () => (paused = document.hidden));

  const mq = window.matchMedia('(max-width: 768px)');
  const tune = () => (speed = mq.matches ? 0.5 : 0.6);
  mq.addEventListener ? mq.addEventListener('change', tune) : mq.addListener(tune);
  tune();
})();

 
(function () {
  const btn = document.getElementById('legalToggle');
  const panel = document.getElementById('legalPanel');
  if (!btn || !panel) return;

  btn.addEventListener('click', () => {
    const isOpen = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!isOpen));
    panel.classList.toggle('open');
  });
})();
