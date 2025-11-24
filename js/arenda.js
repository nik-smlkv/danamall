document.querySelectorAll(".calculator__tab").forEach(tab => {
	tab.addEventListener("click", () => {
		document.querySelectorAll(".calculator__tab").forEach(t => t.classList.remove("active"));
		tab.classList.add("active");

		const target = tab.dataset.tab;
		document.querySelectorAll(".calculator__table").forEach(content => {
			content.classList.add("hidden");
		});
		document.getElementById(target).classList.remove("hidden");
	});
});
const select = document.getElementById("date-select");
const trigger = select.querySelector(".custom-select__trigger");
const options = select.querySelectorAll(".custom-select__options li");

trigger.addEventListener("click", () => {
	select.classList.toggle("open");
});

options.forEach(option => {
	option.addEventListener("click", () => {
		trigger.textContent = option.textContent;
		options.forEach(o => o.classList.remove("selected"));
		option.classList.add("selected");
		select.classList.remove("open");
	});
});

document.addEventListener("click", e => {
	if (!select.contains(e.target)) {
		select.classList.remove("open");
	}
});

const inputs = document.querySelectorAll(".form-field input");

inputs.forEach(input => {
	input.addEventListener("input", () => {
		input.classList.toggle("filled", input.value.trim() !== "");
	});
});

const form = document.getElementById("rent-form");
const inputsCheck = form.querySelectorAll("input[required]");
const submitBtn = form.querySelector(".calculator__submit");

function checkInputsFilled() {
  const allFilled = Array.from(inputsCheck).every(input => input.value.trim() !== "");
  submitBtn.disabled = !allFilled;
}

inputsCheck.forEach(input => {
  input.addEventListener("input", checkInputsFilled);
});
