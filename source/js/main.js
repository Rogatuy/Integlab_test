//Swiper

const swiper = new Swiper('.image-slider__swiper', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  grabCursor: true,
  watchOverflow: true,
  freeMode: true,
  breakpoints: {
    350: {
      slidesPerView: 1.222,
      spaceBetween: 25,
    },
    1400: {
      slidesPerView: 3.52,
      spaceBetween: 20,
    }
  }
});

const swiper1 = new Swiper('.tours-slider', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  grabCursor: true,
  watchOverflow: true,
  freeMode: true,
  breakpoints: {
    350: {
      slidesPerView: 1.2,
    },
    1400: {
      slidesPerView: 3.05,
      spaceBetween: 50,
    }
  }
});

// Add like

function addLike(element) {
  element.classList.toggle("tours-slider__like--isLike");
}

// Form open/close

let popup = document.querySelector('.popup');
let popupBg = document.querySelector('.popup__background');
let popupForm = document.querySelector('.popup__form');
let openPopupButton = document.querySelector('.main-tour__open-form');
let closePopupButton = document.querySelector('.popup__close-button');

openPopupButton.addEventListener('click', (e) => {
    e.preventDefault();
    popup.classList.add('active');
    popupBg.classList.add('active');
    popupForm.classList.add('active');
});

closePopupButton.addEventListener('click',() => {
  popup.classList.remove('active');
  popupBg.classList.remove('active');
  popupForm.classList.remove('active');
});

document.addEventListener('click', (e) => {
  if(e.target === popupBg) {
    popup.classList.remove('active');
    popupBg.classList.remove('active');
    popupForm.classList.remove('active');
  }
});

//Select

const selectSingle = document.querySelector('.popup__select');
const selectSingle_title = selectSingle.querySelector('.select__title');
const selectSingle_labels = selectSingle.querySelectorAll('.select__label');

// Toggle menu
  selectSingle_title.addEventListener('click', () => {
  if ('active' === selectSingle.getAttribute('data-state')) {
    selectSingle.setAttribute('data-state', '');
  } else {
    selectSingle.setAttribute('data-state', 'active');
  }
});

// Close when click to option
for (let i = 0; i < selectSingle_labels.length; i++) {
  selectSingle_labels[i].addEventListener('click', (evt) => {
    selectSingle_title.textContent = evt.target.textContent;
    selectSingle_title.classList.add('select__title--access')
    selectSingle.setAttribute('data-state', '');
  });
}

// 100 vh экрана
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);





