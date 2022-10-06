// toggle nav menu
const burgerMenu = document.querySelector(".burger-menu");
const menu = document.querySelector(".menu");

burgerMenu.addEventListener("click", function () {
  this.classList.toggle("close");
  menu.classList.toggle("visible");
});

menu.addEventListener("click", function () {
  this.classList.toggle("close");
  menu.classList.toggle("visible");
});
