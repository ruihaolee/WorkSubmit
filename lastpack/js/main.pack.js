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
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchAPI = undefined;

__webpack_require__(15);

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
    * @Last Modified time: 2018-04-14
    */

/***/ }),
/* 1 */
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
/* 2 */
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
  },
  course: function course() {
    // console.log('course view');
    $('.student-rightbox').css({
      display: 'none'
    });
    $('.student-course').css({
      display: 'block'
    });
  },
  writework: function writework() {
    $('.student-rightbox').css({
      display: 'none'
    });
    $('.student-writework').css({
      display: 'block'
    });
  },
  works: function works() {
    $('.student-rightbox').css({
      display: 'none'
    });
    $('.student-workinfo').css({
      display: 'block'
    });
  },
  workdetail: function workdetail() {
    $('.student-rightbox').css({
      display: 'none'
    });
    $('.student-workdetail').css({
      display: 'block'
    });
  }
};

var teacherCheckFunc = {
  setting: function setting() {
    $('.teacher-rightbox').css({
      display: 'none'
    });
    $('.teacher-setting').css({
      display: 'block'
    });
  },
  courseyears: function courseyears() {
    $('.teacher-rightbox').css({
      display: 'none'
    });
    $('.teacher-courseyears').css({
      display: 'block'
    });
  },
  class: function _class() {
    $('.teacher-rightbox').css({
      display: 'none'
    });
    $('.teacher-classes').css({
      display: 'block'
    });
  },
  students: function students() {
    $('.teacher-rightbox').css({
      display: 'none'
    });
    $('.teacher-students').css({
      display: 'block'
    });
  },
  works: function works() {
    $('.teacher-rightbox').css({
      display: 'none'
    });
    $('.teacher-works').css({
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
exports.teacherCheckFunc = teacherCheckFunc;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(19);


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @Author: liruihao02
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @Date:   2018-04-04
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @Last Modified by:   liruihao02
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @Last Modified time: 2018-04-21
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


__webpack_require__(13);

var _loginBackground = __webpack_require__(14);

var _loginBackground2 = _interopRequireDefault(_loginBackground);

var _router = __webpack_require__(1);

var _router2 = _interopRequireDefault(_router);

var _fetchApi = __webpack_require__(0);

var _routerView = __webpack_require__(2);

var _student = __webpack_require__(5);

var _student2 = _interopRequireDefault(_student);

var _teacher = __webpack_require__(9);

var _teacher2 = _interopRequireDefault(_teacher);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var firDO = true;

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
      if (firDO) {
        firDO = !firDO;
        (0, _loginBackground2.default)();
        this.bindHandle();
        this.remeberState = true;
      }
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
        // console.log(per);
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
          _teacher2.default.init({
            id: signObj.id,
            token: _this2.token
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
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(6);

__webpack_require__(16);

var _router = __webpack_require__(1);

var _router2 = _interopRequireDefault(_router);

var _exitlogin = __webpack_require__(7);

var _exitlogin2 = _interopRequireDefault(_exitlogin);

var _fetchApi = __webpack_require__(0);

var _routerView = __webpack_require__(2);

var _studentSetting = __webpack_require__(17);

var _studentSetting2 = _interopRequireDefault(_studentSetting);

var _studentCourse = __webpack_require__(18);

var _studentCourse2 = _interopRequireDefault(_studentCourse);

var _studentWorkinfo = __webpack_require__(22);

var _studentWorkinfo2 = _interopRequireDefault(_studentWorkinfo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TokenObj = null;

var LeftContainer = {
  menuClickHandle: function menuClickHandle(event) {
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
        (0, _studentSetting2.default)(TokenObj);
        break;
      case 'course':
        Student.studentRoute.changeRoute('course');
        (0, _studentCourse2.default)(TokenObj, Student.studentRoute);
        break;
      case 'works':
        Student.studentRoute.changeRoute('works');
        (0, _studentWorkinfo2.default)(TokenObj, Student.studentRoute);
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
    var liArr = $('.student-menu-li');
    for (var i = 0; i < liArr.length; i++) {
      liArr[i].className = 'menu-li student-menu-li';
    }
    target.className = 'menu-li student-menu-li active-li';
  }
};

var Student = function () {
  function Student() {
    _classCallCheck(this, Student);
  }

  _createClass(Student, null, [{
    key: 'init',
    value: function init(tokenObj) {
      if (!TokenObj) {
        this.bindHandle();
        this.initRoute();
      }
      TokenObj = tokenObj;
      this.routeBack();
      console.log(TokenObj);
    }
  }, {
    key: 'initRoute',
    value: function initRoute() {
      this.studentRoute = new _router2.default('student');
      this.studentRoute.init();
      this.studentRoute.route('setting', _routerView.studentCheckFunc.setting);
      this.studentRoute.route('course', _routerView.studentCheckFunc.course);
      this.studentRoute.route('writework', _routerView.studentCheckFunc.writework);
      this.studentRoute.route('works', _routerView.studentCheckFunc.works);
      this.studentRoute.route('workdetail', _routerView.studentCheckFunc.workdetail);
    }
  }, {
    key: 'routeBack',
    value: function routeBack() {
      var firLi = $('.student-menu-li').get(0);
      LeftContainer.changeActive(firLi);

      this.studentRoute.changeRoute('setting');
      (0, _studentSetting2.default)(TokenObj);
    }
  }, {
    key: 'bindHandle',
    value: function bindHandle() {
      $('.student-menu-ul').bind('click', function (event) {
        LeftContainer.menuClickHandle(event);
      });
    }
  }]);

  return Student;
}();

exports.default = Student;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _router = __webpack_require__(1);

var _router2 = _interopRequireDefault(_router);

var _routerView = __webpack_require__(2);

var _login = __webpack_require__(4);

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
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fetchApi = __webpack_require__(0);

var firDO = true; /*
                   * @Author: liruihao02
                   * @Date:   2018-04-16
                   * @Last Modified by:   liruihao02
                   * @Last Modified time: 2018-04-21
                   */

var setView = function setView(workDetail) {
  var detailHTML = '\n    <div class="rightbody-title">\u4F5C\u4E1A\u4FE1\u606F\u8BE6\u60C5</div>\n      <div class="workdetail-title">' + workDetail.title + '</div>\n      <div class="workdetail-info">\n          <div class="workdetail-typeid">\u4F5C\u4E1A\u7C7B\u578B: ' + workDetail.typeid + '</div>\n          <div class="workdetail-member">\u6210\u5458: ' + workDetail.member + '</div>\n          <div class="workdetail-submittime">\u63D0\u4EA4\u65E5\u671F\uFF1A' + workDetail.time + '</div>\n      </div>\n    <div class="workdetail-body">' + workDetail.body + '</div>\n    <div class="workdetail-levelbox">\n      <div class="workdetail-level"><span>\u8001\u5E08\u8BC4\u5206\uFF1A</span>' + workDetail.level + '</div>\n      <div class="workdetail-levelsay"><span>\u8001\u5E08\u8BC4\u8BED\uFF1A</span>' + workDetail.levelsay + '</div>\n    </div>\n    ';
  $('.student-workdetail').html(detailHTML);
};

var WorkDetail = {
  init: function init(detailToken) {
    this.detailToken = detailToken;
    this.defaultWorkDetail();
  },
  defaultWorkDetail: function defaultWorkDetail() {
    var _this = this;

    (0, _fetchApi.fetchAPI)('http://222.24.63.100:9138/cms/getworkdetail', this.detailToken).then(function (detail) {
      var detailTemp = detail.split('`');
      detailTemp.pop();
      _this.workDetail = {
        time: detailTemp[0],
        typeid: detailTemp[1],
        title: detailTemp[2],
        body: detailTemp[3],
        member: detailTemp[4] === 'null' ? '无' : detailTemp[4],
        level: detailTemp[6] === ' ' ? '暂无' : detailTemp[6],
        levelsay: detailTemp[7] === ' ' ? '暂无' : detailTemp[7]
      };
      setView(_this.workDetail);
      console.log(detailTemp, _this.workDetail);
    });
  }
};

exports.default = function (detailToken) {
  WorkDetail.init(detailToken);
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @Author: liruihao02
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @Date:   2018-04-04
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @Last Modified by:   liruihao
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @Last Modified time: 2018-04-21
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


__webpack_require__(6);

__webpack_require__(23);

var _router = __webpack_require__(1);

var _router2 = _interopRequireDefault(_router);

var _exitlogin = __webpack_require__(7);

var _exitlogin2 = _interopRequireDefault(_exitlogin);

var _fetchApi = __webpack_require__(0);

var _routerView = __webpack_require__(2);

var _teacherSetting = __webpack_require__(24);

var _teacherSetting2 = _interopRequireDefault(_teacherSetting);

var _teacherCourseyears = __webpack_require__(25);

var _teacherCourseyears2 = _interopRequireDefault(_teacherCourseyears);

var _teacherClasses = __webpack_require__(26);

var _teacherClasses2 = _interopRequireDefault(_teacherClasses);

var _teacherStudents = __webpack_require__(27);

var _teacherStudents2 = _interopRequireDefault(_teacherStudents);

var _teacherWorks = __webpack_require__(28);

var _teacherWorks2 = _interopRequireDefault(_teacherWorks);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TokenObj = null;

var LeftContainer = {
  menuClickHandle: function menuClickHandle(event) {
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
        Teacher.teacherRoute.changeRoute('setting');
        (0, _teacherSetting2.default)(TokenObj);
        break;
      case 'courseyears':
        Teacher.teacherRoute.changeRoute('courseyears');
        (0, _teacherCourseyears2.default)(TokenObj);
        break;
      case 'class':
        Teacher.teacherRoute.changeRoute('class');
        (0, _teacherClasses2.default)(TokenObj);
        break;
      case 'students':
        Teacher.teacherRoute.changeRoute('students');
        (0, _teacherStudents2.default)(TokenObj);
        break;
      case 'works':
        Teacher.teacherRoute.changeRoute('works');
        (0, _teacherWorks2.default)(TokenObj);
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
    var liArr = $('.teacher-menu-li');
    for (var i = 0; i < liArr.length; i++) {
      liArr[i].className = 'menu-li teacher-menu-li';
    }
    target.className = 'menu-li teacher-menu-li active-li';
  }
};

var Teacher = function () {
  function Teacher() {
    _classCallCheck(this, Teacher);
  }

  _createClass(Teacher, null, [{
    key: 'init',
    value: function init(tokenObj) {
      if (!TokenObj) {
        this.bindHandle();
        this.initRoute();
      }
      TokenObj = tokenObj;
      this.routeBack();
      console.log(TokenObj);
    }
  }, {
    key: 'initRoute',
    value: function initRoute() {
      this.teacherRoute = new _router2.default('teacher');
      this.teacherRoute.init();
      this.teacherRoute.route('setting', _routerView.teacherCheckFunc.setting);
      this.teacherRoute.route('courseyears', _routerView.teacherCheckFunc.courseyears);
      this.teacherRoute.route('class', _routerView.teacherCheckFunc.class);
      this.teacherRoute.route('students', _routerView.teacherCheckFunc.students);
      this.teacherRoute.route('works', _routerView.teacherCheckFunc.works);
    }
  }, {
    key: 'routeBack',
    value: function routeBack() {
      var firLi = $('.teacher-menu-li').get(0);
      LeftContainer.changeActive(firLi);

      Teacher.teacherRoute.changeRoute('setting');
      (0, _teacherSetting2.default)(TokenObj);
    }
  }, {
    key: 'bindHandle',
    value: function bindHandle() {
      $('.teacher-menu-ul').bind('click', function (event) {
        LeftContainer.menuClickHandle(event);
      });
    }
  }]);

  return Teacher;
}();

exports.default = Teacher;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(11);

__webpack_require__(12);

var _router = __webpack_require__(1);

var _router2 = _interopRequireDefault(_router);

var _routerView = __webpack_require__(2);

var _login = __webpack_require__(4);

var _login2 = _interopRequireDefault(_login);

var _student = __webpack_require__(5);

var _student2 = _interopRequireDefault(_student);

var _teacher = __webpack_require__(9);

var _teacher2 = _interopRequireDefault(_teacher);

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
    _teacher2.default.init({
      id: $.cookie('id'),
      token: $.cookie('token')
    });
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
/* 11 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_RESULT__;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
 * @Author: liruihao02
 * @Date:   2018-04-14
 * @Last Modified by:   liruihao02
 * @Last Modified time: 2018-04-14
 */
(function () {
  'use strict';

  var DatePicker = function () {
    function DatePicker(el, params) {
      _classCallCheck(this, DatePicker);

      this.el = el;
      this.$el = $(document.createElement('div'));
      //Append calendar after input elemnt
      this.el.after(this.$el);

      //default params
      this.dateChangeHandle = params.dateChange;
      this.params = $.extend({
        type: 'date', // || rangedate
        startDate: moment(), //startDate
        endDate: moment(), //endDate
        locale: 'ru',
        format: 'YYYY.MM.DD', //Display date format
        delimiter: '-', // display visual delimiters for rangedate type picker
        ranges: [], //defualt rasnges is empty
        firstDayOfWeek: 1 //for rus weekday fix)
      }, params);

      moment.locale(this.params.locale);

      //Current view date in calendar
      this.viewStartDate = this.params.startDate;
      this.viewEndDate = this.params.endDate;

      //Selected date - view on top
      this.dateStart = this.params.startDate.clone();
      this.dateEnd = this.params.endDate.clone();

      this.render.call(this);

      this.initEvents();

      this.setValue();

      return this;
    }
    /**
     * Set active date after click on day in calendar
     * @param {Object} event jquery event
     * @param {String} type  end or start date type
     */


    _createClass(DatePicker, [{
      key: 'setActiveDate',
      value: function setActiveDate(event) {
        var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'start';

        var el = event.currentTarget,
            dayNum = parseInt(el.innerHTML, 10),
            vd = type === 'start' ? this.viewStartDate : this.viewEndDate;

        if (String(dayNum).length === 1) dayNum = '0' + dayNum;

        var date = moment(vd.format('YYYY MM') + ' ' + dayNum);

        if (type === 'start') {
          if (date.isAfter(this.dateEnd, 'day') && this.params.type === 'rangedate') {
            this.dateEnd = date;
          } else {
            this.dateStart = date;
          }
        } else {
          if (date.isBefore(this.dateStart, 'day') && this.params.type === 'rangedate') {
            this.dateStart = date;
          } else {
            this.dateEnd = date;
          }
        }
        event.stopPropagation();
        this.render();
        this.setValue();
      }
      /**
       * Set start date
       * @param {Date} date Javascript date object or string date
       */

    }, {
      key: 'setStartDate',
      value: function setStartDate(date) {
        this.viewStartDate = moment(date);
        this.dateStart = moment(date);
        this.render();
      }
      /**
       * Set end date
       * @param {Date} date Javascript date object or string date
       */

    }, {
      key: 'setEndDate',
      value: function setEndDate(date) {
        this.viewEndDate = moment(date);
        this.dateEnd = moment(date);
        this.render();
      }
      /**
       * Set next date by params
       * @param  {Object} event    jQuery event
       * @param  {String} calendar end or start type 
       * @param  {String} dateType day or week or month or year
       * @return {void}          
       */

    }, {
      key: 'nextDate',
      value: function nextDate(event) {
        var calendar = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'start';
        var dateType = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'day';

        if (calendar === 'start') {
          var newDate = new Date(this.viewStartDate.add(1, dateType).format('YYYY MM DD'));
          this.setStartDate(newDate);
        } else {
          var _newDate = new Date(this.viewEndDate.add(1, dateType).format('YYYY MM DD'));
          this.setEndDate(_newDate);
        }
        event.stopPropagation();
      }
      /**
       * Set prev date by params
       * @param  {Object} event    jQuery event
       * @param  {String} calendar end or start type 
       * @param  {String} dateType day or week or month or year
       * @return {void}          
       */

    }, {
      key: 'prevDate',
      value: function prevDate(event) {
        var calendar = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'start';
        var dateType = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'day';

        if (calendar === 'start') {
          var newDate = new Date(this.viewStartDate.subtract(1, dateType).format('YYYY MM DD'));
          this.setStartDate(newDate);
        } else {
          var _newDate2 = new Date(this.viewEndDate.subtract(1, dateType).format('YYYY MM DD'));
          this.setEndDate(_newDate2);
        }
        event.stopPropagation();
      }
      /**
       * Set active range date
       * @param {Object} event jQuery event
       */

    }, {
      key: 'setActiveRange',
      value: function setActiveRange(event) {
        var range = parseInt(event.currentTarget.getAttribute('data-range'), 10),
            rangeParam = this.params.ranges[range];
        if (rangeParam) {
          this.dateStart = rangeParam.startDate;
          this.viewStartDate = rangeParam.startDate;
          this.dateEnd = rangeParam.endDate;
          this.viewEndDate = rangeParam.endDate;
          this.render();
        }
      }
      /**
       * Init all events
       */

    }, {
      key: 'initEvents',
      value: function initEvents() {
        var _this = this;

        this.$el.on('click', '.dt__calendar_start .dt__calendar_m_d', function (event) {
          return _this.setActiveDate(event, 'start');
        }).on('click', '.dt__calendar_end .dt__calendar_m_d', function (event) {
          return _this.setActiveDate(event, 'end');
        }).on('click', '.dt__start .dt__calendar_head_month .next', function (event) {
          return _this.nextDate(event, 'start', 'month');
        }).on('click', '.dt__start .dt__calendar_head_month .prev', function (event) {
          return _this.prevDate(event, 'start', 'month');
        }).on('click', '.dt__end .dt__calendar_head_month .next', function (event) {
          return _this.nextDate(event, 'end', 'month');
        }).on('click', '.dt__end .dt__calendar_head_month .prev', function (event) {
          return _this.prevDate(event, 'end', 'month');
        }).on('click', '.dt__start .dt__calendar_head_year .next', function (event) {
          return _this.nextDate(event, 'start', 'year');
        }).on('click', '.dt__start .dt__calendar_head_year .prev', function (event) {
          return _this.prevDate(event, 'start', 'year');
        }).on('click', '.dt__end .dt__calendar_head_year .next', function (event) {
          return _this.nextDate(event, 'end', 'year');
        }).on('click', '.dt__end .dt__calendar_head_year .prev', function (event) {
          return _this.prevDate(event, 'end', 'year');
        }).on('click', '.dt__rages_item', function (event) {
          return _this.setActiveRange(event);
        }).on('click', '.dt__wrapper', function (event) {
          return false;
        });

        this.el.on('click', function (event) {
          return event.stopPropagation();
        }).on('focus', function (event) {
          _this.showCalendar();
          event.stopPropagation();
        });

        $(document).on('click', function (event) {
          return _this.hideCalendar();
        });
      }
    }, {
      key: 'showCalendar',
      value: function showCalendar() {
        this.$el.addClass('show');
      }
    }, {
      key: 'hideCalendar',
      value: function hideCalendar() {
        this.$el.removeClass('show');
      }
      /**
       * Render month
       * @param  {momentdate} date
       * @param  {type} type start || end 
       * @return {string}  html month template
       */

    }, {
      key: 'renderMonth',
      value: function renderMonth(date) {
        var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'start';

        var html = '',
            daysInMonth = date.daysInMonth(),
            sameDate = type === 'start' ? this.dateStart : this.dateEnd,
            dayClass = '';

        for (var i = 0; i < daysInMonth; i++) {
          var forDate = moment(new Date(date.format('YYYY MM') + ' ' + (i + 1)));

          if (forDate.isSame(this.dateStart, 'day')) {
            dayClass = 'active';
          } else if (forDate.isSame(this.dateEnd, 'day') && this.params.type === 'rangedate') {
            dayClass = 'active';
          } else {
            dayClass = '';
          }

          //Add class for between dates
          if (this.params.type === 'rangedate' && forDate.isAfter(this.dateStart, 'day') && forDate.isBefore(this.dateEnd, 'day')) {
            dayClass += 'between';
          }
          html += '<div class="dt__calendar_m_d ' + dayClass + '">' + (i + 1) + '</div>';
        };

        return html;
      }
    }, {
      key: 'renderCalendar',
      value: function renderCalendar(date) {
        var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'start';

        var html = '',
            navClass = type,
            selectDate = type === 'start' ? this.dateStart : this.dateEnd,
            weekShortDays = moment.weekdaysShort(),
            firstDayOfWeek = date.clone().startOf('month').weekday();

        //FIXME грязный хак для русских) если кто-то найдет вариант элегантнее и быстрее по cpu. Буду рад поправить) 
        if (this.params.firstDayOfWeek === 1) {
          weekShortDays = ['一', '二', '三', '四', '五', '六', '七'];
          //Su Mo Tu We Th FrSa
        }

        html += '<div class="dt__calendar dt__' + type + '">';
        html += '<div class="dt__calendar_head">';
        html += '<div class="dt__calendar_head_wday">' + selectDate.format('dddd') + '</div>';
        html += '<div class="dt__calendar_head_month"><span class="prev"><</span>' + selectDate.format('MMMM') + '<span class="next">></span></div>';
        html += '<div class="dt__calendar_head_day">' + selectDate.format('D') + '</div>';
        html += '<div class="dt__calendar_head_year"><span class="prev"><</span>' + selectDate.format('Y') + '<span class="next">></span></div>';
        html += '</div>';
        html += '<div class="dt__calendar_nav">';
        html += '<div class="dt__calendar_nav_title">' + date.format('MMM YYYY') + '</div>';
        html += '</div>';

        html += '<div class="dt__calendar_' + navClass + '"><div class="dt__calendar_m">';
        html += '<div class="dt__calendar_m_w">';
        for (var wi = 0; wi < weekShortDays.length; wi++) {
          html += '<div class="dt__calendar_m_w_n">' + weekShortDays[wi] + '</div>';
        };
        html += '</div>';

        for (var fi = 0; fi < firstDayOfWeek; fi++) {
          html += '<div class="dt__calendar_m_d_e"></div>';
        };

        html += this.renderMonth(date, type);

        html += '</div></div>';
        html += '</div>';

        return html;
      }
      /**
       * Render selector date ranges
       * @return {html} template rangesitem
       */

    }, {
      key: 'renderRanges',
      value: function renderRanges() {
        var html = '',
            ranges = this.params.ranges;

        html += '<div class="dt__rages">';
        for (var i = 0, l = ranges.length; i < l; i++) {
          html += '<div class="dt__rages_item" data-range="' + i + '"">' + ranges[i].label + '</div>';
        }
        html += '</div>';
        return html;
      }
      /**
       * Render calendar
       * @return {String} html template
       */

    }, {
      key: 'render',
      value: function render() {
        var html = '';

        html += '<div class="dt__wrapper">';

        html += this.renderCalendar(this.viewStartDate, 'start');

        if (this.params.type === 'rangedate') {
          html += this.renderCalendar(this.viewEndDate, 'end');

          if (this.params.ranges.length) {
            html += this.renderRanges();
          }
        }

        html += '</div>';
        this.$el.html(html);

        //afer render
        this.onAfterRender();
      }
      /**
       * Set input value
       */

    }, {
      key: 'setValue',
      value: function setValue() {
        if (this.params.type === 'date') {
          this.el.val(this.dateStart.format(this.params.format));
        } else {
          //range with delimiter
          this.dateChangeHandle(this.dateStart.format(this.params.format), this.dateEnd.format(this.params.format));
          this.el.val(this.dateStart.format(this.params.format) + this.params.delimiter + this.dateEnd.format(this.params.format));
        }
      }
    }, {
      key: 'onAfterRender',
      value: function onAfterRender() {
        this.$el.addClass('dt');
        if (this.params.type == 'rangedate') {
          this.$el.find('.dt__wrapper').addClass('rangedate');
        }
      }
    }]);

    return DatePicker;
  }();

  //Register for jQuery Plgin


  if (window.jQuery) {
    //Small warpper for jQuery plugin support
    jQuery.fn.DatePicker = function (params) {
      //this === inited plugin element
      return new DatePicker(this, params);
    };
  }

  //Register for requirejs
  if (true) {
    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
      return DatePicker;
    }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  }
})();
Date.getBeforeDate = function (n) {
  var n = n;
  var d = new Date();
  var year = d.getFullYear();
  var mon = d.getMonth() + 1;
  var day = d.getDate();
  if (day <= n) {
    if (mon > 1) {
      mon = mon - 1;
    } else {
      year = year - 1;
      mon = 12;
    }
  }
  d.setDate(d.getDate() - n);
  year = d.getFullYear();
  mon = d.getMonth() + 1;
  day = d.getDate();
  var s = year + "-" + (mon < 10 ? '0' + mon : mon) + "-" + (day < 10 ? '0' + day : day);
  return s;
};

/***/ }),
/* 13 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 14 */
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
/* 15 */
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
/* 16 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fetchApi = __webpack_require__(0);

var firDO = true; /*
                   * @Author: liruihao02
                   * @Date:   2018-04-06
                   * @Last Modified by:   liruihao02
                   * @Last Modified time: 2018-04-21
                   */


var eventHandle = {
  infoClickHandle: function infoClickHandle() {
    $('.student-change-info').css('display', 'block');
    $('.student-change-info').animate({
      opacity: '1'
    }, 1000);
  },
  changeInfoClickHandle: function changeInfoClickHandle() {
    var changeObj = {
      name: $('.stu-change-name').find('input').val(),
      oldpass: $('.stu-change-oldpass').find('input').val(),
      newpass: $('.stu-change-newpass').find('input').val(),
      id: Setting.tokenObj.id,
      token: Setting.tokenObj.token
    };

    (0, _fetchApi.fetchAPI)('http://222.24.63.100:9138/cms/setprofile', changeObj).then(function (result) {
      if (result === '1') {
        Setting.getStudentInfo();
        $('.stu-change-name').find('input').val('');
        $('.stu-change-oldpass').find('input').val('');
        $('.stu-change-newpass').find('input').val('');

        alert('修改成功');
      } else if (result === '0') {
        alert('修改失败，请检查旧密码是否正确');
      }
    });
  }
};

var Setting = {
  init: function init(tokenObj) {
    this.tokenObj = tokenObj;
    if (firDO) {
      firDO = !firDO;
      this.bindHandle();
    }
    this.getStudentInfo();
  },
  bindHandle: function bindHandle() {
    $('.student-info-button').bind('click', function () {
      eventHandle.infoClickHandle();
    });
    $('.stu-change-button').bind('click', function () {
      eventHandle.changeInfoClickHandle();
    });
  },
  getStudentInfo: function getStudentInfo() {
    var _this = this;

    //获取学生个人信息
    (0, _fetchApi.fetchAPI)('http://222.24.63.100:9138/cms/getprofile', this.tokenObj).then(function (stuInfo) {
      // console.log(stuInfo);
      if (stuInfo.toString().slice(0, 1) === '0') {
        return {
          id: '获取信息失败',
          class: '获取信息失败',
          name: '获取信息失败'
        };
      } else {
        return {
          id: _this.tokenObj.id,
          class: stuInfo.split('`')[0],
          name: stuInfo.split('`')[1]
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

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(3);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _fetchApi = __webpack_require__(0);

var _studentWritework = __webpack_require__(21);

var _studentWritework2 = _interopRequireDefault(_studentWritework);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * @Author: liruihao02
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * @Date:   2018-04-07
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * @Last Modified by:   liruihao02
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * @Last Modified time: 2018-04-13
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            */


var firDO = true;

var setView = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee2(viewData) {
    var workTypes, workTypesHTML, yearsClass, yearsClassTolHTML, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, yearClassHTML;

    return _regenerator2.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            workTypes = viewData.types.map(function (type) {
              return '\n      <tr class="list-table-row">\n        <td>' + type.typeName + '</td>\n        <td>' + type.typeId + '</td>\n        <td>' + (viewData.isShare === '1' ? '是' : '否') + '</td>\n        <td>\n          <span class=\'list-table-writebutton\' typeid=' + type.typeId + '>\u8FDB\u5165</span>\n        </td>\n      </tr>\n    ';
            });
            workTypesHTML = workTypes.join('');

            $('.student-worktype-list').html(workTypesHTML);

            yearsClass = viewData.years.map(function () {
              var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee(yearsClass) {
                var classes;
                return _regenerator2.default.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        _context.next = 2;
                        return yearsClass;

                      case 2:
                        yearsClass = _context.sent;
                        classes = yearsClass.classArr.map(function (oneClass) {
                          return '<tr class="list-table-row">\n          <td>' + yearsClass.yearId + '</td>\n          <td>' + oneClass + '</td>\n       </tr>';
                        });
                        return _context.abrupt('return', classes.join(''));

                      case 5:
                      case 'end':
                        return _context.stop();
                    }
                  }
                }, _callee, undefined);
              }));

              return function (_x2) {
                return _ref2.apply(this, arguments);
              };
            }());
            yearsClassTolHTML = '';
            _iteratorNormalCompletion = true;
            _didIteratorError = false;
            _iteratorError = undefined;
            _context2.prev = 8;
            _iterator = yearsClass[Symbol.iterator]();

          case 10:
            if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
              _context2.next = 18;
              break;
            }

            yearClassHTML = _step.value;
            _context2.next = 14;
            return yearClassHTML;

          case 14:
            yearsClassTolHTML += _context2.sent;

          case 15:
            _iteratorNormalCompletion = true;
            _context2.next = 10;
            break;

          case 18:
            _context2.next = 24;
            break;

          case 20:
            _context2.prev = 20;
            _context2.t0 = _context2['catch'](8);
            _didIteratorError = true;
            _iteratorError = _context2.t0;

          case 24:
            _context2.prev = 24;
            _context2.prev = 25;

            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }

          case 27:
            _context2.prev = 27;

            if (!_didIteratorError) {
              _context2.next = 30;
              break;
            }

            throw _iteratorError;

          case 30:
            return _context2.finish(27);

          case 31:
            return _context2.finish(24);

          case 32:
            $('.student-yearsclass-list').html(yearsClassTolHTML);

          case 33:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, undefined, [[8, 20, 24, 32], [25,, 27, 31]]);
  }));

  return function setView(_x) {
    return _ref.apply(this, arguments);
  };
}();

