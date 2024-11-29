const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl: "./images/aba-nigeria.jpg",
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl: "./images/manti-utah.jpg",
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl: "./images/payson-utah.jpg",
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl: "./images/yigo-guam.jpg",
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl: "./images/washington-dc-temple.jpeg",
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl: "./images/lima-peru.jpg",
  },
  {
    templeName: "Orlando Florida",
    location: "Florida, United States",
    dedicated: "1994, October, 9-11",
    area: 70000,
    imageUrl: "./images/orlando-florida.jpg",
  },
  {
    templeName: "Cebu City Philippines",
    location: "Cebu City, phillipines",
    dedicated: "2010, June, 13",
    area: 29556,
    imageUrl: "./images/cebu-city-phillipines.jpg",
  },
  {
    templeName: "Santo Domingo Dominican Republic",
    location: "Santo Domingo, Dominican Republic",
    dedicated: "2000, September, 17",
    area: 67000,
    imageUrl: "./images/santo-domingo-dominican-republic.jpg",
  },
  {
    templeName: "Kyiv Ukraine",
    location: "Sofiivska Borshchagivka, Ukraine",
    dedicated: "2010, August, 29",
    area: 22184,
    imageUrl: "./images/kyiv-ukraine.jpg",
  },
  {
    templeName: "Okinawa Japan",
    location: "Okinawa, Japan",
    dedicated: "2023, November, 12",
    area: 116642,
    imageUrl: "./images/okinawa-japan.jpg",
  },
  {
    templeName: "Vancouver British Columbia",
    location: "British Columbia, Canada",
    dedicated: "2010, May, 2",
    area: 28165,
    imageUrl: "./images/vancouver-british-columbia.jpg",
  },
];

const currentYear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");
const headerMenu = document.querySelector(".header__menu");
const navEl = document.querySelector(".header__nav");

const today = new Date();
const templesLarge = window.matchMedia("(min-width: 425px)");
currentYear.textContent += `© ${today.getFullYear()}`;
lastModified.textContent += document.lastModified;
lastModified.style.color = "#fff";
lastModified.style.fontWeight = "normal";

function hideHambBtn(event) {
  if (event.matches) {
    headerMenu.classList.add("js-hide-content");
  } else {
    headerMenu.classList.remove("js-hide-content");
  }
}

function createPicture(templeName, location, dedicated, area, imageUrl) {
  const figure = document.createElement("figure");
  figure.classList.add("figure");

  const h2 = document.createElement("h2");
  h2.textContent = templeName;
  h2.classList.add("card__title");
  figure.appendChild(h2);

  const locationP = document.createElement("p");
  locationP.textContent = location;

  const locationSpan = document.createElement("span");
  locationSpan.textContent = "Location: ";
  locationSpan.classList.add("bold__words");

  locationP.prepend(locationSpan);
  figure.appendChild(locationP);

  const dedicatedP = document.createElement("p");
  dedicatedP.textContent = dedicated;

  const dedicatedSpan = document.createElement("span");
  dedicatedSpan.textContent = "Dedicated: ";
  dedicatedSpan.classList.add("bold__words");

  dedicatedP.prepend(dedicatedSpan);
  figure.appendChild(dedicatedP);

  const areaP = document.createElement("p");
  areaP.textContent = `${area} sq ft`;

  const areaSpan = document.createElement("span");
  areaSpan.textContent = "Size: ";
  areaSpan.classList.add("bold__words");

  areaP.prepend(areaSpan);
  figure.appendChild(areaP);

  const imgUrl = document.createElement("img");
  imgUrl.src = imageUrl;
  imgUrl.alt = `Image of ${templeName} temple`;
  imgUrl.setAttribute("loading", "lazy");
  figure.appendChild(imgUrl);

  return figure;
}

function renderCards() {
  const mainEl = document.querySelector("main");

  const pictureHtml = temples.map((temple) =>
    createPicture(
      temple.templeName,
      temple.location,
      temple.dedicated,
      temple.area,
      temple.imageUrl
    )
  );

  pictureHtml.forEach((picture) => mainEl.appendChild(picture));
}

function showNavBarOnBiggerScreen(event) {
  if (event.matches) {
    navEl.classList.add("js-show-header-nav");
  } else {
    navEl.classList.remove("js-show-header-nav");
  }
}

function handleClickOnMenu() {
  headerMenu.classList.toggle("show");
  navEl.classList.toggle("js-show-header-nav");
}

headerMenu.addEventListener("click", handleClickOnMenu);
templesLarge.addEventListener("change", showNavBarOnBiggerScreen);
templesLarge.addEventListener("change", hideHambBtn);

showNavBarOnBiggerScreen(templesLarge);
hideHambBtn(templesLarge);
renderCards();
