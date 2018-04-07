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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
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
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var studentCheckFunc = {
  setting: function setting() {
    $('.student-rightbox').css({
      display: 'none'
    });
    $('.student-setting').css({
      display: 'block'
    });
  }
};

var indexCheckFunc = {
  login: function login() {
    $('.container-body').css({
      display: 'none'
    });
    $('.login').css({
      display: 'block'
    });
  },
  student: function student() {
    $('.container-body').css({
      display: 'none'
    });
    $('.student').css({
      display: 'block'
    });
    studentCheckFunc.setting();
  },
  teacher: function teacher() {
    $('.container-body').css({
      display: 'none'
    });
    $('.teacher').css({
      display: 'block'
    });
  }
};

exports.indexCheckFunc = indexCheckFunc;
exports.studentCheckFunc = studentCheckFunc;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchAPI = undefined;

__webpack_require__(9);

var fetchAPI = exports.fetchAPI = function fetchAPI(fetchUrl, fetchData) {
  var fetchString = '';
  for (var name in fetchData) {
    fetchString += name + '=' + fetchData[name] + '&';
  }
  fetchString = fetchString.slice(0, fetchString.length - 1);
  return fetch(fetchUrl, {
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    method: 'POST',
    body: fetchString
  }).then(function (response) {
    return response.text();
  });
}; /*
    * @Author: liruihao02
    * @Date:   2018-04-05
    * @Last Modified by:   liruihao02
    * @Last Modified time: 2018-04-07
    */

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @Author: liruihao02
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @Date:   2018-04-04
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @Last Modified by:   liruihao02
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @Last Modified time: 2018-04-07
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


__webpack_require__(7);

var _loginBackground = __webpack_require__(8);

var _loginBackground2 = _interopRequireDefault(_loginBackground);

var _router = __webpack_require__(0);

var _router2 = _interopRequireDefault(_router);

var _fetchApi = __webpack_require__(2);

var _routerView = __webpack_require__(1);

var _student = __webpack_require__(4);

var _student2 = _interopRequireDefault(_student);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var elstyleChange = {
  errortextBlock: function errortextBlock(text) {
    $('.error-text').html(text);
    $('.error-text')[0].id = 'error-active';
  },
  errortextNone: function errortextNone() {
    $('.error-text').html('');
    $('.error-text')[0].id = '';
  }
};

var Login = function () {
  function Login() {
    _classCallCheck(this, Login);
  }

  _createClass(Login, null, [{
    key: 'init',
    value: function init() {
      (0, _loginBackground2.default)();
      this.bindHandle();
      this.remeberState = true;
    }
  }, {
    key: 'bindHandle',
    value: function bindHandle() {
      var _this = this;

      $('.login-submit').bind('click', function () {
        _this.login();
      });
      $('.login-input').bind('input', function () {
        _this.inputChangehandle();
      });
      $('.remimg').bind('click', function () {
        _this.remeberClickhandle();
      });
    }
  }, {
    key: 'login',
    value: function login() {
      var _this2 = this;

      var signObj = {
        id: $('.login-username').val(),
        pass: $('.login-password').val()
      };

      (0, _fetchApi.fetchAPI)('http://222.24.63.100:9138/cms/login', signObj).then(function (data) {
        _this2.token = data;

        var per = data.toString().slice(0, 1);
        console.log(per);
        if (per === '0') {
          elstyleChange.errortextBlock('账号或密码错误，请检查');
          return;
        } else if (per === '2') {
          _this2.route = new _router2.default('teacher');
          _this2.route.init();
          _this2.route.route('/', _routerView.indexCheckFunc.teacher);
          _this2.route.changeRoute('/');
          $.cookie('per', 'teacher', {
            expires: 1
          });
        } else if (per === '1') {
          _this2.route = new _router2.default('student');
          _this2.route.init();
          _this2.route.route('/', _routerView.indexCheckFunc.student);
          _this2.route.changeRoute('/');
          $.cookie('per', 'student', {
            expires: 1
          });
          _student2.default.init({
            id: signObj.id,
            token: _this2.token
          });
        }
        $.cookie('token', _this2.token, {
          expires: 1
        });
        $.cookie('id', signObj.id, {
          expires: 1
        });
      });
    }
  }, {
    key: 'inputChangehandle',
    value: function inputChangehandle() {
      if (!$('.error-text')[0].id) {
        return;
      } else {
        elstyleChange.errortextNone();
      }
    }
  }, {
    key: 'remeberClickhandle',
    value: function remeberClickhandle() {
      this.remeberState = !this.remeberState;
      if (this.remeberState) {
        $('.login-reimg').attr('src', './image/rempass_on.png');
      } else {
        $('.login-reimg').attr('src', './image/rempass_off.png');
      }
    }
  }]);

  return Login;
}();
// Login.init();


