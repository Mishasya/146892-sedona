var button = document.querySelector(".search-btn");
var popup = document.querySelector(".modal");

button.addEventListener("click", function(evt) {
	evt.preventDefault();
	popup.classList.toggle("modal-show");
});
