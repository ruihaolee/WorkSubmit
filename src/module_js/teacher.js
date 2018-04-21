/*
 * @Author: liruihao02
 * @Date:   2018-04-04
 * @Last Modified by:   liruihao02
 * @Last Modified time: 2018-04-21
 */
import '../less/left-container.less';
import '../less/teacher.less';
import Router from '../pub_funcs/router.js';
import exitLogin from './exitlogin.js';
import {
  fetchAPI
} from '../pub_funcs/fetchApi.js'
import {
  teacherCheckFunc
} from '../pub_funcs/routerView.js';
import teacherSetting from './teacher-setting.js';

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
        Teacher.teacherRoute.changeRoute('setting');
        teacherSetting(TokenObj);
        break;
      case 'courseyears':
        break;
      case 'class':
        break;
      case 'students':
        break;
      case 'works':
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
    let liArr = $('.teacher-menu-li');
    for (let i = 0; i < liArr.length; i++) {
      liArr[i].className = 'menu-li teacher-menu-li';
    }
    target.className = 'menu-li teacher-menu-li active-li';
  }
}

export default class Teacher {
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
    this.teacherRoute = new Router('teacher');
    this.teacherRoute.init();
    this.teacherRoute.route('setting', teacherCheckFunc.setting);
  }

  static routeBack() {
    const firLi = $('.teacher-menu-li').get(0);
    LeftContainer.changeActive(firLi);

    Teacher.teacherRoute.changeRoute('setting');
    teacherSetting(TokenObj);
  }

  static bindHandle() {
    console.log('AAA');
    $('.teacher-menu-ul').bind('click', event => {
      LeftContainer.menuClickHandle(event);
    })
  }
}