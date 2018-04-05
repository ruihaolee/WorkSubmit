import '../less/index.less';
import Router from '../pub_funcs/router.js';
import {
  indexCheckFunc
} from '../pub_funcs/routerView.js';
import './login.js'

const init = () => {
  if (!$.cookie('per')) {
    $.cookie('per', 'login');
  }
  let indexRoute = null;
  $(document.body).css({
    height: `${$(window).height()}px`
  });
  if (!$.cookie('token')) {
    indexRoute = new Router('login');
  } else if ($.cookie('token') && $.cookie('per') === 'teacher') {
    indexRoute = new Router('teacher');
  } else if ($.cookie('token') && $.cookie('per') === 'student') {
    indexRoute = new Router('student');
  }
  indexRoute.init();
  indexRoute.route('/', indexCheckFunc[$.cookie('per')]);
  indexRoute.changeRoute('/');
}
init();