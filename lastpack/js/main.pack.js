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


__webpack_require__(1);

var _router = __webpack_require__(2);

var _router2 = _interopRequireDefault(_router);

__webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var indexCheckFunc = {
  login: function login() {
    $('.container-body').css({
      display: 'none'
    });
    $('.login').css({
      display: 'block'
    });
  }
};

var init = function init() {
  $(document.body).css({
    height: $(window).height() + 'px'
  });

  var indexRoute = new _router2.default('login');
  indexRoute.init();
  indexRoute.route('/', indexCheckFunc.login);
  indexRoute.changeRoute('/');
};
init();

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Router = function () {
  function Router(rootHash) {
    _classCallCheck(this, Router);

    this.rootHash = rootHash;
    this.routeCall = {};
  }

  _createClass(Router, [{
    key: 'route',
    value: function route(nowHash, callback) {
      if (nowHash === '/') {
        nowHash = '';
      }
      var nowKey = '' + this.rootHash + nowHash;
      this.routeCall[nowKey] = callback;
    }
  }, {
    key: 'changeRoute',
    value: function changeRoute(nowHash) {
      if (nowHash === '/') {
        nowHash = '';
      }
      var nowPath = '#' + this.rootHash + '/' + nowHash;
      var nowKey = '' + this.rootHash + nowHash;
      if (!this.routeCall[nowKey]) {
        return;
      }
      document.location.hash = nowPath;
      this.nowKey = nowKey;
    }
  }, {
    key: 'refresh',
    value: function refresh() {
      console.log('refresh');
      this.routeCall[this.nowKey] && this.routeCall[this.nowKey]();
    }
  }, {
    key: 'init',
    value: function init() {
      window.addEventListener('load', this.refresh.bind(this), false);
      window.addEventListener('hashchange', this.refresh.bind(this), false);
    }
  }]);

  return Router;
}();

exports.default = Router;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @Author: liruihao02
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @Date:   2018-04-04
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @Last Modified by:   liruihao02
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @Last Modified time: 2018-04-05
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


__webpack_require__(4);

var _loginBackground = __webpack_require__(5);

var _loginBackground2 = _interopRequireDefault(_loginBackground);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Login = function () {
  function Login() {
    _classCallCheck(this, Login);
  }

  _createClass(Login, null, [{
    key: 'init',
    value: function init() {
      (0, _loginBackground2.default)();
    }
  }]);

  return Login;
}();

Login.init();

/***/ }),
/* 4 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/*
 * @Author: liruihao02
 * @Date:   2018-04-05
 * @Last Modified by:   liruihao02
 * @Last Modified time: 2018-04-05
 */

var animateObj = {
  init: function init() {
    this.start();
  },
  start: function start() {
    var imgIndex = $('.login-backgroud-img').length - 1;
    this.slideImg(imgIndex);
  },
  slideImg: function slideImg(imgIndex) {
    var _this = this;

    if (imgIndex === 0) {
      $($('.login-backgroud-img').get(4)).animate({
        opacity: '1'
      }, 4000);
    }
    $($('.login-backgroud-img').get(imgIndex)).animate({
      opacity: '0'
    }, 4000, function () {
      imgIndex = imgIndex - 1;
      if (imgIndex === -1) {
        $('.login-backgroud-img').css({
          opacity: '1'
        });
        imgIndex = 4;
      }
      _this.slideImg(imgIndex);
    });
  }
};

exports.default = function () {
  animateObj.init();
};

/***/ })
/******/ ]);