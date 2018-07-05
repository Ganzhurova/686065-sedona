var link = document.querySelector(".button-search");
			
var popup = document.querySelector(".modal-search");

var form = popup.querySelector("form");
var arrivaldate = popup.querySelector("[name=arrivaldate]");
var departuredate = popup.querySelector("[name=departuredate]");
var adult = popup.querySelector("[name=adult]");
var children = popup.querySelector("[name=children]");

var isStorageSupport = true;
var storageAdult = "";
var storageChildren = "";

try {
	storageAdult = localStorage.getItem("adult");
	storageChildren = localStorage.getItem("children");
	} catch (err) {
	isStorageSupport = false;
}

link.addEventListener("click", function (evt) {
	evt.preventDefault();

	popup.classList.toggle("modal-show");

			if (storageAdult && storageChildren) {
				adult.value = storageAdult;
				children.value = storageChildren;
			}

	arrivaldate.focus();
	popup.classList.remove("modal-error");

	if (!popup.classList.contains("modal-show")) {
			popup.classList.add("modal-close");
	} else {
			popup.classList.remove("modal-close");
	}
});

form.addEventListener("submit", function (evt) {
	if (!arrivaldate.value || !departuredate.value || !adult.value || !children.value) {
		evt.preventDefault();
		popup.classList.remove("modal-error");
		popup.offsetWidth = popup.offsetWidth;
		popup.classList.add("modal-error");
	} else {
		if (isStorageSupport) {
			localStorage.setItem("adult", adult.value);
			localStorage.setItem("children", children.value);
		}
	}
});

window.addEventListener("keydown", function (evt) {
	if (evt.keyCode === 27) {
		evt.preventDefault();
		if (popup.classList.contains("modal-show")) {
			popup.classList.remove("modal-show");
			popup.classList.remove("modal-error");
		}
	}
});