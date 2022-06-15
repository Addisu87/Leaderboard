/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./modules/PlayerList.js":
/*!*******************************!*\
  !*** ./modules/PlayerList.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _store_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store.js */ "./modules/store.js");


// UI class: Handle UI tasks
class PlayerList {
  static displayPlayer() {
    const players = _store_js__WEBPACK_IMPORTED_MODULE_0__["default"].getPlayers();

    players.forEach((player) => PlayerList.addPlayerList(player));
  }

  static addPlayerList(player) {
    const list = document.querySelector('#player-list');
    const row = document.createElement('tr');

    row.innerHTML = `  
    <td>${player.name}</td>
    <td>${player.score}</td>
    `;

    list.appendChild(row);
  }

  static showAlert(message, className) {
    const div = document.createElement('div');
    div.className = `alert alert-${className}`;
    div.appendChild(document.createTextNode(message));
    const container = document.querySelector('#container');
    const form = document.querySelector('#player-form');
    container.insertBefore(div, form);

    // Vanish in 2 seconds
    setTimeout(() => document.querySelector('.alert').remove(), 2000);
  }

  // clear fields
  static clearFields() {
    document.querySelector('#name').value = '';
    document.querySelector('#score').value = '';
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PlayerList);


/***/ }),

/***/ "./modules/store.js":
/*!**************************!*\
  !*** ./modules/store.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Store {
  static getPlayers() {
    let players;
    if (localStorage.getItem('players') === null) {
      players = [];
    } else {
      players = JSON.parse(localStorage.getItem('players'));
    }
    return players;
  }

  static addPlayer(player) {
    const players = Store.getPlayers();

    players.push(player);
    localStorage.setItem('players', JSON.stringify(players));
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Store);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_PlayerList_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/PlayerList.js */ "./modules/PlayerList.js");
/* harmony import */ var _modules_store_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/store.js */ "./modules/store.js");



// Leaderboard class: Represent Leaderboard.
class Player {
  constructor(name, score) {
    this.name = name;
    this.score = score;
  }
}

// Event: Display player
document.addEventListener('DOMContentLoaded', _modules_PlayerList_js__WEBPACK_IMPORTED_MODULE_0__["default"].displayPlayer);

// Event: Add a player
document.querySelector('#player-form').addEventListener('submit', (e) => {
  // prevent actual submit
  e.preventDefault();

  // Get form values
  const name = document.querySelector('#name').value;
  const score = document.querySelector('#score').value;

  // validate
  if (name === '' || score === '') {
    _modules_PlayerList_js__WEBPACK_IMPORTED_MODULE_0__["default"].showAlert('Please fill in all fields ', 'danger');
  } else {
    // Instantiate player
    const player = new Player(name, score);

    // add player to PlayerList
    _modules_PlayerList_js__WEBPACK_IMPORTED_MODULE_0__["default"].addPlayerList(player);

    // add player to store
    _modules_store_js__WEBPACK_IMPORTED_MODULE_1__["default"].addPlayer(player);
  }
});

