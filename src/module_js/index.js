import '../less/index.less';
import '../pub_funcs/datePicker.js'
import Router from '../pub_funcs/router.js';
import {
  indexCheckFunc
} from '../pub_funcs/routerView.js';
import Login from './login.js'
import Student from './student.js'

const init = () => {
  if (!$.cookie('per')) {
    $.cookie('per', 'login');
  }
  let indexRoute = null;
  $(document.body).css({
    height: `${$(window).height()}px`
  });

  if (!$.cookie('token') || $.cookie('token') === 'null') {
    indexRoute = new Router('login');
    Login.init();
  } else if ($.cookie('token') && $.cookie('per') === 'teacher') {
    indexRoute = new Router('teacher');
  } else if ($.cookie('token') && $.cookie('per') === 'student') {
    indexRoute = new Router('student');
    Student.init({
      id: $.cookie('id'),
      token: $.cookie('token')
    });
  }
  indexRoute.init();
  indexRoute.route('/', indexCheckFunc[$.cookie('per')]);
  indexRoute.changeRoute('/');
}
init();