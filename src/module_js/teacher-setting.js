/*
 * @Author: liruihao02
 * @Date:   2018-04-21
 * @Last Modified by:   liruihao02
 * @Last Modified time: 2018-04-21
 */
import {
  fetchAPI
} from '../pub_funcs/fetchApi.js';

let firDO = true;

const eventHandle = {
  infoClickHandle: function() {
    $('.teacher-change-info').css('display', 'block');
    $('.teacher-change-info').animate({
      opacity: '1'
    }, 1000);
  },
  changeInfoClickHandle: function() {
    const changeObj = {
      name: $('.teach-change-name').find('input').val(),
      oldpass: $('.teach-change-oldpass').find('input').val(),
      newpass: $('.teach-change-newpass').find('input').val(),
      id: Setting.tokenObj.id,
      token: Setting.tokenObj.token
    }

    fetchAPI('http://222.24.63.100:9138/cms/setprofile', changeObj)
      .then(result => {
        if (result === '1') {
          Setting.getStudentInfo();
          $('.teach-change-name').find('input').val('');
          $('.teach-change-oldpass').find('input').val('');
          $('.teach-change-newpass').find('input').val('');

          alert('修改成功');
        } else if (result === '0') {
          alert('修改失败，请检查旧密码是否正确');
        }
      })
  }
}

const Setting = {
  init: function(tokenObj) {
    this.tokenObj = tokenObj;
    if (firDO) {
      firDO = !firDO;
      this.bindHandle();
    }
    this.getStudentInfo();
  },
  bindHandle: function() {
    $('.teach-info-button').bind('click', () => {
      eventHandle.infoClickHandle();
    });
    $('.teach-change-button').bind('click', () => {
      eventHandle.changeInfoClickHandle();
    });
  },
  getStudentInfo: function() { //获取学生个人信息
    fetchAPI('http://222.24.63.100:9138/cms/getprofile', this.tokenObj)
      .then(teachInfo => {
        // console.log(stuInfo);
        if (teachInfo.toString().slice(0, 1) === '0') {
          return {
            id: '获取信息失败',
            class: '获取信息失败',
            name: '获取信息失败'
          }
        } else {
          return {
            id: this.tokenObj.id,
            class: teachInfo.split('`')[0],
            name: teachInfo.split('`')[1] === 'null' ? '暂无,请修改' : teachInfo.split('`')[1]
          }
        }
      })
      .then(infoJson => {
        this.setData(infoJson);
      })
  },
  setData: function(infoJson) {
    $($('.teacher-info-li').get(0)).find('span').get(1).innerHTML = infoJson.id;
    $($('.teacher-info-li').get(1)).find('span').get(1).innerHTML = infoJson.name;
    $($('.teacher-info-li').get(2)).find('span').get(1).innerHTML = infoJson.class;
  }
}

export default (tokenObj) => {
  Setting.init(tokenObj);
}