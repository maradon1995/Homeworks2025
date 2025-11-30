"use strict";

document.addEventListener("click", documentActions);

function documentActions(e) {
  const targetElement = e.target;

  if (targetElement.closest(".icon-menu")) {

    document.documentElement.toggleAttribute("data-menu-open");

    toggleIconMenuFixed();
  }
}

const input = document.querySelector(".search-header__input");

function updatePlaceholder() {

  if (window.innerWidth < 370) {
    input.placeholder = "Search...";
    
  } else {
    input.placeholder = "Search something";
  }
}

window.addEventListener("resize", updatePlaceholder);


const header = document.querySelector('.header');
const iconMenu = document.querySelector('.icon-menu');
const burgerFixed = "icon-menu--fixed";

function toggleIconMenuFixed() {

  const isMenuOpen = document.documentElement.hasAttribute("data-menu-open");

  const scrollPosition = window.scrollY;
  const headerHeight = header.offsetHeight;

  const isScrolledPastHeader = scrollPosition > headerHeight;

  if (isMenuOpen && isScrolledPastHeader) {

    iconMenu.classList.add(burgerFixed);
  } else {
    iconMenu.classList.remove(burgerFixed);
  }
}

window.addEventListener("scroll", toggleIconMenuFixed);

toggleIconMenuFixed();
