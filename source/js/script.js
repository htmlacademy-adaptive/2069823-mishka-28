let navMain = document.querySelector('.header-nav');
let navToggle = document.querySelector('.header__toggle');

navToggle.addEventListener('click', function () {
  navMain.classList.toggle("header-nav__open");
  navToggle.classList.toggle("header__toggle--open");
});
