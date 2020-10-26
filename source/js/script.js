'use strict';

var body = document.querySelector('body');
var buttonMenuOpen = body.querySelector('.main-menu__button-open');
var buttonMenuClose = body.querySelector('.main-menu__button-close');
var menu = body.querySelector('.page-header');

body.classList.remove('no-js');

buttonMenuOpen.addEventListener('click', function () {
  menu.classList.add('page-header--opened');
});

buttonMenuClose.addEventListener('click', function () {
  menu.classList.remove('page-header--opened');
});

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    menu.classList.remove('page-header--opened');
  }
});
