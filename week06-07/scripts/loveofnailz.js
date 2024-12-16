const priceList = [
  {
    header: 'Full Set Acrylic',
    cost: 65,
    eta: '2 hrs',
  },

  {
    header: 'Full Set Polygel',
    cost: 65,
    eta: '2 hrs',
  },

  {
    header: '2-4 Week Fill',
    cost: 55,
    eta: '1 hr 45 mins',
  },

  {
    header: '5+ Week Fill',
    cost: 60,
    eta: '1 hr 55 mins',
  },

  {
    header: 'Acrylic Toes',
    cost: 70,
    eta: '2 hrs',
  },

  {
    header: '2-4 Week Acrylic Toe Fill',
    cost: 60,
    eta: '2 hrs',
  },

  {
    header: 'Gel Polish Toes Only',
    cost: 35,
    eta: '40 mins',
  },

  {
    header: 'Gel Polish Manicure',
    cost: 35,
    eta: '1 hr',
  },

  {
    header: 'Luxury Pedicure',
    cost: 60,
    eta: '1 hr 20 mins',
  },
]

const addOn = [
  {
    header: 'Nail Repair',
    cost: 3,
    eta: '35 mins'
  },
  {
    header: 'Medium Art',
    cost: 15,
    eta: '45 mins'
  },
  {
    header: 'Simple Art',
    cost: 5,
    eta: '35 mins'
  },
  {
    header: 'Detailed/Extra Detailed Art',
    cost: 25,
    eta: '55 mins'
  },
  {
    header: 'Soak-Off/Gel Removal',
    cost: 15,
    eta: '1 hr 10 mins'
  },
  {
    header: 'Free Style Art',
    cost: 20,
    eta: '1 hr'
  },
  {
    header: 'Add Long-XL',
    cost: 5,
    eta: '30 mins'
  }
]

const menuBtn = document.querySelector(".header__menu");
const navBar = document.querySelector(".header__nav");
const main = document.querySelector('.main');

function renderPriceListTemplate() {
  const priceListCntr = document.querySelector('.main__pricelist');
  priceList.forEach(obj => {
    priceListCntr.innerHTML +=
      `<h3 class='main__pricelist_header'>${obj.header}</h3>
    <div class='div1'>
      <ul>
        <li>Cost: </li>
        <li>ETA: </li>
      </ul>
    </div>
    <div class='div2'>
      <ul>
        <li> ${obj.cost}</li>
        <li> ${obj.eta}</li>
      </ul>
    </div>`
  });
}

renderPriceListTemplate();

menuBtn.addEventListener("click", () => {
  navBar.classList.toggle("open-popup");
});

