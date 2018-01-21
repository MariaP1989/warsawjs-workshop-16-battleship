/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/******/(function (modules) {
	// webpackBootstrap
	/******/ // The module cache
	/******/var installedModules = {};

	/******/ // The require function
	/******/function __webpack_require__(moduleId) {

		/******/ // Check if module is in cache
		/******/if (installedModules[moduleId])
			/******/return installedModules[moduleId].exports;

		/******/ // Create a new module (and put it into the cache)
		/******/var module = installedModules[moduleId] = {
			/******/exports: {},
			/******/id: moduleId,
			/******/loaded: false
			/******/ };

		/******/ // Execute the module function
		/******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

		/******/ // Flag the module as loaded
		/******/module.loaded = true;

		/******/ // Return the exports of the module
		/******/return module.exports;
		/******/
	}

	/******/ // expose the modules object (__webpack_modules__)
	/******/__webpack_require__.m = modules;

	/******/ // expose the module cache
	/******/__webpack_require__.c = installedModules;

	/******/ // __webpack_public_path__
	/******/__webpack_require__.p = "";

	/******/ // Load entry module and return exports
	/******/return __webpack_require__(0);
	/******/
})(
/************************************************************************/
/******/[
/* 0 */
/***/function (module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);

	/***/
},
/* 1 */
/***/function (module, exports, __webpack_require__) {

	'use strict';

	var _GameField = __webpack_require__(2);

	var _GameField2 = _interopRequireDefault(_GameField);

	var _ShipSet = __webpack_require__(5);

	var _ShipSet2 = _interopRequireDefault(_ShipSet);

	var _GameState = __webpack_require__(4);

	var _GameState2 = _interopRequireDefault(_GameState);

	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : { default: obj };
	}

	var main = function main() {
		var app = document.getElementById('app');
		var wrapper = document.createElement('div');
		wrapper.className = "wrapper";

		var notification = document.createElement('div');
		notification.className = "notification";
		_GameState2.default.startGame();
		notification.innerHTML = _GameState2.default.shootingTurn;

		wrapper.append((0, _GameField2.default)('computer'));
		wrapper.append((0, _GameField2.default)('user'));

		app.append(notification);
		app.append(wrapper);
	};

	main();

	/***/
},
/* 2 */
/***/function (module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _CellField = __webpack_require__(3);

	var _CellField2 = _interopRequireDefault(_CellField);

	var _GameState = __webpack_require__(4);

	var _GameState2 = _interopRequireDefault(_GameState);

	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : { default: obj };
	}

	var GameField = function GameField(type) {
		var field = document.createElement("div");
		field.className = 'field ' + type;
		var shipSet = _GameState2.default.shipsSet[type];
		shipSet.shipsPlacement.forEach(function (row, index, array) {
			row.forEach(function (cell, index, array) {
				field.append(new _CellField2.default(cell, type).htmlNode);
			});
		});

		return field;
	};

	exports.default = GameField;

	/***/
},
/* 3 */
/***/function (module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () {
		function defineProperties(target, props) {
			for (var i = 0; i < props.length; i++) {
				var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
			}
		}return function (Constructor, protoProps, staticProps) {
			if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
		};
	}();

	function _classCallCheck(instance, Constructor) {
		if (!(instance instanceof Constructor)) {
			throw new TypeError("Cannot call a class as a function");
		}
	}

	var CellField = function () {
		function CellField(ship, fieldType) {
			_classCallCheck(this, CellField);

			this.htmlNode = document.createElement('div');
			this.htmlNode.className = 'cell ' + (fieldType === 'computer' ? '' : ship ? 'has-ship' : '');
			if (fieldType === 'computer') {
				this.htmlNode.addEventListener('click', this.atemptCell.bind(this));
			}
			this.ship = ship;
		}

		_createClass(CellField, [{
			key: 'atemptCell',
			value: function atemptCell() {
				this.htmlNode.className += '' + (this.ship ? ' hit' : ' miss');
			}
		}]);

		return CellField;
	}();

	exports.default = CellField;

	/***/
},
/* 4 */
/***/function (module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () {
		function defineProperties(target, props) {
			for (var i = 0; i < props.length; i++) {
				var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
			}
		}return function (Constructor, protoProps, staticProps) {
			if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
		};
	}();

	var _ShipSet = __webpack_require__(5);

	var _ShipSet2 = _interopRequireDefault(_ShipSet);

	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : { default: obj };
	}

	function _classCallCheck(instance, Constructor) {
		if (!(instance instanceof Constructor)) {
			throw new TypeError("Cannot call a class as a function");
		}
	}

	var GameState = function () {
		function GameState() {
			_classCallCheck(this, GameState);

			this.shootingTurn = null;
			this.shipsSet = {
				user: new _ShipSet2.default(),
				computer: new _ShipSet2.default()
			};
		}

		_createClass(GameState, [{
			key: 'startGame',
			value: function startGame() {
				var players = ['computer', 'user'];
				this.shootingTurn = players[Math.round(Math.random())];
			}
		}, {
			key: 'switchTurn',
			value: function switchTurn() {
				this.shootingTurn = '' + (this.shootingTurn === 'computer' ? 'user' : 'computer');
			}
		}]);

		return GameState;
	}();

	exports.default = new GameState();

	/***/
},
/* 5 */
/***/function (module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () {
		function defineProperties(target, props) {
			for (var i = 0; i < props.length; i++) {
				var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
			}
		}return function (Constructor, protoProps, staticProps) {
			if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
		};
	}();

	var _Ship = __webpack_require__(6);

	var _Ship2 = _interopRequireDefault(_Ship);

	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : { default: obj };
	}

	function _classCallCheck(instance, Constructor) {
		if (!(instance instanceof Constructor)) {
			throw new TypeError("Cannot call a class as a function");
		}
	}

	var ShipSet = function () {
		function ShipSet() {
			_classCallCheck(this, ShipSet);

			this.shipsPlacement = new Array(10);
			for (var i = 0; i < 10; i++) {
				this.shipsPlacement[i] = new Array(10);
				for (var j = 0; j < 10; j++) {
					this.shipsPlacement[i][j] = 0;
				}
			}
			this.generateSeveralShips(20);
		}

		_createClass(ShipSet, [{
			key: 'generateRandomShip',
			value: function generateRandomShip() {
				var ship = void 0;
				do {
					ship = new _Ship2.default(Math.floor(Math.random() * 10), Math.floor(Math.random() * 10));
				} while (!ship.isOnField());
				return ship;
			}
		}, {
			key: 'generateSeveralShips',
			value: function generateSeveralShips(number) {
				var ships = [];
				for (var i = 0; i < number; i++) {
					do {
						ships[i] = this.generateRandomShip();
					} while (!this.spaceIsAvailable(ships[i]));{
						this.assignePlacement(ships[i]);
					};
				}
			}
		}, {
			key: 'spaceIsAvailable',
			value: function spaceIsAvailable(ship) {
				if (this.shipsPlacement[ship.x][ship.y] !== null) {
					return false;
				} else {
					return true;
				}
			}
		}, {
			key: 'assignePlacement',
			value: function assignePlacement(ship) {
				this.shipsPlacement[ship.x][ship.y] = 2;
			}
		}]);

		return ShipSet;
	}();

	exports.default = ShipSet;

	/***/
},
/* 6 */
/***/function (module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () {
		function defineProperties(target, props) {
			for (var i = 0; i < props.length; i++) {
				var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
			}
		}return function (Constructor, protoProps, staticProps) {
			if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
		};
	}();

	function _classCallCheck(instance, Constructor) {
		if (!(instance instanceof Constructor)) {
			throw new TypeError("Cannot call a class as a function");
		}
	}

	var Ship = function () {
		function Ship(x, y) {
			_classCallCheck(this, Ship);

			this.x = x;
			this.y = y;
			this.attempted = false;
		}

		_createClass(Ship, [{
			key: "isOnField",
			value: function isOnField() {
				return this.x >= 0 && this.x < 10 && this.y >= 0 && this.y < 10;
			}
		}, {
			key: "attemptShip",
			value: function attemptShip() {
				this.attempted = true;
			}
		}]);

		return Ship;
	}();

	;

	exports.default = Ship;

	/***/
}]
/******/);

/***/ })
/******/ ]);