exports.default = Login;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(10);

__webpack_require__(11);

var _router = __webpack_require__(0);

var _router2 = _interopRequireDefault(_router);

var _exitlogin = __webpack_require__(12);

var _exitlogin2 = _interopRequireDefault(_exitlogin);

var _fetchApi = __webpack_require__(2);

var _routerView = __webpack_require__(1);

var _studentSetting = __webpack_require__(13);

var _studentSetting2 = _interopRequireDefault(_studentSetting);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LeftContainer = {
  menuClickHandle: function menuClickHandle(event, tokenObj) {
    var target = event.target;
    if (!target.className.match('menu-li')) {
      target = this.findTargetli(target);
    }
    this.changeActive(target); //改变样式

    var targetName = target.getAttribute('name');
    console.log(targetName);
    switch (targetName) {
      case 'exitlogin':
        (0, _exitlogin2.default)();
        break;
      case 'setting':
        Student.studentRoute.changeRoute('setting');
        (0, _studentSetting2.default)(tokenObj);
        break;
      default:
        break;
    }
  },

  findTargetli: function findTargetli(target) {
    while (!target.className.match('menu-li')) {
      target = target.parentNode;
    }
    return target;
  },

  changeActive: function changeActive(target) {
    var liArr = $('.menu-li');
    for (var i = 0; i < liArr.length; i++) {
      liArr[i].className = 'menu-li';
    }
    target.className = 'menu-li active-li';
  }
};

var Student = function () {
  function Student() {
    _classCallCheck(this, Student);
  }

  _createClass(Student, null, [{
    key: 'init',
    value: function init(tokenObj) {
      this.bindHandle(tokenObj);
      this.initRoute();
      this.routeBack(tokenObj);
    }
  }, {
    key: 'initRoute',
    value: function initRoute() {
      this.studentRoute = new _router2.default('student');
      this.studentRoute.init();
      this.studentRoute.route('setting', _routerView.studentCheckFunc.setting);
    }
  }, {
    key: 'routeBack',
    value: function routeBack(tokenObj) {
      var firLi = $('.menu-li').get(0);
      LeftContainer.changeActive(firLi);

      this.studentRoute.changeRoute('setting');
      (0, _studentSetting2.default)(tokenObj);
    }
  }, {
    key: 'bindHandle',
    value: function bindHandle(tokenObj) {
      $('.menu-ul').bind('click', function (event) {
        LeftContainer.menuClickHandle(event, tokenObj);
      });
    }
  }]);

  return Student;
}();

exports.default = Student;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(6);

var _router = __webpack_require__(0);

var _router2 = _interopRequireDefault(_router);

var _routerView = __webpack_require__(1);

var _login = __webpack_require__(3);

var _login2 = _interopRequireDefault(_login);

var _student = __webpack_require__(4);

var _student2 = _interopRequireDefault(_student);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var init = function init() {
  if (!$.cookie('per')) {
    $.cookie('per', 'login');
  }
  var indexRoute = null;
  $(document.body).css({
    height: $(window).height() + 'px'
  });

  if (!$.cookie('token') || $.cookie('token') === 'null') {
    indexRoute = new _router2.default('login');
    _login2.default.init();
  } else if ($.cookie('token') && $.cookie('per') === 'teacher') {
    indexRoute = new _router2.default('teacher');
  } else if ($.cookie('token') && $.cookie('per') === 'student') {
    indexRoute = new _router2.default('student');
    _student2.default.init({
      id: $.cookie('id'),
      token: $.cookie('token')
    });
  }
  indexRoute.init();
  indexRoute.route('/', _routerView.indexCheckFunc[$.cookie('per')]);
  indexRoute.changeRoute('/');
};
init();

/***/ }),
/* 6 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 7 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 8 */
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

