let navMain = document.querySelector('.main-nav');
let navToggle = document.querySelector('.main-header__toggle');

navToggle.addEventListener('click', function () {
  navMain.classList.toggle("main-nav__open");
  navToggle.classList.toggle("main-header__toggle--open");
});