var Course = {
  init: function init(tokenObj, studentRoute) {
    this.tokenObj = tokenObj;
    this.studentRoute = studentRoute;
    this.courtokenObj = {};
    if (firDO) {
      firDO = !firDO;
      this.getCourse();
      this.bindHandle();
    } else {
      this.getCourse();
      return;
    }
  },

  getCourseYearClass: function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee3(yeartokenObj, yearId) {
      return _regenerator2.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return (0, _fetchApi.fetchAPI)('http://222.24.63.100:9138/cms/getcourseyearclass', yeartokenObj).then(function (yearclass) {
                var yearclassTemp = yearclass.split('`');
                var yearClass = {
                  yearId: yearId,
                  classArr: yearclassTemp
                };
                return yearClass;
              });

            case 2:
              return _context3.abrupt('return', _context3.sent);

            case 3:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, this);
    }));

    function getCourseYearClass(_x3, _x4) {
      return _ref3.apply(this, arguments);
    }

    return getCourseYearClass;
  }(),

  getCourse: function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee4() {
      var _this = this;

      return _regenerator2.default.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return (0, _fetchApi.fetchAPI)('http://222.24.63.100:9138/cms/searchmycourse', this.tokenObj).then(function (courseData) {
                var courseTemp = courseData.split('`');
                Object.assign(_this.courtokenObj, _this.tokenObj, {
                  courseid: courseTemp[0]
                });
                _this.viewData = {
                  courseName: courseTemp[1],
                  isShare: courseTemp[2],
                  types: [],
                  years: []
                };
              });

            case 2:
              _context4.next = 4;
              return (0, _fetchApi.fetchAPI)('http://222.24.63.100:9138/cms/getworktype', this.courtokenObj).then(function (typeData) {
                var typeTemp = typeData.split('`');
                for (var i = 0; i < typeTemp.length; i = i + 2) {
                  _this.viewData.types.push({
                    typeId: typeTemp[i],
                    typeName: typeTemp[i + 1]
                  });
                }
              });

            case 4:
              _context4.next = 6;
              return (0, _fetchApi.fetchAPI)('http://222.24.63.100:9138/cms/getcourseyear', this.courtokenObj).then(function (yearData) {
                var yearTemp = yearData.split('`');
                _this.yearClassLength = yearTemp.length;
                for (var i = 0; i < yearTemp.length; i++) {
                  var yearClass = _this.getCourseYearClass(Object.assign({}, _this.courtokenObj, {
                    yearid: yearTemp[i]
                  }), yearTemp[i]);
                  _this.viewData.years.push(yearClass);
                }
              });

            case 6:
              _context4.next = 8;
              return this.viewData.years.length;

            case 8:
              _context4.t0 = _context4.sent;
              _context4.t1 = this.yearClassLength;
              _context4.t0 === _context4.t1;

              setView(this.viewData);

            case 12:
            case 'end':
              return _context4.stop();
          }
        }
      }, _callee4, this);
    }));

    function getCourse() {
      return _ref4.apply(this, arguments);
    }

    return getCourse;
  }(),

  writeworkHandle: function writeworkHandle(target) {
    var typeID = $(target).attr('typeid');
    this.studentRoute.changeRoute('writework');
    (0, _studentWritework2.default)(Object.assign({}, this.tokenObj, {
      typeid: typeID
    }));
  },
  bindHandle: function bindHandle() {
    var _this2 = this;

    $('.student-worktype-list').click(function (event) {
      var target = event.target || event.srcElement;
      if (target.className !== 'list-table-writebutton') {
        return;
      }
      _this2.writeworkHandle(target);
    });
  }
};

