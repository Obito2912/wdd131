const products = [
  {
    id: "s24",
    name: "Samsung Galaxy S24",
    averagerating: 4.5,
  },
  {
    id: "mac",
    name: "Mac Air Laptop",
    averagerating: 4.7,
  },
  {
    id: "nike",
    name: "Nike Shoes",
    averagerating: 3.5,
  },
  {
    id: "controller",
    name: "Xbox Elite Controller",
    averagerating: 3.9,
  },
  {
    id: "tree",
    name: "Christmas Tree",
    averagerating: 5.0,
  },
];

const productsEl = document.querySelector("#products");
const currentYear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");
const submitButton = document.querySelector("#submit-button");
const body = document.querySelector("#counter-page-body"); //
const today = new Date();

currentYear.textContent += `© ${today.getFullYear()}`;
lastModified.textContent += document.lastModified;
lastModified.style.color = "#fff";
lastModified.style.fontWeight = "normal";

function renderOptions() {
  products.forEach((product) => {
    productsEl.innerHTML += `<option value='${product.id}'>${product.name}</option>`;
  });
}

function localStorageCounter(e) {
  e.preventDefault();
  let counter = parseInt(localStorage.getItem("counter") || 0);

  counter += 1;
  localStorage.setItem("counter", counter);

  let p = document.createElement("p");
  p.textContent = `You have completed ${counter} reviews.`;
  body.append(p);
}

submitButton.addEventListener("submit", localStorageCounter);

renderOptions();
