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