exports.default = function (tokenObj, studentRoute) {
  Course.init(tokenObj, studentRoute);
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() { return this })() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(20);

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}


/***/ }),
/* 20 */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration. If the Promise is rejected, however, the
          // result for this iteration will be rejected with the same
          // reason. Note that rejections of yielded Promises are not
          // thrown back into the generator function, as is the case
          // when an awaited Promise is rejected. This difference in
          // behavior between yield and await is important, because it
          // allows the consumer to decide what to do with the yielded
          // rejection (swallow it and continue, manually .throw it back
          // into the generator, abandon iteration, whatever). With
          // await, by contrast, there is no opportunity to examine the
          // rejection reason outside the generator function, so the
          // only option is to throw it from the await expression, and
          // let the generator function handle the exception.
          result.value = unwrapped;
          resolve(result);
        }, reject);
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() { return this })() || Function("return this")()
);


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fetchApi = __webpack_require__(0);

var firDO = true; /*
                   * @Author: liruihao02
                   * @Date:   2018-04-13
                   * @Last Modified by:   liruihao02
                   * @Last Modified time: 2018-04-15
                   */


var submitworkHandle = function submitworkHandle() {
  var workInfo = Object.assign({}, WritingWork.typeToken, {
    title: $('.student-worktitle-value').val(),
    work: WritingWork.ue.getContent(),
    zip: ''
  });
  var myformData = new FormData();
  for (var name in workInfo) {
    myformData.append(name, workInfo[name]);
  }
  $.ajax({
    url: 'http://222.24.63.100:9138/cms/submitwork',
    data: myformData,
    type: 'POST',
    cache: false,
    async: true,
    processData: false,
    contentType: false,
    success: function success(result) {
      if (result === '0') {
        alert('提交失败');
      } else if (result === '1') {
        alert('提交成功');
        WritingWork.viewBack();
      }
    }
  });
  console.log(workInfo);
};

