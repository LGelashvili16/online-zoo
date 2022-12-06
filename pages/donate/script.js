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

// ^^^^^^^^^^ Money selector ^^^^^^^^^^

const dotCircle = document.querySelectorAll('.dot-circle');
const moneyAmount = document.querySelectorAll('.money-amount');
const inputMoney = document.querySelector('.input-money');

for( let i = 0; i < dotCircle.length; i++) {

  dotCircle[i].addEventListener('click', () => {

    dotCircle.forEach(child => child.classList.remove('dot-active', 'dot-active-2'));

    if (window.innerWidth > 639) {
      dotCircle[i].classList.add('dot-active');
    } else {
      dotCircle[i].classList.add('dot-active-2');
    }

    moneyAmount.forEach(child => child.classList.remove('money-active', 'money-active-2'));

    moneyAmount[i].classList.add('money-active');

  
    inputMoney.value = Number(moneyAmount[i].innerText.slice(1));

  });

};

inputMoney.addEventListener('input', () => {
  
  moneyAmount.forEach((child, index) => {

    dotCircle[index].classList.remove('dot-active', 'dot-active-2');
    moneyAmount[index].classList.remove('money-active', 'money-active-2');

    if (inputMoney.value == child.innerText.slice(1)) {
      
      window.innerWidth > 639 ? dotCircle[index].classList.add('dot-active') : dotCircle[index].classList.add('dot-active-2');
      
      moneyAmount[index].classList.add('money-active');

    }

  });

});

// -----------++++++++++-----------++++++++++-----------++++++++++