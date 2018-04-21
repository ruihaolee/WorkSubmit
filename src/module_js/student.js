import '../less/left-container.less';
import '../less/student.less';
import Router from '../pub_funcs/router.js';
import exitLogin from './exitlogin.js';
import {
  fetchAPI
} from '../pub_funcs/fetchApi.js'
import {
  studentCheckFunc
} from '../pub_funcs/routerView.js';
import studentSetting from './student-setting.js';
import studentCourse from './student-course.js';
import studentWorkInfor from './student-workinfo.js';

let TokenObj = null;

const LeftContainer = {
  menuClickHandle: function(event) {
    let target = event.target;
    if (!target.className.match('menu-li')) {
      target = this.findTargetli(target);
    }
    this.changeActive(target); //改变样式

    const targetName = target.getAttribute('name');
    console.log(targetName);
    switch (targetName) {
      case 'exitlogin':
        exitLogin();
        break;
      case 'setting':
        Student.studentRoute.changeRoute('setting');
        studentSetting(TokenObj);
        break;
      case 'course':
        Student.studentRoute.changeRoute('course');
        studentCourse(TokenObj, Student.studentRoute);
        break;
      case 'works':
        Student.studentRoute.changeRoute('works');
        studentWorkInfor(TokenObj, Student.studentRoute);
        break;
      default:
        break;
    }
  },

  findTargetli: function(target) {
    while (!target.className.match('menu-li')) {
      target = target.parentNode;
    }
    return target;
  },

  changeActive: function(target) {
    let liArr = $('.student-menu-li');
    for (let i = 0; i < liArr.length; i++) {
      liArr[i].className = 'menu-li student-menu-li';
    }
    target.className = 'menu-li student-menu-li active-li';
  }
}

export default class Student {
  static init(tokenObj) {
    if (!TokenObj) {
      this.bindHandle();
      this.initRoute();
    }
    TokenObj = tokenObj;
    this.routeBack();
    console.log(TokenObj);
  }

  static initRoute() {
    this.studentRoute = new Router('student');
    this.studentRoute.init();
    this.studentRoute.route('setting', studentCheckFunc.setting);
    this.studentRoute.route('course', studentCheckFunc.course);
    this.studentRoute.route('writework', studentCheckFunc.writework);
    this.studentRoute.route('works', studentCheckFunc.works);
    this.studentRoute.route('workdetail', studentCheckFunc.workdetail);
  }

  static routeBack() {
    const firLi = $('.student-menu-li').get(0);
    LeftContainer.changeActive(firLi);

    this.studentRoute.changeRoute('setting');
    studentSetting(TokenObj);
  }

  static bindHandle() {
    $('.student-menu-ul').bind('click', event => {
      LeftContainer.menuClickHandle(event);
    })
  }
}