var WritingWork = {
  init: function init(typeToken) {
    if (firDO) {
      firDO = !firDO;
    } else {
      this.viewBack();
      //除了第一次加载其余都清空内容
      return;
    }
    this.typeToken = typeToken;
    this.ue = UE.getEditor('editor-container');
    this.bindHandle();
  },
  bindHandle: function bindHandle() {
    $('.student-work-submit').click(function () {
      submitworkHandle();
    });
  },
  viewBack: function viewBack() {
    console.log('viewBack');
    this.ue.execCommand('cleardoc');
    $('.student-worktitle-value').val('');
  }
};

exports.default = function (typeToken) {
  WritingWork.init(typeToken);
};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(3);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _fetchApi = __webpack_require__(0);

var _studentWorkdetail = __webpack_require__(8);

var _studentWorkdetail2 = _interopRequireDefault(_studentWorkdetail);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * @Author: liruihao02
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * @Date:   2018-04-13
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * @Last Modified by:   liruihao02
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * @Last Modified time: 2018-04-21
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            */


var firDO = true;

var setView = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee(viewData) {
    var totalWorksArr, i, worksHTMLArr, worksHTML;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            totalWorksArr = [];
            i = 0;

          case 2:
            if (!(i < viewData.works.length)) {
              _context.next = 11;
              break;
            }

            _context.t0 = totalWorksArr;
            _context.next = 6;
            return viewData.works[i];

          case 6:
            _context.t1 = _context.sent;
            totalWorksArr = _context.t0.concat.call(_context.t0, _context.t1);

          case 8:
            i++;
            _context.next = 2;
            break;

          case 11:
            worksHTMLArr = totalWorksArr.map(function (work) {
              return '\n      <tr class="list-table-row student-work-row" workid=' + work.workid + '>\n        <td>' + work.title + '</td>\n        <td>' + work.workid + '</td>\n        <td>' + work.typename + '</td>\n        <td>' + work.time + '</td>\n        <td>' + work.size + '</td>\n        <td>' + (work.level === ' ' ? '暂无批阅' : work.level) + '</td>\n        <td>\n          <span class=\'list-table-studeletework\' workid=' + work.workid + '>\u5220\u9664</span>\n        </td>\n      </tr>\n    ';
            });
            worksHTML = worksHTMLArr.join('');

            $('.student-works-list').html(worksHTML);
            $('.student-works-coursname').html(viewData.courseName);

          case 15:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function setView(_x) {
    return _ref.apply(this, arguments);
  };
}();

