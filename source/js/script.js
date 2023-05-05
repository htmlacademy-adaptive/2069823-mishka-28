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


// let page = document.querySelector('.modal-basket');
// let modalButton = document.querySelector('.product__button');

// modalButton.onclick = function() {
//   page.classList.toggle('modal-basket__close');
// };


let btnModal = document.querySelector(".product__button");
let modal= document.querySelector(".modal-basket");
let toggleMenu = function () {
    menu.classList.toggle("modal-basket__close");
}

// btnModal.addEventListener("click", function (e) {
//     e.stopPropagation();
//     toggleMenu();
// });

// document.addEventListener("click", function (e) {
//     let target = e.target;
//     let its_menu = target == modal || modal.contains(target);
//     let its_btnMenu = target == btnModal;
//     let menu_is_active = modal.classList.contains("modal-basket__close");

//     if (!its_menu && !its_btnMenu && menu_is_active) {
//         toggleMenu();
//     }
// });
