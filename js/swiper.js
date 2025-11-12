

const newsSwiper = new Swiper("#newsSwiper", {
	slidesPerView: "auto",          // <— вместо 4
	spaceBetween: 20,
	loop: true,
	loopedSlidesLimit: false,
 
	speed: 600,
	freeMode: false,                // обязательно off
 
	roundLengths: true,             // убирает сабпиксели
	centeredSlides: false,
	centeredSlidesBounds: true,
	watchSlidesProgress: true,
	watchSlidesVisibility: true,
	observer: true,
	observeParents: true,
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

// удобный доступ к DOM-коллекции слайдов именно из Swiper
const getSlides = () => Array.from(newsSwiper.slides);

// ставим is-expanded на нужный индекс
function setExpandedByIndex(i) {
	getSlides().forEach(s => s.classList.remove("is-expanded"));
	const slideEl = newsSwiper.slides[i];
	if (slideEl) slideEl.classList.add("is-expanded");
}

setExpandedByIndex(newsSwiper.activeIndex);

// 2) по клику на карточку — развернуть и прокрутить к ней
// делегируем на wrapper, чтобы не теряться при динамике DOM
document
	.querySelector("#newsSwiper .swiper-wrapper")
	.addEventListener("click", (e) => {
		const card = e.target.closest(".news-card");
		if (!card) return;

		// если был свайп — Swiper ставит allowClick=false, не мешаем жестам
		if (!newsSwiper.allowClick) return;

		// не уходим по ссылке (карточка — превью)
		const link = e.target.closest("a");
		if (link) e.preventDefault();

		const idx = getSlides().indexOf(card);
		if (idx === -1) return;

		// развернём выбранную и проскроллим к ней
		setExpandedByIndex(idx);
		newsSwiper.slideTo(idx);
	}, { passive: true });

// 3) при листании стрелками/свайпом — переносим is-expanded на активный
newsSwiper.on("slideChangeTransitionEnd", () => {
	setExpandedByIndex(newsSwiper.activeIndex);
});

// на всякий случай синхронизируем и при мгновенных сменах
newsSwiper.on("slideChange", () => {
	setExpandedByIndex(newsSwiper.activeIndex);
});

// если есть ресайз/брейкпоинт — держим активную в фокусе
newsSwiper.on("breakpoint", () => {
	newsSwiper.slideTo(newsSwiper.activeIndex, 0);
});
window.addEventListener("resize", () => {
	newsSwiper.slideTo(newsSwiper.activeIndex, 0);
});


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