var WritingWork = {
  init: function init(tokenObj, studentRoute) {
    this.tokenObj = tokenObj;
    this.studentRoute = studentRoute;
    // this.defaultSearch();
    this.initDate();
    this.startDate = Date.getBeforeDate(7);
    this.endDate = Date.getBeforeDate(0);
    if (firDO) {
      this.bindHandle();
      firDO = !firDO;
    } else {
      return;
    }
  },
  initDate: function initDate() {
    var _this = this;

    $('#rangedate').DatePicker({
      type: 'rangedate',
      startDate: moment().subtract(1, 'week'),
      endDate: moment(),
      dateChange: function dateChange(startDate, endDate) {
        _this.startDate = startDate.replace(/\./g, '-');
        _this.endDate = endDate.replace(/\./g, '-');
        _this.defaultSearch();
      }
    });
  },
  getWork: function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee2(typeId, typeName) {
      var workToken;
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              workToken = Object.assign({}, this.tokenObj, {
                typeid: typeId,
                datefrom: this.startDate,
                dateto: this.endDate
              });
              _context2.next = 3;
              return (0, _fetchApi.fetchAPI)('http://222.24.63.100:9138/cms/searchmywork', workToken).then(function (workdata) {
                var workArr = [];
                var workdataTemp = workdata.split('`');
                workdataTemp.pop();
                for (var i = 0; i < workdataTemp.length; i = i + 6) {
                  var work = {
                    workid: workdataTemp[i],
                    time: workdataTemp[i + 1],
                    typeid: workdataTemp[i + 2],
                    title: workdataTemp[i + 3],
                    size: workdataTemp[i + 4],
                    level: workdataTemp[i + 5],
                    typename: typeName
                  };
                  workArr.push(work);
                }
                return workArr;
              });

            case 3:
              return _context2.abrupt('return', _context2.sent);

            case 4:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function getWork(_x2, _x3) {
      return _ref2.apply(this, arguments);
    }

    return getWork;
  }(),
  defaultSearch: function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee3() {
      var _this2 = this;

      return _regenerator2.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return (0, _fetchApi.fetchAPI)('http://222.24.63.100:9138/cms/searchmycourse', this.tokenObj).then(function (courseData) {
                var courseTemp = courseData.split('`');
                _this2.courtokenObj = Object.assign({}, _this2.tokenObj, {
                  courseid: courseTemp[0]
                });
                _this2.viewData = {
                  courseName: courseTemp[1],
                  isShare: courseTemp[2],
                  works: []
                };
              });

            case 2:
              _context3.next = 4;
              return (0, _fetchApi.fetchAPI)('http://222.24.63.100:9138/cms/getworktype', this.courtokenObj).then(function (typeData) {
                var typeTemp = typeData.split('`');
                for (var i = 0; i < typeTemp.length; i = i + 2) {
                  var work = _this2.getWork(typeTemp[i], typeTemp[i + 1]);
                  _this2.viewData.works.push(work);
                }
              });

            case 4:
              setView(this.viewData);

            case 5:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, this);
    }));

    function defaultSearch() {
      return _ref3.apply(this, arguments);
    }

    return defaultSearch;
  }(),
  deleteWork: function deleteWork(workid) {
    var _this3 = this;

    var workToken = Object.assign({}, this.tokenObj, {
      workid: workid
    });
    (0, _fetchApi.fetchAPI)('http://222.24.63.100:9138/cms/delwork', workToken).then(function (result) {
      console.log(result);
      if (result === '0') {
        alert('删除失败');
      } else if (result === '1') {
        alert('删除成功');
        _this3.defaultSearch();
      }
    });
    console.log(workToken);
  },
  bindHandle: function bindHandle() {
    var _this4 = this;

    $('.student-works-list').bind('click', function (event) {
      var target = event.target || event.srcElement;
      if (target.className === 'list-table-studeletework') {
        //删除
        _this4.deleteWork($(target).attr('workid'));
      } else {
        //详情
        var parentNode = target.parentNode;
        var detailToken = Object.assign({}, _this4.tokenObj, {
          workid: $(parentNode).attr('workid')
        });
        _this4.studentRoute.changeRoute('workdetail');
        (0, _studentWorkdetail2.default)(detailToken);
        console.log(detailToken);
      }
    });
  }
};

exports.default = function (tokenObj, studentRoute) {
  WritingWork.init(tokenObj, studentRoute);
};

/***/ }),
/* 23 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fetchApi = __webpack_require__(0);

var firDO = true; /*
                   * @Author: liruihao02
                   * @Date:   2018-04-21
                   * @Last Modified by:   liruihao02
                   * @Last Modified time: 2018-04-21
                   */


var eventHandle = {
  infoClickHandle: function infoClickHandle() {
    $('.teacher-change-info').css('display', 'block');
    $('.teacher-change-info').animate({
      opacity: '1'
    }, 1000);
  },
  changeInfoClickHandle: function changeInfoClickHandle() {
    var changeObj = {
      name: $('.teach-change-name').find('input').val(),
      oldpass: $('.teach-change-oldpass').find('input').val(),
      newpass: $('.teach-change-newpass').find('input').val(),
      id: Setting.tokenObj.id,
      token: Setting.tokenObj.token
    };

    (0, _fetchApi.fetchAPI)('http://222.24.63.100:9138/cms/setprofile', changeObj).then(function (result) {
      if (result === '1') {
        Setting.getStudentInfo();
        $('.teach-change-name').find('input').val('');
        $('.teach-change-oldpass').find('input').val('');
        $('.teach-change-newpass').find('input').val('');

        alert('修改成功');
      } else if (result === '0') {
        alert('修改失败，请检查旧密码是否正确');
      }
    });
  }
};

var Setting = {
  init: function init(tokenObj) {
    this.tokenObj = tokenObj;
    if (firDO) {
      firDO = !firDO;
      this.bindHandle();
    }
    this.getStudentInfo();
  },
  bindHandle: function bindHandle() {
    $('.teach-info-button').bind('click', function () {
      eventHandle.infoClickHandle();
    });
    $('.teach-change-button').bind('click', function () {
      eventHandle.changeInfoClickHandle();
    });
  },
  getStudentInfo: function getStudentInfo() {
    var _this = this;

    //获取学生个人信息
    (0, _fetchApi.fetchAPI)('http://222.24.63.100:9138/cms/getprofile', this.tokenObj).then(function (teachInfo) {
      // console.log(stuInfo);
      if (teachInfo.toString().slice(0, 1) === '0') {
        return {
          id: '获取信息失败',
          class: '获取信息失败',
          name: '获取信息失败'
        };
      } else {
        return {
          id: _this.tokenObj.id,
          class: teachInfo.split('`')[0],
          name: teachInfo.split('`')[1] === 'null' ? '暂无,请修改' : teachInfo.split('`')[1]
        };
      }
    }).then(function (infoJson) {
      _this.setData(infoJson);
    });
  },
  setData: function setData(infoJson) {
    $($('.teacher-info-li').get(0)).find('span').get(1).innerHTML = infoJson.id;
    $($('.teacher-info-li').get(1)).find('span').get(1).innerHTML = infoJson.name;
    $($('.teacher-info-li').get(2)).find('span').get(1).innerHTML = infoJson.class;
  }
};

exports.default = function (tokenObj) {
  Setting.init(tokenObj);
};

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fetchApi = __webpack_require__(0);

var _studentWorkdetail = __webpack_require__(8);

var _studentWorkdetail2 = _interopRequireDefault(_studentWorkdetail);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * @Author: liruihao02
 * @Date:   2018-04-21
 * @Last Modified by:   liruihao02
 * @Last Modified time: 2018-04-28
 */
var firDO = true;

