/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./\u0000#src/js/main.js":
/*!**************************!*\
  !*** ./ #src/js/main.js ***!
  \**************************/
/***/ (function() {

eval("if (isMobile.any()) {\r\n\t// const openSide = document.querySelector('.sidebar-left');\r\n\t// const btns = openSide.querySelectorAll('.triggerBtn');\r\n\t// for (let i = 0; i < btns.length; i++) {\r\n\t// \tbtns[i].addEventListener('click', () => {\r\n\t// \t\topenSide.classList.toggle('_open');\r\n\t// \t\tfor (let i = 0; i < btns.length; i++) {\r\n\t// \t\t\tbtns[i].classList.toggle('_open');\r\n\t// \t\t}\r\n\t// \t});\r\n\t// }\r\n}\r\nconst mediaQuery = window.matchMedia('(max-width: 768px)');\r\nif (mediaQuery.matches) {\r\n\tconst openSide = document.querySelector('.page__left-side');\r\n\tconst btns = openSide.querySelectorAll('.triggerBtn');\r\n\tfor (let i = 0; i < btns.length; i++) {\r\n\t\tbtns[i].addEventListener('click', () => {\r\n\t\t\topenSide.classList.toggle('page__left-side_collapse');\r\n\t\t\tfor (let i = 0; i < btns.length; i++) {\r\n\t\t\t\tbtns[i].classList.toggle('_open');\r\n\t\t\t}\r\n\t\t});\r\n\t}\r\n}\r\n\r\nconst arrowLinks = document.querySelectorAll('.menu-items__link');\r\narrowLinks.forEach((arrowLink) => {\r\n\tarrowLink.addEventListener(\"click\", () => {\r\n\t\tconst opened_menu = arrowLink.closest('.header__top-nav').querySelector('._opened-menu');\r\n\t\t_toggleMenu(arrowLink);\r\n\t\tif (opened_menu && opened_menu !== arrowLink) {\r\n\t\t\t_toggleMenu(opened_menu);\r\n\t\t}\r\n\t});\r\n});\r\nconst _toggleMenu = (arrowLink) => {\r\n\tif (arrowLink.classList.contains('_opened-menu')) {\r\n\t\tarrowLink.classList.remove('_opened-menu');\r\n\t} else {\r\n\t\tarrowLink.classList.add('_opened-menu');\r\n\t}\r\n};\r\n\n\n//# sourceURL=webpack://cheat-sheet/./%00#src/js/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./\u0000#src/js/main.js"]();
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.js.map
