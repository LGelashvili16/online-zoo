'use strict'

// ^^^^^^^^^^ Burger menu ^^^^^^^^^^

const overlay = document.querySelector('.overlay');
const burgerMenu = document.querySelector('.burger-menu');
const closeBtn = document.querySelector('.close');
const header = document.querySelector('.header-d-flex');

burgerMenu.addEventListener('click', function () {
  overlay.classList.toggle('active');
  closeBtn.classList.toggle('active');
  document.body.style.overflow = 'hidden';
});

closeBtn.addEventListener('click', function () {
  overlay.classList.toggle('active');
  closeBtn.classList.toggle('active');
  document.body.style.overflow = '';
});

overlay.addEventListener('click', function (e) {
  overlay.classList.toggle('active');
  closeBtn.classList.toggle('active');
  document.body.style.overflow = '';
});

header.addEventListener('click', function (e) {
  e.stopPropagation();
});

// -----------++++++++++-----------++++++++++-----------++++++++++

// ^^^^^^^^^^ Testimonials slider ^^^^^^^^^^

const inputRange = document.querySelector('.input-range');
const cards = document.querySelector('.s5-cards');

inputRange.addEventListener('input', sliding);

function sliding() {
  let margin = `-${inputRange.value * 297}px`;
  cards.style.marginLeft = margin;
}


// ^^^^^^^^^^ Testimonials popup ^^^^^^^^^^

const cardTestimonials = document.querySelectorAll(".s5-card");
const popup = document.querySelector('.popup');
const popupInnerCard = document.querySelector('.popup-inner-card');
const xIcon = document.querySelector('.popup-x-icon');
const popupCard = document.querySelector('.popup-card');


for (let i = 0; i < cardTestimonials.length; i++) {

  let appendCard = cardTestimonials[i];
  
  cardTestimonials[i].addEventListener('click', () => {
    popup.classList.add('popup-active');
    popupInnerCard.innerHTML = appendCard.outerHTML;
  });

  xIcon.addEventListener('click', () => {
    popup.classList.remove('popup-active');
  });

  popup.addEventListener('click', () => {
    popup.classList.remove('popup-active');
  });

  popupCard.addEventListener('click', (e) => {
    e.stopPropagation();
  })

};

// -----------++++++++++-----------++++++++++-----------++++++++++

// ^^^^^^^^^^ Pets slider ^^^^^^^^^^

const leftArr = document.querySelector('.circle-left');
const rightArr = document.querySelector('.circle-right');

const petsSlider = document.getElementById('s3-cards-slider');
const tableWidth = document.querySelector('.cards').clientWidth;
const tables = document.querySelectorAll('.cards');

let counter = 1;

petsSlider.style.transform = `translateX(${-tableWidth * counter}px)`;


rightArr.addEventListener('click', () => {

  if (counter >= tables.length - 1) return;
  petsSlider.style.transition = 'transform 0.5s';
  counter++;
  petsSlider.style.transform = `translateX(${-tableWidth * counter}px)`;

});

leftArr.addEventListener('click', () => {

  if (counter <= 0) return;
  petsSlider.style.transition = 'transform 0.5s';
  counter--;
  petsSlider.style.transform = `translateX(${-tableWidth * counter}px)`;

});

petsSlider.addEventListener('transitionend', () => {
  if (tables[counter].id === 'last-clone') {
    petsSlider.style.transition = 'none';
    counter = tables.length - 2;
    petsSlider.style.transform = `translateX(${-tableWidth * counter}px)`;
  }

  if (tables[counter].id === 'first-clone') {
    petsSlider.style.transition = 'none';
    counter = tables.length - counter;
    petsSlider.style.transform = `translateX(${-tableWidth * counter}px)`;
  }
})

// -----------++++++++++-----------++++++++++-----------++++++++++
















// leftArr.addEventListener('click', () => {
//   counter++;
//   petsSlider.style.transform = `translateX(${tableWidth * counter}px)`;
  
// })

// rightArr.addEventListener('click', () => {
  
//   counter--;
//   petsSlider.style.transform = `translateX(${tableWidth * counter}px)`;

//   petsSlider.style.transition =  '1s';

//   if (counter < 0) {
//     console.log(counter);
//   }

//   petsSlider.addEventListener('transitionend', () => {
//     if (tableWidth * counter < tableWidth + 10) {
//       petsSlider.style.transition = 'none';
//       petsSlider.style.transform = `translateX(-${tableWidth * counter}px)`;
//     }
//   })
  
// })



