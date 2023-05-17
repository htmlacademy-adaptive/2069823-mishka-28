let navMain = document.querySelector('.header-nav__main-nav');
let navUser = document.querySelector('.header-nav__user-nav');
let navToggle = document.querySelector('.header__toggle');

navMain.classList.remove('header-nav__no-js');
navUser.classList.remove('header-nav__no-js');
navToggle.classList.remove('header__toggle--js');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('header-nav__open')) {
    navMain.classList.remove('header-nav__open');
    navMain.classList.add('header-nav__closed');
  } else {
    navMain.classList.add('header-nav__open');
    navMain.classList.remove('header-nav__closed');
  }
  if (navUser.classList.contains('header-nav__open')) {
    navUser.classList.remove('header-nav__open');
    navUser.classList.add('header-nav__closed');
  } else {
    navUser.classList.add('header-nav__open');
    navUser.classList.remove('header-nav__closed');
  }
  if (navToggle.classList.contains('header__toggle')) {
    navToggle.classList.remove('header__toggle');
    navToggle.classList.add('header__toggle--open');
  } else {
    navToggle.classList.add('header__toggle');
    navToggle.classList.remove('header__toggle--open');
  }
});



let popup = document.querySelector('.modal-basket');
let openPopupButtons = document.querySelectorAll('.product__button');
let openBasketButtons = document.querySelectorAll('.catalog__card-basket');
let openCatalogButtons =document.querySelectorAll('.manufacture__button');

openPopupButtons.forEach((a) => {
  a.addEventListener('click', (e) => {
      e.preventDefault();
      popup.classList.remove('modal-basket--close');
  })
});

openCatalogButtons.forEach((a) => {
  a.addEventListener('click', (e) => {
      e.preventDefault();
      popup.classList.remove('modal-basket--close');
  })
});

openBasketButtons.forEach((a) => {
  a.addEventListener('click', (e) => {
      e.preventDefault();
      popup.classList.remove('modal-basket--close');
  })
});

document.addEventListener('click', (e) => {
  if(e.target === popup) {
      popup.classList.add('modal-basket--close');
  }
});