var setView = function setView(viewData, type) {
  var dataHTMLArr = null;
  var targetEle = type === 'years' ? $('.teacher-yearsclass-list') : $('.teacher-courses-list');
  if (type === 'years') {
    dataHTMLArr = viewData.map(function (year) {
      return '\n        <tr class="list-table-row">\n          <td>' + year.yearID + '</td>\n          <td>' + year.yearName + '</td>\n          <td>\n            <span class=\'list-table-teachdeleteyear\' yearid=' + year.yearID + '>\u5220\u9664</span>\n          </td>\n        </tr>\n      ';
    });
  } else if (type === 'courses') {
    dataHTMLArr = viewData.map(function (course) {
      return '\n        <tr class="list-table-row">\n          <td>' + course.courseID + '</td>\n          <td>' + course.courseName + '</td>\n          <td>' + (course.isShare === '1' ? '是' : '否') + '</td>\n          <td>\n            <span class=\'list-table-teachdeletecourse\' courseid=' + course.courseID + '>\u5220\u9664</span>\n          </td>\n        </tr>\n      ';
    });
  }

  var dataTotalHTML = dataHTMLArr.join('');
  targetEle.html(dataTotalHTML);
};

var CourseYears = {
  init: function init(tokenObj) {
    this.tokenObj = tokenObj;
    if (firDO) {
      this.bindHandle();
      firDO = !firDO;
    } else {
      return;
    }
    this.getYears();
    this.getCourse();
  },
  getYears: function getYears() {
    (0, _fetchApi.fetchAPI)('http://222.24.63.100:9138/cms/getyearinfo', this.tokenObj).then(function (yearsData) {
      var yearsTemp = yearsData.split('`');
      var yearsArr = [];
      for (var i = 0; i < yearsTemp.length; i = i + 2) {
        yearsArr.push({
          yearID: yearsTemp[i],
          yearName: yearsTemp[i + 1]
        });
      }
      console.log(yearsArr);
      setView(yearsArr, 'years');
    });
  },
  getCourse: function getCourse() {
    (0, _fetchApi.fetchAPI)('http://222.24.63.100:9138/cms/getcourseinfo', this.tokenObj).then(function (coursesData) {
      console.log(coursesData);
      var coursesTemp = coursesData.split('`');
      var coursesArr = [];
      for (var i = 0; i < coursesTemp.length; i = i + 3) {
        coursesArr.push({
          courseID: coursesTemp[i],
          courseName: coursesTemp[i + 1],
          isShare: coursesTemp[i + 2]
        });
      }
      console.log(coursesArr);
      setView(coursesArr, 'courses');
    });
  },
  createYearCourse: function createYearCourse(type) {
    var _this = this;

    var creInfo = {};
    var creatUrl = type === 'year' ? 'http://222.24.63.100:9138/cms/addyear' : 'http://222.24.63.100:9138/cms/addcourse';
    if (type === 'year') {
      creInfo = {
        year: $('.teacher-newyear-input').val()
      };
    } else if (type === 'course') {
      creInfo = {
        title: $('.teacher-newcourse-input').val(),
        share: $('.teacher-course-share').val()
      };
    }
    (0, _fetchApi.fetchAPI)(creatUrl, Object.assign({}, creInfo, this.tokenObj)).then(function (result) {
      if (result === '-1') {
        alert('\u521B\u5EFA' + (type === 'year' ? '年级' : '课程') + '\u5931\u8D25');
      } else if (result === '1') {
        $('.teacher-newyear-input').val('');
        type === 'year' ? _this.getYears() : _this.getCourse();
      }
    });
  },
  deleteYearCourse: function deleteYearCourse(itemID, type) {
    var _this2 = this;

    var deleteUrl = type === 'year' ? 'http://222.24.63.100:9138/cms/delyear' : 'http://222.24.63.100:9138/cms/delcourse';
    var delIDObj = type === 'year' ? {
      yearid: itemID
    } : {
      courseid: itemID
    };
    (0, _fetchApi.fetchAPI)(deleteUrl, Object.assign({}, delIDObj, this.tokenObj)).then(function (result) {
      if (result === '0') {
        alert('删除失败');
      } else if (result === '1') {
        type === 'year' ? _this2.getYears() : _this2.getCourse();
        alert('删除成功');
      }
    });
  },
  bindHandle: function bindHandle() {
    var _this3 = this;

    $('.teacher-createyear-button').bind('click', function () {
      _this3.createYearCourse('year');
    });
    $('.teacher-createcourse-button').bind('click', function () {
      _this3.createYearCourse('course');
    });
    $('.teacher-courseyear-list').bind('click', function (event) {
      var target = event.target || event.srcElement;
      if (target.className === 'list-table-teachdeleteyear') {
        _this3.deleteYearCourse($(target).attr('yearid'), 'year');
      } else if (target.className === 'list-table-teachdeletecourse') {
        _this3.deleteYearCourse($(target).attr('courseid'), 'course');
      }
    });
  }
};

exports.default = function (tokenObj) {
  CourseYears.init(tokenObj);
};

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(3);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _fetchApi = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * @Author: liruihao02
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * @Date:   2018-04-21
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * @Last Modified by:   liruihao
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * @Last Modified time: 2018-04-21
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            */


var firDO = true;

var eventHandle = {
  panClickHandle: function panClickHandle(whichPan, target) {
    Classes.panType = whichPan;
    $('.teacher-classbutton').attr('class', 'teacher-classbutton');
    $(target).attr('class', 'teacher-classbutton teacher-checkactive-clicked');
    if (whichPan === 'activeClass') {
      $('.teacher-searchactive-check').css('display', 'block');
      $('.teacher-searchunactive-check').css('display', 'none');
    } else if (whichPan === 'unactiveClass') {
      $('.teacher-searchactive-check').css('display', 'none');
      $('.teacher-searchunactive-check').css('display', 'block');
    }
    Classes.getClassList();
  },

  selectTypeChangeHandle: function selectTypeChangeHandle(target) {
    var targetClassName = target.className;
    var selectValue = target.value;
    if (targetClassName.indexOf('teacher-searchactive-select') !== -1) {
      Classes.selectCheck.active = selectValue;
    } else if (targetClassName.indexOf('teacher-searchunactive-select') !== -1) {
      targetClassName.indexOf('teacher-searchunactive-coursetype') !== -1 ? Classes.selectCheck.unactive.course = selectValue : Classes.selectCheck.unactive.year = selectValue;
    }

    Classes.getClassList();
  },

  createClassHandle: function createClassHandle() {
    var newClassObj = {
      yearid: $('.teacher-createclass-year').val(),
      courseid: $('.teacher-createclass-course').val(),
      name: $('.teacher-createclass-name').val()
    };
    var fetchObj = Object.assign({}, newClassObj, Classes.tokenObj);
    (0, _fetchApi.fetchAPI)('http://222.24.63.100:9138/cms/addclass', fetchObj).then(function (result) {
      if (result === '1') {
        alert('添加成功');
        Classes.getClassList();
      } else if (result === '0') {
        alert('添加失敗');
      }
    });
  },

  checkActiveDeleteHandle: function checkActiveDeleteHandle(isCheckActive, isDelete, target) {
    var classid = $(target).attr('classid');
    var fetchUrl = isCheckActive ? 'http://222.24.63.100:9138/cms/setclasstype' : 'http://222.24.63.100:9138/cms/delclass';
    var infoObj = isCheckActive ? {
      classid: classid,
      isactive: Classes.panType === 'activeClass' ? false : true
    } : {
      classid: classid
    };
    (0, _fetchApi.fetchAPI)(fetchUrl, Object.assign({}, infoObj, Classes.tokenObj)).then(function (result) {
      var sucessAlert = isCheckActive ? '切换活动状态成功' : '删除班级成功';
      var failAlert = isCheckActive ? '切换活动状态失败' : '删除班级失败';
      if (result === '0') {
        alert(failAlert);
      } else if (result === '1') {
        alert(sucessAlert);
      }
      Classes.getClassList();
    });
  }
};

