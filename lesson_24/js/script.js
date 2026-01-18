"use strict";

// Задача №1
// Дано в html: три елементи з класом item.
// При кліку на кожен з елментів додати клас active,
// при повторному кліку прибрати клас

const itemElement = document.querySelectorAll(".item");

document.addEventListener("click", documentAction);

function documentAction(e) {
  const targetElement = e.target;
  console.log(targetElement);

  itemElement.forEach((index) => {
    index.classList.toggle("active");
  });
}

// Задача №2
// Дано в css/scss: body прозорий
// При повному завантаженню сторінки додати клас до body який прибирає прозорість.

window.addEventListener("load", opacityPage);

function opacityPage(e) {
  const bodyElement = document.querySelector(`body`);
  bodyElement.classList.add("opacity");
}

// Задача №3
// Дано в html: header main footer
// Пи наведенні курсору на header змінювати колір фону у footer.
// Коли курсор йде з header повертати початковий фон для footer.

const head = document.querySelector(`header`);
const footer = document.querySelector("footer");

head.addEventListener("mouseenter", mouseBlock);
head.addEventListener("mouseleave", mouseBlock);

function mouseBlock(e) {
  if (e.type === "mouseenter") {
    footer.style.backgroundColor = "black";
  } else {
    footer.style.backgroundColor = "";
  }
}

// Задача №4
// Дано в html: текст, елемент з класом item, текст. Так, що елемент з класом item за межами в'юпотрта.
// Створити функцію яка будує інтервал який буде змінювати контент в елементі item виводячи цифру яка збільшується на одиницю: 1 2 3 ... і т.д.
// Затримка між зміною числа, та до якого числа має працювати інтервал має задаватись в дата атрибутах елемента item.
// Функція має запустатить коли ми доскролюємо до елементу item (його видно), і не запускатись повторно.

const itemFirstItemElement = document.querySelector(`button`);

const interval = +itemFirstItemElement.dataset.intervalSec;
const targetNumber = +itemFirstItemElement.dataset.counter;
let startNumber = 0;

const options = {
  root: null,
  rootMargin: "0px 0px 0px 0px",
  threshhold: 1,
};

const callback = (entries, observer) => {
  entries.forEach((entry) => {
    const currentElement = entry.target;

    if (entry.isIntersecting) {

			observer.unobserve(currentElement);

      let timerForNumbers = setInterval(() => {
        startNumber++;

        itemFirstItemElement.innerHTML = startNumber;

        console.log(startNumber);

        if (startNumber === targetNumber) {
          clearInterval(timerForNumbers);
        }
      }, interval);
    } 
  });
};

const observer = new IntersectionObserver(callback, options);

const animElement = document.querySelectorAll('[class*="--anim"]');
 animElement.forEach((animElement) => {
  observer.observe(animElement);
});

console.log(animElement);
