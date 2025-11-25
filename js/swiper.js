(function () {
	function initNews() {
		const newsEl = document.querySelector("#newsSwiper");
		if (!newsEl || typeof Swiper === "undefined") return;

		const newsSwiper = new Swiper("#newsSwiper", {
			slidesPerView: "auto",
			spaceBetween: 30,
			loop: false,
			speed: 600,
			freeMode: true,
			slidesPerGroup: 1,
			navigation: {
				nextEl: ".news__body .news-next",
				prevEl: ".news__body .news-prev",
			},
			breakpoints: {
				0: { spaceBetween: 0, slidesPerView: 1, loop: true },
				650: { spaceBetween: 20, slidesPerView: "auto", loop: false },
				1200: { spaceBetween: 20 },
			},
		});

		const getSlides = () => Array.from(newsSwiper.slides);

		// вешаем is-expanded по обычному индексу
		function setExpandedByIndex(index) {
			if (window.innerWidth <= 650) return;
			getSlides().forEach((slide, i) => {
				slide.classList.toggle("is-expanded", i === index);
			});
		}

		// стартовое состояние – первая карточка
		setExpandedByIndex(newsSwiper.activeIndex);

		// клик по карточке
		const wrapper = newsEl.querySelector(".swiper-wrapper");
		if (wrapper) {
			wrapper.addEventListener(
				"click",
				(e) => {
					const card = e.target.closest(".news-card");
					if (!card) return;
					if (!newsSwiper.allowClick) return;

					const link = e.target.closest("a");
					if (link) e.preventDefault();

					// находим индекс этой карточки в массиве слайдов
					const slides = getSlides();
					const idx = slides.indexOf(card);
					if (idx === -1) return;

					// сначала расширяем
					setExpandedByIndex(idx);
					// потом скроллим к ней
					newsSwiper.slideTo(idx, 600);
				},
				{ passive: true }
			);
		}

		// при свайпе/стрелках – обновляем is-expanded в начале анимации
		newsSwiper.on("slideChange", () => {
			setExpandedByIndex(newsSwiper.activeIndex);
		});
	}

	if (document.readyState !== "loading") initNews();
	else document.addEventListener("DOMContentLoaded", initNews);
})();

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

const promoSwiper = new Swiper(".promo-swiper", {
	slidesPerView: 1,
	loop: true,
	spaceBetween: 40,
	freeMode: true,
	speed: 600,
	navigation: {
		nextEl: ".promo .promo__nav .swiper-button-next",
		prevEl: ".promo .promo__nav .swiper-button-prev",
	},
	breakpoints: {
		0: {
			spaceBetween: 10,
			centeredSlides: false,
			slidesPerView: "auto",
			watchOverflow: true,
		},
		560: {
			spaceBetween: 40, // от 560px и выше
		},
	},
});

new Swiper(".tariffs__slider", {
	slidesPerView: 1,
	loop: true,
	spaceBetween: 24,
	freeMode: true,
	navigation: {
		nextEl: ".tariffs .tariffs-buttons__block .swiper-button-next",
		prevEl: ".tariffs .tariffs-buttons__block .swiper-button-prev",
	},
	breakpoints: {
		640: { slidesPerView: 2 },
		1024: { slidesPerView: 3 },
	},
});

new Swiper(".comfort__slider", {
	slidesPerView: 1,
	spaceBetween: 24,
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	breakpoints: {
		640: { slidesPerView: 2 },
		1024: { slidesPerView: 3 },
	},
});

new Swiper(".about-us__swiper", {
	slidesPerView: "auto",
	spaceBetween: 20,
	freeMode: true,
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
});
new Swiper(".current-directory-swiper", {
	loop: true,
	freeMode: true,
	spaceBetween: 20,
	navigation: {
		nextEl: ".now-showing .swiper-button-next",
		prevEl: ".now-showing .swiper-button-prev",
	},
	breakpoints: {
		0: {
			slidesPerView: 1.2, // для 360px — один слайд + немного следующего
		},
		480: {
			slidesPerView: 2, // чуть шире — два слайда
		},
		768: {
			slidesPerView: 2.5, // планшет
		},
		1024: {
			slidesPerView: 3, // малый десктоп
		},
		1280: {
			slidesPerView: 4, // стандартный десктоп
		},
		1440: {
			slidesPerView: 4.5, // чуть больше
		},
		1920: {
			slidesPerView: 5, // широкие экраны
		},
	},
});


new Swiper('.news-swiper', {
	slidesPerView: 1.2,
	spaceBetween: 16,
	loop: true,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},
	breakpoints: {
		640: {
			slidesPerView: 2
		},
		900: {
			slidesPerView: 3
		},
		1200: {
			slidesPerView: 2
		}
	}
});
new Swiper('.directory-news-swiper', {
	slidesPerView: 1.2,
	spaceBetween: 16,
	loop: true,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},
	breakpoints: {
		640: {
			slidesPerView: 2
		},
		900: {
			slidesPerView: 3
		},
		1200: {
			slidesPerView: "auto"
		}
	}
});

new Swiper('.current-directory-gallery-swiper', {
	slidesPerView: 4,
	spaceBetween: 40,
	loop: true,
});

const gallery = document.querySelector('.directory__gallery');
const cursor = document.querySelector('.custom-cursor');

function handleCursor(e) {
	cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
	cursor.style.display = 'block';
}

function hideCursor() {
	cursor.style.display = 'none';
}

function updateCursorBehavior() {
	if (window.innerWidth >= 768) {
		gallery.addEventListener('mousemove', handleCursor);
		gallery.addEventListener('mouseleave', hideCursor);
	} else {
		gallery.removeEventListener('mousemove', handleCursor);
		gallery.removeEventListener('mouseleave', hideCursor);
		cursor.style.display = 'none';
	}
}

// Инициализация
updateCursorBehavior();

// Обновление при изменении размера окна
window.addEventListener('resize', updateCursorBehavior);
