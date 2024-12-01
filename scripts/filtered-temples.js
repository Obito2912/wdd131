const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl: "./images/aba-nigeria.webp",
  },
  {
    templeName: "Edmonton Alberta",
    location: "Edmonton, Alberta, Canada",
    dedicated: "1999, December, 11-12",
    area: 10700,
    imageUrl: "./images/edmonton-alberta.webp",
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl: "./images/payson-utah.webp",
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl: "./images/yigo-guam.webp",
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl: "./images/washington-dc-temple.webp",
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl: "./images/lima-peru.webp",
  },
  {
    templeName: "Orlando Florida",
    location: "Florida, United States",
    dedicated: "1994, October, 9-11",
    area: 70000,
    imageUrl: "./images/orlando-florida.webp",
  },
  {
    templeName: "Cebu City Philippines",
    location: "Cebu City, phillipines",
    dedicated: "2010, June, 13",
    area: 29556,
    imageUrl: "./images/cebu-city-phillipines.webp",
  },
  {
    templeName: "Santo Domingo Dominican Republic",
    location: "Santo Domingo, Dominican Republic",
    dedicated: "2000, September, 17",
    area: 67000,
    imageUrl: "./images/santo-domingo-dominican-republic.webp",
  },
  {
    templeName: "Kyiv Ukraine",
    location: "Sofiivska Borshchagivka, Ukraine",
    dedicated: "2010, August, 29",
    area: 22184,
    imageUrl: "./images/kyiv-ukraine.webp",
  },
  {
    templeName: "Okinawa Japan",
    location: "Okinawa, Japan",
    dedicated: "2023, November, 12",
    area: 116642,
    imageUrl: "./images/okinawa-japan.webp",
  },
  {
    templeName: "Vancouver British Columbia",
    location: "British Columbia, Canada",
    dedicated: "2010, May, 2",
    area: 28165,
    imageUrl: "./images/vancouver-british-columbia.webp",
  },
];

const currentYear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");
const headerMenu = document.querySelector(".header__menu");
const navEl = document.querySelector(".header__nav");

const today = new Date();
const templesLarge = window.matchMedia("(min-width: 425px)");
const container = document.querySelector(".div__main");
currentYear.textContent += `© ${today.getFullYear()}`;
lastModified.textContent += document.lastModified;
lastModified.style.color = "#fff";
lastModified.style.fontWeight = "normal";

function createTemplateCard(temples) {
  container.innerHTML = "";
  temples.forEach((temple) => {
    let card = document.createElement("section");
    card.classList.add("section");
    let name = document.createElement("h3");
    name.classList.add("card__title");
    let location = document.createElement("p");
    let dedication = document.createElement("p");
    let area = document.createElement("p");
    let img = document.createElement("img");

    name.textContent = temple.templeName;
    location.innerHTML = `<span class='label'>Location: </span> ${temple.location}`;
    dedication.innerHTML = `<span class='label'>Dedicated: </span> ${temple.dedicated}`;
    area.innerHTML = `<span class='label'>Size: </span> ${temple.area} sq ft`;
    img.setAttribute("src", temple.imageUrl);
    img.setAttribute("alt", `${temple.templeName} Temple`);
    img.setAttribute("loading", "lazy");
    img.setAttribute("width", 400);
    img.setAttribute("height", 300);

    card.appendChild(name);
    card.appendChild(location);
    card.appendChild(dedication);
    card.appendChild(area);
    card.appendChild(img);

    container.appendChild(card);
  });
}

function hideHambBtn(event) {
  if (event.matches) {
    headerMenu.classList.add("js-hide-content");
  } else {
    headerMenu.classList.remove("js-hide-content");
  }
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

document.querySelector(".js-old-link").addEventListener("click", () => {
  createTemplateCard(
    temples.filter((temple) => {
      const year = parseInt(temple.dedicated.split(",")[0], 10);
      return year < 1900;
    })
  );
});

document.querySelector(".js-new-link").addEventListener("click", () => {
  createTemplateCard(
    temples.filter((temple) => {
      const year = parseInt(temple.dedicated.split(",")[0], 10);
      return year > 2000;
    })
  );
});

document.querySelector(".js-large-link").addEventListener("click", () => {
  createTemplateCard(temples.filter((temple) => temple.area > 90000));
});

document.querySelector(".js-small-link").addEventListener("click", () => {
  createTemplateCard(temples.filter((temple) => temple.area < 10000));
});

headerMenu.addEventListener("click", handleClickOnMenu);
templesLarge.addEventListener("change", showNavBarOnBiggerScreen);
templesLarge.addEventListener("change", hideHambBtn);

showNavBarOnBiggerScreen(templesLarge);
hideHambBtn(templesLarge);
createTemplateCard(temples);
