if (isMobile.any()) {
	// const openSide = document.querySelector('.sidebar-left');
	// const btns = openSide.querySelectorAll('.triggerBtn');
	// for (let i = 0; i < btns.length; i++) {
	// 	btns[i].addEventListener('click', () => {
	// 		openSide.classList.toggle('_open');
	// 		for (let i = 0; i < btns.length; i++) {
	// 			btns[i].classList.toggle('_open');
	// 		}
	// 	});
	// }
}
const mediaQuery = window.matchMedia('(max-width: 768px)');
if (mediaQuery.matches) {
	const openSide = document.querySelector('.sidebar-left');
	const btns = openSide.querySelectorAll('.triggerBtn');
	for (let i = 0; i < btns.length; i++) {
		btns[i].addEventListener('click', () => {
			openSide.classList.toggle('_open');
			for (let i = 0; i < btns.length; i++) {
				btns[i].classList.toggle('_open');
			}
		});
	}
}

const arrowLinks = document.querySelectorAll('.menu-items__link');
arrowLinks.forEach((arrowLink) => {
	arrowLink.addEventListener("click", () => {
		const opened_menu = arrowLink.closest('.header__top-nav').querySelector('._opened-menu');
		_toggleMenu(arrowLink);
		if (opened_menu && opened_menu !== arrowLink) {
			_toggleMenu(opened_menu);
		}
	});
});
const _toggleMenu = (arrowLink) => {
	if (arrowLink.classList.contains('_opened-menu')) {
		arrowLink.classList.remove('_opened-menu');
	} else {
		arrowLink.classList.add('_opened-menu');
	}
};