// Event: Update the status
document.querySelector('#refresh').addEventListener('click', () => {
  // sorting the array from highest to lowest
  Player.sort((a, b) => a.index - b.index);
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBK0I7O0FBRS9CO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiw0REFBZ0I7O0FBRXBDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsVUFBVSxZQUFZO0FBQ3RCLFVBQVUsYUFBYTtBQUN2Qjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxtQ0FBbUMsVUFBVTtBQUM3QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLFVBQVUsRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDekMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsS0FBSyxFQUFDOzs7Ozs7O1VDbkJyQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ05rRDtBQUNWOztBQUV4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhDQUE4Qyw0RUFBd0I7O0FBRXRFO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSSx3RUFBb0I7QUFDeEIsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQSxJQUFJLDRFQUF3Qjs7QUFFNUI7QUFDQSxJQUFJLG1FQUFlO0FBQ25CO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9MZWFkZXItYm9hcmQvLi9tb2R1bGVzL1BsYXllckxpc3QuanMiLCJ3ZWJwYWNrOi8vTGVhZGVyLWJvYXJkLy4vbW9kdWxlcy9zdG9yZS5qcyIsIndlYnBhY2s6Ly9MZWFkZXItYm9hcmQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vTGVhZGVyLWJvYXJkL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9MZWFkZXItYm9hcmQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9MZWFkZXItYm9hcmQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9MZWFkZXItYm9hcmQvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFN0b3JlIGZyb20gJy4vc3RvcmUuanMnO1xuXG4vLyBVSSBjbGFzczogSGFuZGxlIFVJIHRhc2tzXG5jbGFzcyBQbGF5ZXJMaXN0IHtcbiAgc3RhdGljIGRpc3BsYXlQbGF5ZXIoKSB7XG4gICAgY29uc3QgcGxheWVycyA9IFN0b3JlLmdldFBsYXllcnMoKTtcblxuICAgIHBsYXllcnMuZm9yRWFjaCgocGxheWVyKSA9PiBQbGF5ZXJMaXN0LmFkZFBsYXllckxpc3QocGxheWVyKSk7XG4gIH1cblxuICBzdGF0aWMgYWRkUGxheWVyTGlzdChwbGF5ZXIpIHtcbiAgICBjb25zdCBsaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BsYXllci1saXN0Jyk7XG4gICAgY29uc3Qgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKTtcblxuICAgIHJvdy5pbm5lckhUTUwgPSBgICBcbiAgICA8dGQ+JHtwbGF5ZXIubmFtZX08L3RkPlxuICAgIDx0ZD4ke3BsYXllci5zY29yZX08L3RkPlxuICAgIGA7XG5cbiAgICBsaXN0LmFwcGVuZENoaWxkKHJvdyk7XG4gIH1cblxuICBzdGF0aWMgc2hvd0FsZXJ0KG1lc3NhZ2UsIGNsYXNzTmFtZSkge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdi5jbGFzc05hbWUgPSBgYWxlcnQgYWxlcnQtJHtjbGFzc05hbWV9YDtcbiAgICBkaXYuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUobWVzc2FnZSkpO1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250YWluZXInKTtcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BsYXllci1mb3JtJyk7XG4gICAgY29udGFpbmVyLmluc2VydEJlZm9yZShkaXYsIGZvcm0pO1xuXG4gICAgLy8gVmFuaXNoIGluIDIgc2Vjb25kc1xuICAgIHNldFRpbWVvdXQoKCkgPT4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFsZXJ0JykucmVtb3ZlKCksIDIwMDApO1xuICB9XG5cbiAgLy8gY2xlYXIgZmllbGRzXG4gIHN0YXRpYyBjbGVhckZpZWxkcygpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmFtZScpLnZhbHVlID0gJyc7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Njb3JlJykudmFsdWUgPSAnJztcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQbGF5ZXJMaXN0O1xuIiwiY2xhc3MgU3RvcmUge1xuICBzdGF0aWMgZ2V0UGxheWVycygpIHtcbiAgICBsZXQgcGxheWVycztcbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3BsYXllcnMnKSA9PT0gbnVsbCkge1xuICAgICAgcGxheWVycyA9IFtdO1xuICAgIH0gZWxzZSB7XG4gICAgICBwbGF5ZXJzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncGxheWVycycpKTtcbiAgICB9XG4gICAgcmV0dXJuIHBsYXllcnM7XG4gIH1cblxuICBzdGF0aWMgYWRkUGxheWVyKHBsYXllcikge1xuICAgIGNvbnN0IHBsYXllcnMgPSBTdG9yZS5nZXRQbGF5ZXJzKCk7XG5cbiAgICBwbGF5ZXJzLnB1c2gocGxheWVyKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncGxheWVycycsIEpTT04uc3RyaW5naWZ5KHBsYXllcnMpKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdG9yZTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFBsYXllckxpc3QgZnJvbSAnLi4vbW9kdWxlcy9QbGF5ZXJMaXN0LmpzJztcbmltcG9ydCBTdG9yZSBmcm9tICcuLi9tb2R1bGVzL3N0b3JlLmpzJztcblxuLy8gTGVhZGVyYm9hcmQgY2xhc3M6IFJlcHJlc2VudCBMZWFkZXJib2FyZC5cbmNsYXNzIFBsYXllciB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIHNjb3JlKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnNjb3JlID0gc2NvcmU7XG4gIH1cbn1cblxuLy8gRXZlbnQ6IERpc3BsYXkgcGxheWVyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgUGxheWVyTGlzdC5kaXNwbGF5UGxheWVyKTtcblxuLy8gRXZlbnQ6IEFkZCBhIHBsYXllclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BsYXllci1mb3JtJykuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcbiAgLy8gcHJldmVudCBhY3R1YWwgc3VibWl0XG4gIGUucHJldmVudERlZmF1bHQoKTtcblxuICAvLyBHZXQgZm9ybSB2YWx1ZXNcbiAgY29uc3QgbmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuYW1lJykudmFsdWU7XG4gIGNvbnN0IHNjb3JlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Njb3JlJykudmFsdWU7XG5cbiAgLy8gdmFsaWRhdGVcbiAgaWYgKG5hbWUgPT09ICcnIHx8IHNjb3JlID09PSAnJykge1xuICAgIFBsYXllckxpc3Quc2hvd0FsZXJ0KCdQbGVhc2UgZmlsbCBpbiBhbGwgZmllbGRzICcsICdkYW5nZXInKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBJbnN0YW50aWF0ZSBwbGF5ZXJcbiAgICBjb25zdCBwbGF5ZXIgPSBuZXcgUGxheWVyKG5hbWUsIHNjb3JlKTtcblxuICAgIC8vIGFkZCBwbGF5ZXIgdG8gUGxheWVyTGlzdFxuICAgIFBsYXllckxpc3QuYWRkUGxheWVyTGlzdChwbGF5ZXIpO1xuXG4gICAgLy8gYWRkIHBsYXllciB0byBzdG9yZVxuICAgIFN0b3JlLmFkZFBsYXllcihwbGF5ZXIpO1xuICB9XG59KTtcblxuLy8gRXZlbnQ6IFVwZGF0ZSB0aGUgc3RhdHVzXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmVmcmVzaCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAvLyBzb3J0aW5nIHRoZSBhcnJheSBmcm9tIGhpZ2hlc3QgdG8gbG93ZXN0XG4gIFBsYXllci5zb3J0KChhLCBiKSA9PiBhLmluZGV4IC0gYi5pbmRleCk7XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==