/*
 * @Author: liruihao02
 * @Date:   2018-04-06
 * @Last Modified by:   liruihao02
 * @Last Modified time: 2018-04-06
 */
import Router from '../pub_funcs/router.js';
import {
  indexCheckFunc
} from '../pub_funcs/routerView.js';
import Login from './login.js';

export default () => {
  const route = new Router('login');
  route.init();
  route.route('/', indexCheckFunc.login);
  route.changeRoute('/');

  $.cookie('per', 'login');
  $.cookie('token', null);
  Login.init();
}