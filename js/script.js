var button = document.querySelector(".search-btn");
var popup = document.querySelector(".modal");
var form = popup.querySelector(".form-search");
var dateIn = popup.querySelector("[name=date-in]");
var dateOut = popup.querySelector("[name=date-out]");
var adult = popup.querySelector("[name=adult-count]");
var child = popup.querySelector("[name=child-count]");

button.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.toggle("modal-show");
});

form.addEventListener("submit", function (evt) {
  if (!dateIn.value || !dateOut.value || !adult.value || !child.value) {
    evt.preventDefault();
    popup.classList.add("modal-error");
  }
});
