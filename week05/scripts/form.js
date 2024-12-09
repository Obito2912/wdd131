const currentYear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");
const today = new Date();


currentYear.textContent += `© ${today.getFullYear()}`;
lastModified.textContent += document.lastModified;
// lastModified.style.color = "#fff";
// lastModified.style.fontWeight = "normal";