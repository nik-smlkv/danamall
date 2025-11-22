document.addEventListener("DOMContentLoaded", () => {
  const burgerBtn = document.getElementById("burgerBtn");
  const headerMenu = document.getElementById("headerMenu");
  const header = document.querySelector(".header");

  if (!burgerBtn || !headerMenu || !header) return;

  burgerBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    const willOpen = !headerMenu.classList.contains("open");

    burgerBtn.classList.toggle("open", willOpen);
    headerMenu.classList.toggle("open", willOpen);
    header.classList.toggle("menu-open", willOpen);
  });

  // клик вне меню — закрываем
  document.addEventListener("click", (e) => {
    if (!headerMenu.contains(e.target) && !burgerBtn.contains(e.target)) {
      headerMenu.classList.remove("open");
      burgerBtn.classList.remove("open");
      header.classList.remove("menu-open");
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const dropdown = document.querySelector(".header__hours.hours__dropdown");
  if (!dropdown) return;

  const toggle = dropdown.querySelector(".hours__dropdown__toggle");
  const menu = dropdown.querySelector(".hours__dropdown__menu");

  // начальное состояние
  menu.style.maxHeight = "0px";
  toggle.setAttribute("aria-expanded", "false");

  toggle.addEventListener("click", (e) => {
    e.stopPropagation();
    const isOpen = dropdown.classList.contains("open");

    if (isOpen) {
      dropdown.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
      menu.style.maxHeight = "0px";
    } else {
      dropdown.classList.add("open");
      toggle.setAttribute("aria-expanded", "true");
      // плавно раскрываем до фактической высоты контента
      menu.style.maxHeight = menu.scrollHeight + 20 + "px";
    }
  });

  document.addEventListener("click", (e) => {
    if (!dropdown.contains(e.target)) {
      dropdown.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
      menu.style.maxHeight = "0px";
    }
  });
});
