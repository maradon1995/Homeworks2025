"use strict"

document.addEventListener('click', documentActions)

function documentActions(e) {
	const targetElement = e.target

	if(targetElement.closest('.icon-menu')) {
		document.documentElement.toggleAttribute('data-menu-open')
	}
} 

const input = document.querySelector('.search-header__input')

function updatePlaceholder() {
    if (window.innerWidth < 370) {
        input.placeholder = 'Search...';
    } else {
        input.placeholder = 'Search something';
    }
}

window.addEventListener('resize', updatePlaceholder);