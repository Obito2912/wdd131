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
const closeBtn = document.querySelector('.modal__close');
const body = document.querySelector('body');

if (document.body.getAttribute('data-page') === 'contact') {
  const submitBtn = document.querySelector('#submit-button');
  submitBtn.addEventListener('click', (e) => {
    const form = document.querySelector('.form');

    if (form.checkValidity()) {
      e.preventDefault();
      form.reset();
      if (!document.querySelector('.form p')) {
        const p = document.createElement('p');
        p.textContent = 'Your message has been sent to Cassidy. She will get back to you within 24 hours.'
        form.append(p);
        e.preventDefault();
        form.reset();
      }
    } else {
      e.preventDefault();
    }
  });
}

if (document.body.getAttribute('data-page') === 'faq') {
  const questions = document.querySelectorAll('.faq__question');
  const answers = document.querySelectorAll('.faq__answer');

  questions.forEach((question, answer) => question.addEventListener('click', () => answers[answer].classList.toggle('faq__answer_open')));
}

if (document.body.getAttribute('data-page') === 'loveofnailzz') {
  const mainCntr1 = document.querySelector('.main__pricelist');
  const mainCntr2 = document.querySelector('.add-ons');

  function renderList(container, array) {
    array.forEach(obj => {
      container.innerHTML +=
        `<p class='main__pricelist_p'>${obj.header}</p>
      <div class='div1'>
        <ul>
          <li class='hightlight'>Cost: </li>
          <li class='hightlight'>ETA: </li>
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

  renderList(mainCntr1, priceList);
  renderList(mainCntr2, addOn);
}


menuBtn.addEventListener("click", () => {
  navBar.classList.add("open-popup");
  body.classList.add('no-scroll');
});

closeBtn.addEventListener('click', () => {
  navBar.classList.remove("open-popup");
  body.classList.remove('no-scroll');
});