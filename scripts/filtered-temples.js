const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Cebu City Philippines",
        location: "Cebu City, phillipines",
        dedicated: "2010, June, 13",
        area: 29556,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/_temp/133-Cebu-City-Philippines-Temple.jpg"
    },
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/aba-nigeria-temple/aba-nigeria-temple-5087-main.jpg"
    },
    {
        templeName: "Kyiv Ukraine",
        location: "Sofiivska Borshchagivka, Ukraine",
        dedicated: "2010, August, 29",
        area: 22184,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/_temp/134-Kyiv-Ukraine-Temple.jpg"
    },
    {
        templeName: "Okinawa Japan",
        location: "Okinawa, Japan",
        dedicated: "2023, November, 12",
        area: 116642,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/okinawa-japan-temple/okinawa-japan-temple-40845-main.jpg"
    },
    {
        templeName: "Vancouver British Columbia",
        location: "British Columbia, Canada",
        dedicated: "2010, May, 2",
        area: 28165,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/vancouver-british-columbia-temple/vancouver-british-columbia-temple-13064-main.jpg"
    }
];

const currentYear = document.querySelector('#currentyear');
const lastModified = document.querySelector('#lastModified');
const headerMenu = document.querySelector('.header__menu');
const navEl = document.querySelector('.header__nav');

const today = new Date();
const templesLarge = window.matchMedia('(min-width: 425px)');
currentYear.textContent += `© ${today.getFullYear()}`
lastModified.textContent += document.lastModified;
lastModified.style.color = '#fff';
lastModified.style.fontWeight = 'normal';

function hideHambBtn(event) {
    if (event.matches) {
        headerMenu.classList.add('js-hide-content');
    } else {
        headerMenu.classList.remove('js-hide-content');
    }
}

function createPicture(templeName, location, dedicated, area, imageUrl) {
    const figure = document.createElement('figure');
    figure.classList.add('figure');

    const h2 = document.createElement('h2');
    h2.textContent = templeName;
    h2.classList.add('card__title');
    figure.appendChild(h2);

    const locationP = document.createElement('p');
    locationP.textContent = location;

    const locationSpan = document.createElement('span');
    locationSpan.textContent = 'Location: ';
    locationSpan.classList.add('bold__words');

    locationP.prepend(locationSpan);
    figure.appendChild(locationP);

    const dedicatedP = document.createElement('p');
    dedicatedP.textContent = dedicated;

    const dedicatedSpan = document.createElement('span');
    dedicatedSpan.textContent = 'Dedicated: ';
    dedicatedSpan.classList.add('bold__words');

    dedicatedP.prepend(dedicatedSpan);
    figure.appendChild(dedicatedP);

    const areaP = document.createElement('p');
    areaP.textContent = area;

    const areaSpan = document.createElement('span');
    areaSpan.textContent = 'Size: ';
    areaSpan.classList.add('bold__words');

    areaP.prepend(areaSpan);
    figure.appendChild(areaP);

    const imgUrl = document.createElement('img');
    imgUrl.src = imageUrl;
    imgUrl.alt = `Image of ${templeName} temple`;
    imgUrl.setAttribute('loading', 'lazy');
    figure.appendChild(imgUrl);

    return figure;
}

function renderCards() {
    const mainEl = document.querySelector('main');

    const pictureHtml = temples.map(temple => createPicture(temple.templeName, temple.location, temple.dedicated, temple.area, temple.imageUrl));

    pictureHtml.forEach(picture => mainEl.appendChild(picture));
}

function showNavBarOnBiggerScreen(event) {
    if (event.matches) {
        navEl.classList.add('js-show-header-nav');
    } else {
        navEl.classList.remove('js-show-header-nav')
    }
}

function handleClickOnMenu() {
    headerMenu.classList.toggle('show');
    navEl.classList.toggle('js-show-header-nav');
}


headerMenu.addEventListener('click', handleClickOnMenu);
templesLarge.addEventListener('change', showNavBarOnBiggerScreen)
templesLarge.addEventListener('change', hideHambBtn);

showNavBarOnBiggerScreen(templesLarge);
hideHambBtn(templesLarge);
renderCards();