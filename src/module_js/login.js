/*
 * @Author: liruihao02
 * @Date:   2018-04-04
 * @Last Modified by:   liruihao02
 * @Last Modified time: 2018-04-05
 */
import '../less/login.less';
import backAnamite from './login-background.js';
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
      console.log(this.remeberState);
      this.remeberClickhandle();
    })
  }

  static login() {
    const signObj = {
      id: $('.login-username').val(),
      pass: $('.login-password').val()
    };
    const checkre = /^0\d{7}$/;
    if (!checkre.test(signObj.id)) {
      elstyleChange.errortextBlock('学号格式不正确')
    }

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
    // this.remeberState = !this.remeberState;
  }
}
Login.init();