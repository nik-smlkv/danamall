document.addEventListener("DOMContentLoaded", () => {
	const burgerBtn = document.getElementById("burgerBtn");
	const headerMenu = document.getElementById("headerMenu");

	burgerBtn.addEventListener("click", () => {
		burgerBtn.classList.toggle("open");
		headerMenu.classList.toggle("open");
	});

	document.addEventListener("click", (e) => {
		if (!headerMenu.contains(e.target) && !burgerBtn.contains(e.target)) {
			headerMenu.classList.remove("open");
			burgerBtn.classList.remove("open");
		}
	});
});

document.addEventListener("DOMContentLoaded", () => {
	const dropdown = document.querySelector(".header__hours.hours__dropdown");
	const toggle = dropdown.querySelector(".hours__dropdown__toggle");
	const menu = dropdown.querySelector(".hours__dropdown__menu");

	toggle.addEventListener("click", () => {
		const isOpen = dropdown.classList.contains("open");
		dropdown.classList.toggle("open");
		toggle.setAttribute("aria-expanded", !isOpen);
		menu.hidden = isOpen;
	});

	document.addEventListener("click", (e) => {
		if (!dropdown.contains(e.target)) {
			dropdown.classList.remove("open");
			toggle.setAttribute("aria-expanded", false);
			menu.hidden = true;
		}
	});
});
