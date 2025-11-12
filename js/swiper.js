const newsSwiper = new Swiper("#newsSwiper", {
  slidesPerView: "auto",
  spaceBetween: 20,
  freeMode: false,
  navigation: {
    nextEl: "#newsSwiper .news-next",
    prevEl: "#newsSwiper .news-prev",
  },
  breakpoints: {
    0: { spaceBetween: 14 },
    768: { spaceBetween: 18 },
    1200: { spaceBetween: 20 },
  },
});
const slides = document.querySelectorAll("#newsSwiper .news-card");
function expandSlide(slide) {
  slides.forEach((s) => s.classList.remove("is-expanded"));
  slide.classList.add("is-expanded");
  // Скроллим активную в центр
  const idx = [...slides].indexOf(slide);
  if (idx >= 0) newsSwiper.slideTo(idx);
}
slides.forEach((slide) => {
  slide.addEventListener("click", (e) => {
    // не мешаем переходам по ссылкам внутри
    if (e.target.closest("a")) e.preventDefault();
    // если уже раскрыта — свернём обратно (сделаем первой видимой)
    if (slide.classList.contains("is-expanded")) {
      slide.classList.remove("is-expanded");
    } else {
      expandSlide(slide);
    }
  });
});

const first = document.querySelector("#newsSwiper .news-card");
if (first && !first.classList.contains("is-expanded")) {
  first.classList.add("is-expanded");
}

(function () {
  function initHero() {
 
    const root = document.querySelector("#hero");
    if (!root || !window.Swiper) return;

    // инициализация
    const heroSwiper = new Swiper("#hero", {
      // базовое
      loop: true,
      speed: 700,
      effect: "fade",
      fadeEffect: { crossFade: true },
      autoplay: { delay: 7000, disableOnInteraction: false },
      allowTouchMove: true,

      // стрелки внутри секции
      navigation: {
        nextEl: "#hero .swiper-button-next",
        prevEl: "#hero .swiper-button-prev",
      },
    });

    // маленькая круглая стрелка на промо-карточке — листает назад
    root.querySelectorAll(".promo .swiper-prev").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        heroSwiper.slidePrev();
      });
    });
  }

  // запуск после загрузки DOM и скриптов
  if (document.readyState !== "loading") initHero();
  else document.addEventListener("DOMContentLoaded", initHero);
})();