/***/ }),
/* 9 */
/***/ (function(module, exports) {

(function(self) {
  'use strict';

  if (self.fetch) {
    return
  }

  var support = {
    searchParams: 'URLSearchParams' in self,
    iterable: 'Symbol' in self && 'iterator' in Symbol,
    blob: 'FileReader' in self && 'Blob' in self && (function() {
      try {
        new Blob()
        return true
      } catch(e) {
        return false
      }
    })(),
    formData: 'FormData' in self,
    arrayBuffer: 'ArrayBuffer' in self
  }

  if (support.arrayBuffer) {
    var viewClasses = [
      '[object Int8Array]',
      '[object Uint8Array]',
      '[object Uint8ClampedArray]',
      '[object Int16Array]',
      '[object Uint16Array]',
      '[object Int32Array]',
      '[object Uint32Array]',
      '[object Float32Array]',
      '[object Float64Array]'
    ]

    var isDataView = function(obj) {
      return obj && DataView.prototype.isPrototypeOf(obj)
    }

    var isArrayBufferView = ArrayBuffer.isView || function(obj) {
      return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1
    }
  }

  function normalizeName(name) {
    if (typeof name !== 'string') {
      name = String(name)
    }
    if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)) {
      throw new TypeError('Invalid character in header field name')
    }
    return name.toLowerCase()
  }

  function normalizeValue(value) {
    if (typeof value !== 'string') {
      value = String(value)
    }
    return value
  }

  // Build a destructive iterator for the value list
  function iteratorFor(items) {
    var iterator = {
      next: function() {
        var value = items.shift()
        return {done: value === undefined, value: value}
      }
    }

    if (support.iterable) {
      iterator[Symbol.iterator] = function() {
        return iterator
      }
    }

    return iterator
  }

  function Headers(headers) {
    this.map = {}

    if (headers instanceof Headers) {
      headers.forEach(function(value, name) {
        this.append(name, value)
      }, this)
    } else if (Array.isArray(headers)) {
      headers.forEach(function(header) {
        this.append(header[0], header[1])
      }, this)
    } else if (headers) {
      Object.getOwnPropertyNames(headers).forEach(function(name) {
        this.append(name, headers[name])
      }, this)
    }
  }

  Headers.prototype.append = function(name, value) {
    name = normalizeName(name)
    value = normalizeValue(value)
    var oldValue = this.map[name]
    this.map[name] = oldValue ? oldValue+','+value : value
  }

  Headers.prototype['delete'] = function(name) {
    delete this.map[normalizeName(name)]
  }

  Headers.prototype.get = function(name) {
    name = normalizeName(name)
    return this.has(name) ? this.map[name] : null
  }

  Headers.prototype.has = function(name) {
    return this.map.hasOwnProperty(normalizeName(name))
  }

  Headers.prototype.set = function(name, value) {
    this.map[normalizeName(name)] = normalizeValue(value)
  }

  Headers.prototype.forEach = function(callback, thisArg) {
    for (var name in this.map) {
      if (this.map.hasOwnProperty(name)) {
        callback.call(thisArg, this.map[name], name, this)
      }
    }
  }

  Headers.prototype.keys = function() {
    var items = []
    this.forEach(function(value, name) { items.push(name) })
    return iteratorFor(items)
  }

  Headers.prototype.values = function() {
    var items = []
    this.forEach(function(value) { items.push(value) })
    return iteratorFor(items)
  }

  Headers.prototype.entries = function() {
    var items = []
    this.forEach(function(value, name) { items.push([name, value]) })
    return iteratorFor(items)
  }

  if (support.iterable) {
    Headers.prototype[Symbol.iterator] = Headers.prototype.entries
  }

  function consumed(body) {
    if (body.bodyUsed) {
      return Promise.reject(new TypeError('Already read'))
    }
    body.bodyUsed = true
  }

  function fileReaderReady(reader) {
    return new Promise(function(resolve, reject) {
      reader.onload = function() {
        resolve(reader.result)
      }
      reader.onerror = function() {
        reject(reader.error)
      }
    })
  }

  function readBlobAsArrayBuffer(blob) {
    var reader = new FileReader()
    var promise = fileReaderReady(reader)
    reader.readAsArrayBuffer(blob)
    return promise
  }

  function readBlobAsText(blob) {
    var reader = new FileReader()
    var promise = fileReaderReady(reader)
    reader.readAsText(blob)
    return promise
  }

  function readArrayBufferAsText(buf) {
    var view = new Uint8Array(buf)
    var chars = new Array(view.length)

    for (var i = 0; i < view.length; i++) {
      chars[i] = String.fromCharCode(view[i])
    }
    return chars.join('')
  }

  function bufferClone(buf) {
    if (buf.slice) {
      return buf.slice(0)
    } else {
      var view = new Uint8Array(buf.byteLength)
      view.set(new Uint8Array(buf))
      return view.buffer
    }
  }

  function Body() {
    this.bodyUsed = false

    this._initBody = function(body) {
      this._bodyInit = body
      if (!body) {
        this._bodyText = ''
      } else if (typeof body === 'string') {
        this._bodyText = body
      } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
        this._bodyBlob = body
      } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
        this._bodyFormData = body
      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
        this._bodyText = body.toString()
      } else if (support.arrayBuffer && support.blob && isDataView(body)) {
        this._bodyArrayBuffer = bufferClone(body.buffer)
        // IE 10-11 can't handle a DataView body.
        this._bodyInit = new Blob([this._bodyArrayBuffer])
      } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
        this._bodyArrayBuffer = bufferClone(body)
      } else {
        throw new Error('unsupported BodyInit type')
      }

      if (!this.headers.get('content-type')) {
        if (typeof body === 'string') {
          this.headers.set('content-type', 'text/plain;charset=UTF-8')
        } else if (this._bodyBlob && this._bodyBlob.type) {
          this.headers.set('content-type', this._bodyBlob.type)
        } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
          this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8')
        }
      }
    }

    if (support.blob) {
      this.blob = function() {
        var rejected = consumed(this)
        if (rejected) {
          return rejected
        }

        if (this._bodyBlob) {
          return Promise.resolve(this._bodyBlob)
        } else if (this._bodyArrayBuffer) {
          return Promise.resolve(new Blob([this._bodyArrayBuffer]))
        } else if (this._bodyFormData) {
          throw new Error('could not read FormData body as blob')
        } else {
          return Promise.resolve(new Blob([this._bodyText]))
        }
      }

      this.arrayBuffer = function() {
        if (this._bodyArrayBuffer) {
          return consumed(this) || Promise.resolve(this._bodyArrayBuffer)
        } else {
          return this.blob().then(readBlobAsArrayBuffer)
        }
      }
    }

    this.text = function() {
      var rejected = consumed(this)
      if (rejected) {
        return rejected
      }

      if (this._bodyBlob) {
        return readBlobAsText(this._bodyBlob)
      } else if (this._bodyArrayBuffer) {
        return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer))
      } else if (this._bodyFormData) {
        throw new Error('could not read FormData body as text')
      } else {
        return Promise.resolve(this._bodyText)
      }
    }

    if (support.formData) {
      this.formData = function() {
        return this.text().then(decode)
      }
    }

    this.json = function() {
      return this.text().then(JSON.parse)
    }

    return this
  }

  // HTTP methods whose capitalization should be normalized
  var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT']

  function normalizeMethod(method) {
    var upcased = method.toUpperCase()
    return (methods.indexOf(upcased) > -1) ? upcased : method
  }

  function Request(input, options) {
    options = options || {}
    var body = options.body

    if (input instanceof Request) {
      if (input.bodyUsed) {
        throw new TypeError('Already read')
      }
      this.url = input.url
      this.credentials = input.credentials
      if (!options.headers) {
        this.headers = new Headers(input.headers)
      }
      this.method = input.method
      this.mode = input.mode
      if (!body && input._bodyInit != null) {
        body = input._bodyInit
        input.bodyUsed = true
      }
    } else {
      this.url = String(input)
    }

    this.credentials = options.credentials || this.credentials || 'omit'
    if (options.headers || !this.headers) {
      this.headers = new Headers(options.headers)
    }
    this.method = normalizeMethod(options.method || this.method || 'GET')
    this.mode = options.mode || this.mode || null
    this.referrer = null

    if ((this.method === 'GET' || this.method === 'HEAD') && body) {
      throw new TypeError('Body not allowed for GET or HEAD requests')
    }
    this._initBody(body)
  }

  Request.prototype.clone = function() {
    return new Request(this, { body: this._bodyInit })
  }

  function decode(body) {
    var form = new FormData()
    body.trim().split('&').forEach(function(bytes) {
      if (bytes) {
        var split = bytes.split('=')
        var name = split.shift().replace(/\+/g, ' ')
        var value = split.join('=').replace(/\+/g, ' ')
        form.append(decodeURIComponent(name), decodeURIComponent(value))
      }
    })
    return form
  }

  function parseHeaders(rawHeaders) {
    var headers = new Headers()
    // Replace instances of \r\n and \n followed by at least one space or horizontal tab with a space
    // https://tools.ietf.org/html/rfc7230#section-3.2
    var preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/g, ' ')
    preProcessedHeaders.split(/\r?\n/).forEach(function(line) {
      var parts = line.split(':')
      var key = parts.shift().trim()
      if (key) {
        var value = parts.join(':').trim()
        headers.append(key, value)
      }
    })
    return headers
  }

  Body.call(Request.prototype)

  function Response(bodyInit, options) {
    if (!options) {
      options = {}
    }

    this.type = 'default'
    this.status = options.status === undefined ? 200 : options.status
    this.ok = this.status >= 200 && this.status < 300
    this.statusText = 'statusText' in options ? options.statusText : 'OK'
    this.headers = new Headers(options.headers)
    this.url = options.url || ''
    this._initBody(bodyInit)
  }

  Body.call(Response.prototype)

  Response.prototype.clone = function() {
    return new Response(this._bodyInit, {
      status: this.status,
      statusText: this.statusText,
      headers: new Headers(this.headers),
      url: this.url
    })
  }

  Response.error = function() {
    var response = new Response(null, {status: 0, statusText: ''})
    response.type = 'error'
    return response
  }

  var redirectStatuses = [301, 302, 303, 307, 308]

  Response.redirect = function(url, status) {
    if (redirectStatuses.indexOf(status) === -1) {
      throw new RangeError('Invalid status code')
    }

    return new Response(null, {status: status, headers: {location: url}})
  }

  self.Headers = Headers
  self.Request = Request
  self.Response = Response

  self.fetch = function(input, init) {
    return new Promise(function(resolve, reject) {
      var request = new Request(input, init)
      var xhr = new XMLHttpRequest()

      xhr.onload = function() {
        var options = {
          status: xhr.status,
          statusText: xhr.statusText,
          headers: parseHeaders(xhr.getAllResponseHeaders() || '')
        }
        options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL')
        var body = 'response' in xhr ? xhr.response : xhr.responseText
        resolve(new Response(body, options))
      }

      xhr.onerror = function() {
        reject(new TypeError('Network request failed'))
      }

      xhr.ontimeout = function() {
        reject(new TypeError('Network request failed'))
      }

      xhr.open(request.method, request.url, true)

      if (request.credentials === 'include') {
        xhr.withCredentials = true
      } else if (request.credentials === 'omit') {
        xhr.withCredentials = false
      }

      if ('responseType' in xhr && support.blob) {
        xhr.responseType = 'blob'
      }

      request.headers.forEach(function(value, name) {
        xhr.setRequestHeader(name, value)
      })

      xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit)
    })
  }
  self.fetch.polyfill = true
})(typeof self !== 'undefined' ? self : this);


