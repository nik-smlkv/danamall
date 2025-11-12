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
