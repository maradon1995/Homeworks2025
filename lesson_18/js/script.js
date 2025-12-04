"use strict";

document.addEventListener("click", documentActions);

function documentActions(e) {
  const targetElement = e.target;

  if (targetElement.closest(".menu__burger")) {

    document.documentElement.toggleAttribute("menu-burger-open");
  }
}