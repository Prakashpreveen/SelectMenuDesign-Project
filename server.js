let selectField = document.getElementById("selectField");
let selectText = document.getElementById("selectText");
let options = document.querySelectorAll(".options");
let list = document.getElementById("list");
let arrow = document.getElementById("arrowIcon");

selectField.onclick = function () {
  list.classList.toggle("hide");
  arrow.classList.toggle("rotate");
};

for (option of options) {
  option.onclick = function () {
    selectText.innerHTML = this.textContent;
    list.classList.toggle("hide");
    arrow.classList.toggle("rotate");
  };
}
