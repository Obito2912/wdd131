// const priceList = [
//   {
//     'full set acrylic, full set polly gel, 2-4 week fill, 5+ week fill, acrylic toes, 2-4 week acrylic toe fill, 5-6 week acrylic toe fill, gel polish toes only, gel polish manicure, luxury pedicure'
//     headeradd - on: 'nail repair, medium art, simple art, detailed art, soak off/gel removal, free style art, add long-XL',
//     cost: 4,
//     eta: '',
//   }
// ]

const menuBtn = document.querySelector(".header__menu");
const navBar = document.querySelector(".header__nav");

menuBtn.addEventListener("click", () => {
  navBar.classList.toggle("open-popup");
});