/***/ }),
/* 10 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 11 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _router = __webpack_require__(0);

var _router2 = _interopRequireDefault(_router);

var _routerView = __webpack_require__(1);

var _login = __webpack_require__(3);

var _login2 = _interopRequireDefault(_login);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  var route = new _router2.default('login');
  route.init();
  route.route('/', _routerView.indexCheckFunc.login);
  route.changeRoute('/');

  $.cookie('per', 'login');
  $.cookie('token', null);
  _login2.default.init();
}; /*
    * @Author: liruihao02
    * @Date:   2018-04-06
    * @Last Modified by:   liruihao02
    * @Last Modified time: 2018-04-06
    */

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fetchApi = __webpack_require__(2);

var eventHandle = {
  infoClickHandle: function infoClickHandle() {
    $('.student-change-info').css('display', 'block');
    $('.student-change-info').animate({
      opacity: '1'
    }, 1000);
  },
  changeInfoClickHandle: function changeInfoClickHandle() {}
}; /*
    * @Author: liruihao02
    * @Date:   2018-04-06
    * @Last Modified by:   liruihao02
    * @Last Modified time: 2018-04-07
    */


var Setting = {
  init: function init(tokenObj) {
    this.getStudentInfo(tokenObj);
    this.bindHandle();
  },
  bindHandle: function bindHandle() {
    $('.student-info-button').bind('click', function () {
      eventHandle.infoClickHandle();
    });
  },
  getStudentInfo: function getStudentInfo(tokenObj) {
    var _this = this;

    (0, _fetchApi.fetchAPI)('http://222.24.63.100:9138/cms/getprofile', tokenObj).then(function (stuInfo) {
      console.log(stuInfo);
      if (stuInfo.toString().slice(0, 1) === '0') {
        return {
          id: '获取信息失败',
          class: '获取信息失败',
          name: '获取信息失败'
        };
      } else {
        return {
          id: stuInfo.split(' ')[0],
          class: stuInfo.split(' ')[1].split('`')[0],
          name: stuInfo.split(' ')[1].split('`')[1]
        };
      }
    }).then(function (infoJson) {
      _this.setData(infoJson);
    });
  },
  setData: function setData(infoJson) {
    $($('.student-info-li').get(0)).find('span').get(1).innerHTML = infoJson.id;
    $($('.student-info-li').get(1)).find('span').get(1).innerHTML = infoJson.name;
    $($('.student-info-li').get(2)).find('span').get(1).innerHTML = infoJson.class;
  }
};

exports.default = function (tokenObj) {
  Setting.init(tokenObj);
};

/***/ })
/******/ ]);