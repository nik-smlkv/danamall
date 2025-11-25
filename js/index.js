// Анимация счётчиков при попадании в зону видимости
(function () {
	const els = document.querySelectorAll(".stats-card__value[data-count]");
	if (!els.length) return;

	const animate = (el) => {
		const target = +el.dataset.count;
		const dur = 900; // ms
		const start = performance.now();
		const from = 0;

		function tick(t) {
			const p = Math.min(1, (t - start) / dur);
			const eased = 1 - Math.pow(1 - p, 3);
			const val = Math.round(from + (target - from) * eased);
			el.textContent = val.toString();
			if (p < 1) requestAnimationFrame(tick);
		}
		requestAnimationFrame(tick);
	};

	const io = new IntersectionObserver(
		(entries) => {
			entries.forEach((e) => {
				if (e.isIntersecting) {
					animate(e.target);
					io.unobserve(e.target);
				}
			});
		},
		{ threshold: 0.4 }
	);

	els.forEach((el) => io.observe(el));
})();

(function () {
	const tabs = document.querySelectorAll(".route-tab");

	const panes = {
		car: document.getElementById("route-pane-car"),
		metro: document.getElementById("route-pane-metro"),
		walk: document.getElementById("route-pane-walk"),
	};

	const images = {
		car: document.getElementById("route-img-car"),
		metro: document.getElementById("route-img-metro"),
		walk: document.getElementById("route-img-walk"),
	};

	tabs.forEach((btn) => {
		btn.addEventListener("click", () => {
			// активная кнопка
			tabs.forEach((b) => b.classList.remove("is-active"));
			btn.classList.add("is-active");

			// активный контент
			Object.values(panes).forEach((p) => p.classList.remove("is-active"));
			Object.values(images).forEach((img) => img.classList.remove("is-active"));

			const key = btn.dataset.tab;
			panes[key]?.classList.add("is-active");
			images[key]?.classList.add("is-active");
		});
	});
})();


function scrollToFloor(id) {
	document.getElementById(id).scrollIntoView({ behavior: "smooth" });

	document
		.querySelectorAll(".floor-nav button")
		.forEach((btn) => btn.classList.remove("active"));
	event.target.classList.add("active");
}

document.addEventListener("DOMContentLoaded", function () {
	const tabs = document.querySelectorAll(".news__tabs .tab");
	console.log(tabs)
	tabs.forEach((tab) => {
		tab.addEventListener("click", () => {
			tabs.forEach((t) => t.classList.remove("is-active"));
			tab.classList.add("is-active");
		});
	});
});



ymaps.ready(function () {
	const map = new ymaps.Map("yandex-map", {
		center: [53.9315, 27.6487], // координаты Dana Mall
		zoom: 16,
		controls: ["zoomControl", "fullscreenControl"],
		options: {
			background: "black",
		},
	});

	const placemark = new ymaps.Placemark(
		[53.9315, 27.6487],
		{
			balloonContent: "<strong>DANA MALL</strong><br>ул. П. Мстиславаца, 11",
			hintContent: "DANA MALL",
		},
		{
			preset: "islands#redShoppingIcon",
		}
	);

	map.geoObjects.add(placemark);
});