var Classes = {
  init: function init(tokenObj) {
    this.tokenObj = tokenObj;
    this.panType = 'activeClass';
    this.selectCheck = {
      active: null,
      unactive: {}
    };
    // 手动触发一次 还原样式状态
    eventHandle.panClickHandle('activeClass', $('.teacher-classbutton').get(0));
    this.getYearsCourseOpitons();
    if (firDO) {
      this.bindHandle();
      firDO = false;
    }
  },

  setOption: function setOption(yearcourseOptions) {
    var opitonHTMLArr = [];
    yearcourseOptions.forEach(function (dataArr, index) {
      opitonHTMLArr[index] = dataArr.map(function (item) {
        return '<option value=' + item.id + '>' + item.name + '</option>';
      });
    });
    $('.teacher-createclass-year').html(opitonHTMLArr[0].join(''));
    $('.teacher-createclass-course').html(opitonHTMLArr[1].join(''));
    $('.teacher-searchactive-coursetype').html(opitonHTMLArr[1].join(''));
    $('.teacher-searchunactive-yeartype').html(opitonHTMLArr[0].join(''));
    $('.teacher-searchunactive-coursetype').html(opitonHTMLArr[1].join(''));
  },

  getYearsCourseOpitons: function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
      var yearcourseOptions;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              yearcourseOptions = [];
              _context.next = 3;
              return (0, _fetchApi.fetchAPI)('http://222.24.63.100:9138/cms/getyearinfo', this.tokenObj).then(function (yearsData) {
                var yearsTempArr = yearsData.split('`');
                yearcourseOptions[0] = [];
                for (var i = 0; i < yearsTempArr.length; i = i + 2) {
                  yearcourseOptions[0].push({
                    id: yearsTempArr[i],
                    name: yearsTempArr[i + 1]
                  });
                }
              });

            case 3:
              _context.next = 5;
              return (0, _fetchApi.fetchAPI)('http://222.24.63.100:9138/cms/getcourseinfo', this.tokenObj).then(function (coursesData) {
                var coursesTempArr = coursesData.split('`');
                yearcourseOptions[1] = [];
                for (var i = 0; i < coursesTempArr.length; i = i + 3) {
                  yearcourseOptions[1].push({
                    id: coursesTempArr[i],
                    name: coursesTempArr[i + 1]
                  });
                }
              });

            case 5:
              this.selectCheck = {
                active: yearcourseOptions[1][0].id,
                unactive: {
                  course: yearcourseOptions[1][0].id,
                  year: yearcourseOptions[0][0].id
                }
              };
              this.setOption(yearcourseOptions);
              this.getClassList();

            case 8:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function getYearsCourseOpitons() {
      return _ref.apply(this, arguments);
    }

    return getYearsCourseOpitons;
  }(),

  getClassList: function getClassList() {
    var isActive = this.panType === 'activeClass';
    var fetchUrl = isActive ? 'http://222.24.63.100:9138/cms/getactiveclass' : 'http://222.24.63.100:9138/cms/getclassbyyear';
    var selectObj = null;
    if (isActive) {
      selectObj = {
        courseid: this.selectCheck.active
      };
    } else {
      selectObj = {
        courseid: this.selectCheck.unactive.course,
        yearid: this.selectCheck.unactive.year
      };
    }
    (0, _fetchApi.fetchAPI)(fetchUrl, Object.assign({}, this.tokenObj, selectObj)).then(function (classData) {
      if (classData === '0') {
        $('.teacher-class-list').html('');
        $('.teacher-classes-nodata').css('display', 'block');
        return;
      }
      $('.teacher-classes-nodata').css('display', 'none');

      var classesArr = [];
      var classesTemp = classData.split('`');
      for (var i = 0; i < classesTemp.length; i = i + 2) {
        classesArr.push({
          classID: classesTemp[i],
          className: classesTemp[i + 1]
        });
      }
      var classesHTMLArr = classesArr.map(function (classItem) {
        return '\n              <tr class="list-table-row">\n                <td>' + classItem.classID + '</td>\n                <td>' + classItem.className + '</td>\n                <td>\n                  <span class=\'list-table-checkactive\' classid=' + classItem.classID + '>\u5207\u6362</span>\n                </td>\n                <td>\n                  <span class=\'list-table-deleteClass\' classid=' + classItem.classID + '>\u5220\u9664</span>\n                </td>\n              </tr>\n          ';
      });
      $('.teacher-class-list').html(classesHTMLArr.join(''));
    });
  },

  bindHandle: function bindHandle() {
    $('.teacher-checkactive-pan').bind('click', function (event) {
      var whichPan = $(event.target).attr('name');
      if (!whichPan) return;
      eventHandle.panClickHandle(whichPan, event.target);
    });
    $('.teacher-searchactive-select').bind('change', function (event) {
      eventHandle.selectTypeChangeHandle(event.target);
    });
    $('.teacher-searchunactive-select').bind('change', function (event) {
      eventHandle.selectTypeChangeHandle(event.target);
    });
    $('.teacher-createclass-button').bind('click', function (event) {
      eventHandle.createClassHandle();
    });
    $('.teacher-class-list').bind('click', function (event) {
      var target = event.target || event.srcElement;
      var targetClassName = $(target).attr('class');
      if (!targetClassName) return;
      var isCheckActive = targetClassName.indexOf('list-table-checkactive') !== -1 ? true : false;
      var isDelete = targetClassName.indexOf('list-table-deleteClass') !== -1 ? true : false;
      if (!isCheckActive && !isDelete) return;
      eventHandle.checkActiveDeleteHandle(isCheckActive, isDelete, target);
    });
  }
};

exports.default = function (tokenObj) {
  Classes.init(tokenObj);
};

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(3);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _fetchApi = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * @Author: liruihao
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * @Date:   2018-05-04 16:36:51
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * @Last Modified by:   liruihao
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * @Last Modified time: 2018-05-07 15:50:50
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            */


var firDO = true;

// //批量删除test函数
// const testDeleteStudents = () => {
//   for (let i = 1198; i < 2201; i++) {
//     console.log(i);
//     fetchAPI('http://222.24.63.100:9138/cms/delstudent', Object.assign({}, Students.tokenObj, {
//         sid: `0414${i}`
//       }))
//       .then(result => {

//       });
//   }
// }

var eventHandle = {
  createStudentsHandle: function createStudentsHandle() {
    var createStuObj = {
      classid: $('.teacher-createstudents-select').val(),
      idfrom: $('.teacher-createstudent-start').val().trim()
    };
    if ($('.teacher-createstudent-end').val().trim()) {
      createStuObj['idto'] = $('.teacher-createstudent-end').val().trim();
    }
    if (!createStuObj.idfrom) {
      alert('开始学号必须输入');
      return;
    } else if (!Number(createStuObj.idfrom) || createStuObj.idfrom.length !== 8) {
      alert('学号请输入8位数字，请检查');
      return;
    } else if (createStuObj.idto && (!Number(createStuObj.idto) || createStuObj.idto.length !== 8)) {
      alert('学号请输入8位数字，请检查');
      return;
    } else if (createStuObj.idto && Number(createStuObj.idto) < Number(createStuObj.idfrom)) {
      alert('结束学号应小于等于开始学号，请检查');
      return;
    }

    (0, _fetchApi.fetchAPI)('http://222.24.63.100:9138/cms/addstudent', Object.assign({}, Students.tokenObj, createStuObj)).then(function (result) {
      if (result === '0') {
        alert('创建学生账号失败');
      } else {
        Students.getStudentList();
        alert('创建学生账号成功');
      }
    });
  },
  deleteStudentHandle: function deleteStudentHandle(sid) {
    (0, _fetchApi.fetchAPI)('http://222.24.63.100:9138/cms/delstudent', Object.assign({}, Students.tokenObj, {
      sid: sid
    })).then(function (result) {
      Students.getStudentList();
      result === '0' ? alert('\u5220\u9664\u5931\u8D25') : alert('\u5220\u9664 ' + sid + ' \u6210\u529F');
    });
  },
  listSelectChangeHandle: function listSelectChangeHandle(event) {
    var selectValue = $(event.target).val();
    console.log(selectValue);
    if (selectValue === Students.nowClassID) {
      return;
    } else {
      Students.nowClassID = selectValue;
      Students.getStudentList();
    }
  }
};

var Students = {
  init: function init(tokenObj) {
    this.tokenObj = tokenObj;
    this.getActiveClasses();
    if (firDO) {
      this.bindHandle();
      firDO = false;
    }
  },
  setStudentsListView: function setStudentsListView(studentsData) {
    var studentsHTMLArr = studentsData.map(function (student) {
      return '\n          <tr class="list-table-row">\n            <td>' + student.studentNumber + '</td>\n            <td>' + student.studentName + '</td>\n            <td>\n              <span class=\'list-table-deleteStudent\' sid=' + student.studentNumber + '>\u5220\u9664</span>\n            </td>\n          </tr>\n      ';
    });
    $('.teacher-students-list').html(studentsHTMLArr.join(''));
  },
  setOption: function setOption(totalClasses) {
    var optionHTMLArr = totalClasses.map(function (item) {
      return '<option value=' + item.classID + '>' + item.className + '</option>';
    });
    $('.teacher-createstudents-select').html(optionHTMLArr.join(''));
    $('.teacher-search-select').html(optionHTMLArr.join(''));
  },
  getActiveClasses: function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
      var _this = this;

      var coursesArr;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              coursesArr = [];
              _context.next = 3;
              return (0, _fetchApi.fetchAPI)('http://222.24.63.100:9138/cms/getcourseinfo', this.tokenObj).then(function (coursesData) {
                var coursesTempArr = coursesData.split('`');
                for (var i = 0; i < coursesTempArr.length; i = i + 3) {
                  coursesArr.push(coursesTempArr[i]);
                }
              });

            case 3:
              Promise.all(coursesArr.map(function (courseid) {
                return (0, _fetchApi.fetchAPI)('http://222.24.63.100:9138/cms/getactiveclass', Object.assign({}, _this.tokenObj, {
                  courseid: courseid
                })).then(function (classesData) {
                  if (classesData === '0') {
                    return [];
                  }
                  var classesTemp = classesData.split('`');
                  var classes = [];
                  for (var i = 0; i < classesTemp.length; i = i + 2) {
                    classes.push({
                      classID: classesTemp[i],
                      className: classesTemp[i + 1]
                    });
                  }
                  return classes;
                });
              })).then(function (classesArr) {
                var totalClasses = [];
                classesArr.forEach(function (classes) {
                  totalClasses = totalClasses.concat(classes);
                });
                _this.nowClassID = totalClasses[0].classID;
                _this.setOption(totalClasses);
                _this.getStudentList();
              });

            case 4:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function getActiveClasses() {
      return _ref.apply(this, arguments);
    }

    return getActiveClasses;
  }(),
  getStudentList: function getStudentList() {
    var _this2 = this;

    (0, _fetchApi.fetchAPI)('http://222.24.63.100:9138/cms/getstubyclass', Object.assign({}, this.tokenObj, {
      classid: this.nowClassID
    })).then(function (studentsData) {
      if (studentsData === '0') {
        _this2.setStudentsListView([]);
      }
      var studentsTemp = studentsData.split('`');
      var studentsArr = [];
      for (var i = 0; i < studentsTemp.length; i = i + 2) {
        studentsArr.push({
          studentNumber: studentsTemp[i],
          studentName: studentsTemp[i + 1]
        });
      }
      _this2.setStudentsListView(studentsArr);
    });
  },
  bindHandle: function bindHandle() {
    $('.teacher-createstudents-button').bind('click', function () {
      eventHandle.createStudentsHandle();
    });
    $('.teacher-students-list').bind('click', function (event) {
      var targetClassName = event.target.className;
      if (targetClassName !== 'list-table-deleteStudent') return;
      eventHandle.deleteStudentHandle($(event.target).attr('sid'));
    });
    $('.teacher-search-select').bind('change', function (event) {
      eventHandle.listSelectChangeHandle(event);
    });
  }
};

