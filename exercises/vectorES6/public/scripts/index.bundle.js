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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var Vector = __webpack_require__(/*! ./vector.js */ \"./vector.js\");\n\n(function (global) {\n  function onChangePoint(tr) {\n    var inputs = tr.querySelectorAll('input');\n    var coord1 = getCoordinate(inputs[0].value);\n    var coord2 = getCoordinate(inputs[1].value);\n\n    if (coord1 && coord2) {\n      var vector = new Vector(coord1[0], coord1[1], coord2[0], coord2[1]);\n      inputs[2].value = vector.toString();\n      return vector;\n    }\n\n    return null;\n  }\n\n  function getCoordinate(value) {\n    var reg = /(\\+|-)?\\d+(\\.\\d+)?/g;\n    var result = value.match(reg);\n\n    if (result && result.length === 2) {\n      return result;\n    }\n\n    return null;\n  }\n\n  function createRow() {\n    var table = document.getElementById('table');\n    var tr = document.createElement('tr');\n\n    for (var i = 0; i < 4; i++) {\n      var td = document.createElement('td');\n      var input = void 0;\n\n      if (i !== 3) {\n        input = document.createElement('input');\n        input.type = 'text';\n      } else {\n        input = document.createElement('button');\n        input.type = 'button';\n      }\n\n      switch (i) {\n        case 0:\n          input.placeholder = 'first point';\n          input.addEventListener('input', onChangePoint.bind(null, tr));\n          break;\n\n        case 1:\n          input.placeholder = 'second point';\n          input.addEventListener('input', onChangePoint.bind(null, tr));\n          break;\n\n        case 2:\n          input.placeholder = 'vector(x, y)';\n          input.readOnly = true;\n          break;\n\n        case 3:\n          input.innerHTML = 'Remove';\n          input.addEventListener('click', removeRow.bind(null, tr));\n          break;\n      }\n\n      td.appendChild(input);\n      tr.appendChild(td);\n    }\n\n    table.appendChild(tr);\n  }\n\n  function removeRow(row) {\n    var table = document.getElementById('table');\n    table.removeChild(row);\n  }\n\n  function getSum() {\n    var trows = document.getElementsByTagName('tr');\n    var vectors = [];\n\n    for (var i = 0; i < trows.length; i++) {\n      var vector = onChangePoint(trows[i]);\n\n      if (vector) {\n        vectors.push(vector);\n      } else {\n        document.getElementById('result').innerText = 'Error: you have invalid rows';\n        return;\n      }\n    }\n\n    if (!trows.length) {\n      document.getElementById('result').innerText = 'Error: you hasn\\'t rows';\n      return;\n    }\n\n    var firstVector = vectors.pop();\n    document.getElementById('result').innerText = 'Sum:' + firstVector.plus.apply(firstVector, vectors).toString();\n  }\n\n  document.getElementById('add-vector').addEventListener('click', createRow);\n  document.getElementById('get-sum').addEventListener('click', getSum);\n})(this);\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./vector.js":
/*!*******************!*\
  !*** ./vector.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Vector =\n/*#__PURE__*/\nfunction () {\n  function Vector(x1, y1, x2, y2) {\n    _classCallCheck(this, Vector);\n\n    this.x = x2 - x1;\n    this.y = y2 - y1;\n  }\n\n  _createClass(Vector, [{\n    key: \"plus\",\n    value: function plus() {\n      var result = new Vector(0, 0, this.x, this.y);\n\n      for (var i = 0; i < arguments.length; i++) {\n        result.x += arguments[i].x;\n        result.y += arguments[i].y;\n      }\n\n      return result;\n    }\n  }, {\n    key: \"toString\",\n    value: function toString() {\n      return 'vector (' + this.x + ', ' + this.y + ')';\n    }\n  }, {\n    key: \"isEqual\",\n    value: function isEqual(b) {\n      return this.x === b.x && this.y === b.y;\n    }\n  }, {\n    key: \"length\",\n    get: function get() {\n      return Math.sqrt(this.x * this.x + this.y * this.y);\n    }\n  }]);\n\n  return Vector;\n}();\n\nmodule.exports = Vector;\n\n//# sourceURL=webpack:///./vector.js?");

/***/ })

/******/ });