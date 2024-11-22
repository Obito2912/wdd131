const currentYear = document.querySelector('#currentyear');
const lastModified = document.querySelector('#lastModified');
const today = new Date();
const windChill = document.querySelector('#wind-chill');

currentYear.textContent += today.getFullYear();
lastModified.textContent += document.lastModified;
windChill.textContent = 'N/A';