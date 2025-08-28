
// let getisMobile = {
// 	userAgent: navigator.userAgent.toLowerCase(),

// 	mediaQuery: window.matchMedia('(max-width: 690px)'),

// 	isMobile: /mobile|iphone|ipad|ipod|android|blackberry|mini|windows\sce|palm/i.test(navigator.userAgent),

// };
// export default getisMobile;


export function getDevice() {
	const userAgent = navigator.userAgent.toLowerCase();
	const mediaQuery = window.matchMedia('(max-width: 690px)');
	const isMobile = /mobile|iphone|ipad|ipod|android|blackberry|mini|windows\sce|palm/i.test(userAgent);
	function handleTabletChange(el) {
		if (el.matches) {
			console.log('Media Query Matched!');
		}
	}
	mediaQuery.addEventListener(handleTabletChange);
	handleTabletChange(mediaQuery);
	// if (mediaQuery) {
	// 	return "mobile";
	// } else {
	// 	return "desktop";
	// }

}
export default getDevice;


// import getDeviceType from "./module/dinamic";

// if (getDeviceType) {
// 	const openSide = document.querySelector('.page__left-side');
// 	const btns = openSide.querySelectorAll('.triggerBtn');
// 	for (let i = 0; i < btns.length; i++) {
// 		const btn = btns[i];
// 		btn.addEventListener('click', (el) => {

// 			openSide.classList.toggle('page__left-side_collapse');
// 			for (let i = 0; i < btns.length; i++) {
// 				btns[i].classList.toggle('_open');
// 			} el.preventDefault();
// 		});
// 	}
// }
// console.log(getDeviceType()); // "mobile" or "desktop"