exports.default = function (tokenObj) {
  Students.init(tokenObj);
};

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(3);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _fetchApi = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * @Author: liruihao
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * @Date:   2018-05-07 15:53:01
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * @Last Modified by:   liruihao
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * @Last Modified time: 2018-05-08 22:11:28
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            */


var firDO = true;

var eventHandle = {};

var getClasses = function getClasses(coursesArr) {
  var isActive = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var yearsArr = arguments[2];

  var infoObjArr = [];
  var fetchUrl = isActive ? 'http://222.24.63.100:9138/cms/getactiveclass' : 'http://222.24.63.100:9138/cms/getclassbyyear';
  if (isActive) {
    coursesArr.forEach(function (courseid) {
      infoObjArr.push({
        courseid: courseid
      });
    });
  } else {
    coursesArr.forEach(function (courseid) {
      yearsArr.forEach(function (yearid) {
        infoObjArr.push({
          courseid: courseid,
          yearid: yearid
        });
      });
    });
  }
  return infoObjArr.map(function (infoObj) {
    return (0, _fetchApi.fetchAPI)(fetchUrl, Object.assign({}, Works.tokenObj, infoObj)).then(function (classesData) {
      if (classesData === '0') {
        return [];
      }
      var classesTemp = classesData.split('`');
      var classes = [];
      for (var i = 0; i < classesTemp.length; i = i + 2) {
        classes.push({
          classID: classesTemp[i],
          className: classesTemp[i + 1],
          isActive: isActive
        });
      }
      return classes;
    });
  });
};

var Works = {
  init: function init(tokenObj) {
    this.tokenObj = tokenObj;
    this.initDate();
    this.startDate = Date.getBeforeDate(365);
    this.endDate = Date.getBeforeDate(0);
    this.getClassesOptions();
    this.getTypesOptions();
    this.getWorkList();
    this.bindHandle();
  },
  initDate: function initDate() {
    var _this = this;

    $('#teacher-rangedate').DatePicker({
      type: 'rangedate',
      startDate: moment().subtract(1, 'year'),
      endDate: moment(),
      dateChange: function dateChange(startDate, endDate) {
        _this.startDate = startDate.replace(/\./g, '-');
        _this.endDate = endDate.replace(/\./g, '-');
      }
    });
  },
  setSearchOptions: function setSearchOptions(isClasses, optionData) {
    var optionsHTML = optionData.map(function (option) {
      return isClasses ? '<option value=' + option.classID + '>' + option.className + '(' + (option.isActive ? '活动' : '非活动') + ')</option>' : '<option value=' + option.workid + '>' + option.workname + '(' + option.coursename + ')</option>';
    });
    optionsHTML.unshift('<option value="total">全部</option>');
    var selectClassName = isClasses ? '.teacher-searchworks-selectclass' : '.teacher-searchworks-worktype';
    $(selectClassName).html(optionsHTML.join(''));
  },
  setStudentList: function setStudentList(worksArr) {
    var worksHTMLArr = worksArr.map(function (work) {
      return '\n        <tr class="list-table-row teacher-work-row" workid=' + work.workID + '>\n          <td>' + work.className + '</td>\n          <td>' + work.studentName + '/' + work.studentID + '</td>\n          <td>' + work.workTitle + '</td>\n          <td>' + (work.level === ' ' ? '暂无' : work.level) + '</td>\n          <td>' + work.size + '</td>\n          <td>' + work.submitTime + '</td>\n          <td>\n            <span class=\'list-table-teacherwork\' workid=' + work.workID + '>\u5220\u9664</span>\n          </td>\n        </tr>\n      ';
    });
    $('.teacher-work-list').html(worksHTMLArr.join(''));
  },
  getClassesOptions: function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
      var _this2 = this;

      var coursesArr, yearsArr, activeClassPromises, unactiveClassPromises, totalClassPromises;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              coursesArr = [];
              yearsArr = [];
              _context.next = 4;
              return (0, _fetchApi.fetchAPI)('http://222.24.63.100:9138/cms/getcourseinfo', this.tokenObj).then(function (coursesData) {
                var coursesTempArr = coursesData.split('`');
                for (var i = 0; i < coursesTempArr.length; i = i + 3) {
                  coursesArr.push(coursesTempArr[i]);
                }
              });

            case 4:
              _context.next = 6;
              return (0, _fetchApi.fetchAPI)('http://222.24.63.100:9138/cms/getyearinfo', this.tokenObj).then(function (yearsData) {
                var yearsTemp = yearsData.split('`');
                for (var i = 0; i < yearsTemp.length; i = i + 2) {
                  yearsArr.push(yearsTemp[i]);
                }
              });

            case 6:
              activeClassPromises = getClasses(coursesArr);
              unactiveClassPromises = getClasses(coursesArr, false, yearsArr);
              totalClassPromises = activeClassPromises.concat(unactiveClassPromises);

              Promise.all(totalClassPromises).then(function (classesArr) {
                var totalClasses = [];
                classesArr.forEach(function (classes) {
                  totalClasses = totalClasses.concat(classes);
                });
                _this2.setSearchOptions(true, totalClasses);
                // console.log(totalClasses);
              });

            case 10:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function getClassesOptions() {
      return _ref.apply(this, arguments);
    }

    return getClassesOptions;
  }(),
  getTypesOptions: function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
      var _this3 = this;

      var courseArr;
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              courseArr = [];
              _context2.next = 3;
              return (0, _fetchApi.fetchAPI)('http://222.24.63.100:9138/cms/getcourseinfo', this.tokenObj).then(function (courseData) {
                var courseTemp = courseData.split('`');
                for (var i = 0; i < courseTemp.length; i = i + 3) {
                  courseArr.push({
                    courseid: courseTemp[i],
                    coursename: courseTemp[i + 1]
                  });
                }
              });

            case 3:
              Promise.all(courseArr.map(function (courseInfo) {
                var courseid = courseInfo.courseid,
                    coursename = courseInfo.coursename;

                return (0, _fetchApi.fetchAPI)('http://222.24.63.100:9138/cms/getworktype', Object.assign({}, _this3.tokenObj, {
                  courseid: courseid
                })).then(function (workType) {
                  var worktypeInfos = [];
                  if (workType === '0') return worktypeInfos;
                  var worksTemp = workType.split('`');
                  for (var i = 0; i < worksTemp.length; i = i + 2) {
                    worktypeInfos.push({
                      coursename: coursename,
                      workid: worksTemp[i],
                      workname: worksTemp[i + 1]
                    });
                  }
                  return worktypeInfos;
                });
              })).then(function (worktypeInfoArr) {
                var totalworktypeInfoArr = [];
                worktypeInfoArr.forEach(function (typeInfos) {
                  totalworktypeInfoArr = totalworktypeInfoArr.concat(typeInfos);
                });
                _this3.setSearchOptions(false, totalworktypeInfoArr);
                // console.log(totalworktypeInfoArr);
              });

            case 4:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function getTypesOptions() {
      return _ref2.apply(this, arguments);
    }

    return getTypesOptions;
  }(),
  getWorkList: function getWorkList() {
    var _this4 = this;

    (0, _fetchApi.fetchAPI)('http://222.24.63.100:9138/cms/searchallwork', this.tokenObj).then(function (workData) {
      var worksArr = [];
      var worksTemp = workData.split('`');
      for (var i = 0; i < worksTemp.length; i = i + 9) {
        worksArr.push({
          className: worksTemp[i],
          studentID: worksTemp[i + 1],
          studentName: worksTemp[i + 2],
          workID: worksTemp[i + 3],
          submitTime: worksTemp[i + 4],
          typeID: worksTemp[i + 5],
          workTitle: worksTemp[i + 6],
          size: worksTemp[i + 7],
          level: worksTemp[i + 8]
        });
      }
      worksArr.pop();
      _this4.setStudentList(worksArr);
      console.log(worksArr);
    });
  },
  bindHandle: function bindHandle() {}
};

exports.default = function (tokenObj) {
  Works.init(tokenObj);
};

/***/ })
/******/ ]);