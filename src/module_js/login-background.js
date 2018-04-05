/*
 * @Author: liruihao02
 * @Date:   2018-04-05
 * @Last Modified by:   liruihao02
 * @Last Modified time: 2018-04-05
 */

const animateObj = {
  init: function() {
    this.start();
  },
  start: function() {
    let imgIndex = $('.login-backgroud-img').length - 1;
    this.slideImg(imgIndex);
  },
  slideImg: function(imgIndex) {
    if (imgIndex === 0) {
      $($('.login-backgroud-img').get(4)).animate({
        opacity: '1'
      }, 4000)
    }
    $($('.login-backgroud-img').get(imgIndex)).animate({
      opacity: '0'
    }, 4000, () => {
      imgIndex = imgIndex - 1;
      if (imgIndex === -1) {
        $('.login-backgroud-img').css({
          opacity: '1'
        });
        imgIndex = 4;
      }
      this.slideImg(imgIndex);
    })
  }
}

export default () => {
  animateObj.init();
}