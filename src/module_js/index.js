import '../less/index.less';
import Router from '../pub_funcs/router.js';
import './login.js'

const indexCheckFunc = {
  login: () => {
    $('.container-body').css({
      display: 'none'
    });
    $('.login').css({
      display: 'block'
    })
  }
}

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