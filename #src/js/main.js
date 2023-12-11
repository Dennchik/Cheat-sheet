const arrowLinks = document.querySelectorAll('.top-menu__link');

arrowLinks.forEach((arrowLink) => {
	arrowLink.addEventListener("click", () => {
		const opened_menu = arrowLink.closest('.top-menu__top-nav').querySelector('._opened-menu');
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