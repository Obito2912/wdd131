const menuBtn = document.querySelector(".header__menu");
const navBar = document.querySelector(".header__nav");

menuBtn.addEventListener("click", () => {
  navBar.classList.toggle("open-popup");
  menuBtn.classList.toggle("header__menu_open");
});
