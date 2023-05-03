let navMain = document.querySelector('.header-nav');
let navToggle = document.querySelector('.header__toggle');

navMain.classList.remove('header-nav__no-js');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('header-nav__open')) {
    navMain.classList.remove('header-nav__open');
    navMain.classList.add('header-nav__closed');
  } else {
    navMain.classList.add('header-nav__open');
    navMain.classList.remove('header-nav__closed');
  }
});





