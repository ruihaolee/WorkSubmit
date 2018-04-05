import '../less/index.less';
import Router from '../pub_funcs/router.js';
import {
  indexCheckFunc
} from '../pub_funcs/routerView.js';
import './login.js'

const init = () => {
  $(document.body).css({
    height: `${$(window).height()}px`
  });

  const indexRoute = new Router('login');
  indexRoute.init();
  indexRoute.route('/', indexCheckFunc.login);
  indexRoute.changeRoute('/');
}
init();