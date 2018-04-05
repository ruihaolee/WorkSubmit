/*
 * @Author: liruihao02
 * @Date:   2018-04-04
 * @Last Modified by:   liruihao02
 * @Last Modified time: 2018-04-05
 */
import '../less/login.less';
import backAnamite from './login-background.js';
import Router from '../pub_funcs/router.js';
import {
  fetchAPI
} from '../pub_funcs/fetchApi.js'
import {
  indexCheckFunc
} from '../pub_funcs/routerView.js';

const elstyleChange = {
  errortextBlock: (text) => {
    $('.error-text').html(text);
    $('.error-text')[0].id = 'error-active';
  },
  errortextNone: () => {
    $('.error-text').html('');
    $('.error-text')[0].id = '';
  }
}
class Login {
  constructor() {}

  static init() {
    backAnamite();
    this.bindHandle();
    this.remeberState = true;
  }

  static bindHandle() {
    $('.login-submit').bind('click', () => {
      this.login();
    })
    $('.login-input').bind('input', () => {
      this.inputChangehandle();
    })
    $('.remimg').bind('click', () => {
      this.remeberClickhandle();
    })
  }

  static login() {
    const signObj = {
      id: $('.login-username').val(),
      pass: $('.login-password').val()
    };
    // const checkre = /^0\d{7}$/;
    // if (!checkre.test(signObj.id)) {
    //   elstyleChange.errortextBlock('学号格式不正确')
    // }
    fetchAPI('http://222.24.63.100:9138/cms/login', signObj)
      .then(data => {
        this.token = data;

        const per = data.toString().slice(0, 1);
        if (per === '2') {
          console.log(222);
          this.route = new Router('teacher');
          this.route.init();
          this.route.route('/', indexCheckFunc.teacher);
          this.route.changeRoute('/');
        } else if (per === '1') {
          this.route = new Router('student');
          this.route.init();
          this.route.route('/', indexCheckFunc.student);
          this.route.changeRoute('/');
        }
        console.log(per);
      })
  }

  static inputChangehandle() {
    if (!$('.error-text')[0].id) {
      return;
    } else {
      elstyleChange.errortextNone();
    }
  }

  static remeberClickhandle() {
    this.remeberState = !this.remeberState;
    if (this.remeberState) {
      $('.login-reimg').attr('src', './image/rempass_on.png');
    } else {
      $('.login-reimg').attr('src', './image/rempass_off.png');
    }
  }
}
Login.init();