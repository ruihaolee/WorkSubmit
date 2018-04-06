import '../less/left-container.less';
import '../less/student.less';
import Router from '../pub_funcs/router.js';
import {
  fetchAPI
} from '../pub_funcs/fetchApi.js'
import exitLogin from './exitlogin.js';
// import {
//   indexCheckFunc
// } from '../pub_funcs/routerView.js';

const LeftContainer = {
  menuClickHandle: function() {
    let target = event.target;
    if (!target.className.match('menu-li')) {
      target = this.findTargetli(target);
    }
    const targetName = target.getAttribute('name');
    this.changeActive(target); //改变样式
    console.log(targetName);
    switch (targetName) {
      case 'exitlogin':
        exitLogin();
        break;
    }
    // var routerName = 'admin' + targetName; //子路由跳转
    // router.go({
    //   name: routerName
    // });
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
  static init() {
    this.bindHandle();
    this.styleBack();
    this.initRoute();

  }

  static initRoute() {
    this.studentRoute = new Router('student');
    this.studentRoute.init();
    // this.studentRoute.route('/', )
  }

  static styleBack() {
    const firLi = $('.menu-li').get(0);
    LeftContainer.changeActive(firLi);
  }

  static bindHandle() {
    $('.menu-ul').bind('click', event => {
      LeftContainer.menuClickHandle(event);
    })
  }
}