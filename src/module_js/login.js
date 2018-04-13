/*
 * @Author: liruihao02
 * @Date:   2018-04-04
 * @Last Modified by:   liruihao02
 * @Last Modified time: 2018-04-13
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
import Student from './student.js';

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
export default class Login {
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

    fetchAPI('http://222.24.63.100:9138/cms/login', signObj)
      .then(data => {
        this.token = data;

        const per = data.toString().slice(0, 1);
        // console.log(per);
        if (per === '0') {
          elstyleChange.errortextBlock('账号或密码错误，请检查');
          return;
        } else if (per === '2') {
          this.route = new Router('teacher');
          this.route.init();
          this.route.route('/', indexCheckFunc.teacher);
          this.route.changeRoute('/');
          $.cookie('per', 'teacher', {
            expires: 1
          });
        } else if (per === '1') {
          this.route = new Router('student');
          this.route.init();
          this.route.route('/', indexCheckFunc.student);
          this.route.changeRoute('/');
          $.cookie('per', 'student', {
            expires: 1
          });
          Student.init({
            id: signObj.id,
            token: this.token
          });
        }
        $.cookie('token', this.token, {
          expires: 1
        });
        $.cookie('id', signObj.id, {
          expires: 1
        });
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
// Login.init();