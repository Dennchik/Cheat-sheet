function getDeviceType() { }
if (isMobile.any()) {
	const openSide = document.querySelector('.page__left-side');
	const btns = openSide.querySelectorAll('.triggerBtn');
	for (let i = 0; i < btns.length; i++) {
		btns[i].addEventListener('click', () => {
			openSide.classList.toggle('page__left-side_collapse');
			for (let i = 0; i < btns.length; i++) {
				btns[i].classList.toggle('_open');
			}
		});
	}
}

if (isMobile || mediaQuery) {
}


const userAgent = navigator.userAgent.toLowerCase();
const mediaQuery = window.matchMedia('(max-width: 768px)');
const isMobile = /mobile|iphone|ipad|ipod|android|blackberry|mini|windows\sce|palm/i.test(userAgent);


console.log(getDeviceType()); // "mobile" or "desktop"

const mediaQuery = window.matchMedia('(max-width: 768px)');
if (mediaQuery.matches) {
	const openSide = document.querySelector('.page__left-side');
	const btns = openSide.querySelectorAll('.triggerBtn');
	for (let i = 0; i < btns.length; i++) {
		btns[i].addEventListener('click', () => {
			openSide.classList.toggle('page__left-side_collapse');
			for (let i = 0; i < btns.length; i++) {
				btns[i].classList.toggle('_open');
			}
		});
	}
}