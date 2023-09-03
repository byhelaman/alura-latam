// Creacion de elementos - Carrusel
const skills = ['Html', 'Css', 'JavaScript', 'Git', 'React', 'Php', 'MySql'];
const ul = document.querySelector('.list-one');

const skillsTwo = ['Photoshop', 'Figma', 'Illustrator', 'Ux/Ui'];
const ulTwo = document.querySelector('.list-two')

const listImg = document.querySelector('.list-img')

for (let i = 0; i < 5; i++) {
  const li = document.createElement('li');
  li.classList.add('splide__slide');

  const div = document.createElement('div');
  div.classList.add('img')
  div.style.background = '#f5f5f5';
  div.style.maxWidth = '700px';
  div.style.minHeight = '380px';
  div.style.borderRadius = '1rem';
  li.appendChild(div);

  listImg.appendChild(li);
}

skillsTwo.forEach((skill) => {
  const li = document.createElement('li');
  li.classList.add('splide__slide');

  const div = document.createElement('div');
  div.textContent = skill;
  li.appendChild(div)

  ulTwo.appendChild(li);
});

skills.forEach((skill) => {
  const li = document.createElement('li');
  li.classList.add('splide__slide');

  const div = document.createElement('div');
  div.textContent = skill;
  li.appendChild(div)

  ul.appendChild(li);
});

(() => {
  const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true
  });

  const splide = new Splide('.splide.spl-img', {
    arrows: false,
    pagination: false,
  });
  splide.mount();

  const splideText = new Splide('.splide.spl-txt', {
    type: 'loop',
    clones: 30,
    perPage: 1,
    drag: false,
    arrows: false,
    pagination: false,
    autoScroll: {
      speed: .5,
    },
  });
  splideText.mount(window.splide.Extensions);

  const splideTextTwo = new Splide('.splide.spl-txt-two', {
    type: 'loop',
    clones: 30,
    perPage: 1,
    drag: false,
    arrows: false,
    pagination: false,
    autoScroll: {
      speed: -.5,
    },
  });
  splideTextTwo.mount(window.splide.Extensions);

  // Validacion de Formulario
  const name = document.getElementById('name');
  const phone = document.getElementById('phone');
  const email = document.getElementById('email');
  const form = document.getElementById('form');

  const regexName = /^[A-Za-zÁ-ÿ]+(?:\s[A-Za-zÁ-ÿ]+)*$/;
  const regexPhone = /^(?:(?:\+|00)51)?[1-9]\d{8}$/;
  const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (!regexName.test(name.value)) {
      return alert('Please enter your name');
    }

    if (!regexPhone.test(phone.value)) {
      return alert('Please enter your phone number');
    }

    if (!regexEmail.test(email.value)) {
      return alert('Please enter your email');
    }

  });

})();