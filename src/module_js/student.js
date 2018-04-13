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

const LeftContainer = {
  menuClickHandle: function(event, tokenObj) {
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
        // studentSetting(tokenObj);
        break;
      case 'course':
        Student.studentRoute.changeRoute('course');
        studentCourse(tokenObj, Student.studentRoute);
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
    let liArr = $('.menu-li');
    for (let i = 0; i < liArr.length; i++) {
      liArr[i].className = 'menu-li';
    }
    target.className = 'menu-li active-li';
  }
}

export default class Student {
  static init(tokenObj) {
    this.bindHandle(tokenObj);
    this.initRoute();
    this.routeBack(tokenObj);
  }

  static initRoute() {
    this.studentRoute = new Router('student');
    this.studentRoute.init();
    this.studentRoute.route('setting', studentCheckFunc.setting);
    this.studentRoute.route('course', studentCheckFunc.course);
    this.studentRoute.route('writework', studentCheckFunc.writework);
  }

  static routeBack(tokenObj) {
    const firLi = $('.menu-li').get(0);
    LeftContainer.changeActive(firLi);

    this.studentRoute.changeRoute('setting');
    studentSetting(tokenObj);
  }

  static bindHandle(tokenObj) {
    $('.menu-ul').bind('click', event => {
      LeftContainer.menuClickHandle(event, tokenObj);
    })
  }
}