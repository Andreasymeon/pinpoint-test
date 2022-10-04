// // toggle nav menu
// const burgerMenu = document.querySelector(".burger-menu");
// const menuList = document.querySelectorAll(".nav-link");

// burgerMenu.addEventListener("click", function () {
//   this.classList.toggle("close");

//   menuList.forEach((e) => {
//     e.classList.toggle("show");
//     console.log("show menu");
//   });
//   console.log("burger");
// });
const burgerMenu = document.querySelector(".burger-menu");
const menu = document.querySelector(".menu");

burgerMenu.addEventListener("click", function () {
  this.classList.toggle("close");
  menu.classList.toggle("show");
});
