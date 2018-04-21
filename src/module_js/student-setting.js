/*
 * @Author: liruihao02
 * @Date:   2018-04-06
 * @Last Modified by:   liruihao02
 * @Last Modified time: 2018-04-21
 */
import {
  fetchAPI
} from '../pub_funcs/fetchApi.js';

let firDO = true;

const eventHandle = {
  infoClickHandle: function() {
    $('.student-change-info').css('display', 'block');
    $('.student-change-info').animate({
      opacity: '1'
    }, 1000);
  },
  changeInfoClickHandle: function() {
    const changeObj = {
      name: $('.stu-change-name').find('input').val(),
      oldpass: $('.stu-change-oldpass').find('input').val(),
      newpass: $('.stu-change-newpass').find('input').val(),
      id: Setting.tokenObj.id,
      token: Setting.tokenObj.token
    }

    fetchAPI('http://222.24.63.100:9138/cms/setprofile', changeObj)
      .then(result => {
        if (result === '1') {
          Setting.getStudentInfo();
          $('.stu-change-name').find('input').val('');
          $('.stu-change-oldpass').find('input').val('');
          $('.stu-change-newpass').find('input').val('');

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
    $('.student-info-button').bind('click', () => {
      eventHandle.infoClickHandle();
    });
    $('.stu-change-button').bind('click', () => {
      eventHandle.changeInfoClickHandle();
    });
  },
  getStudentInfo: function() { //获取学生个人信息
    fetchAPI('http://222.24.63.100:9138/cms/getprofile', this.tokenObj)
      .then(stuInfo => {
        // console.log(stuInfo);
        if (stuInfo.toString().slice(0, 1) === '0') {
          return {
            id: '获取信息失败',
            class: '获取信息失败',
            name: '获取信息失败'
          }
        } else {
          return {
            id: stuInfo.split(' ')[0],
            class: stuInfo.split(' ')[1].split('`')[0],
            name: stuInfo.split(' ')[1].split('`')[1]
          }
        }
      })
      .then(infoJson => {
        this.setData(infoJson);
      })
  },
  setData: function(infoJson) {
    $($('.student-info-li').get(0)).find('span').get(1).innerHTML = infoJson.id;
    $($('.student-info-li').get(1)).find('span').get(1).innerHTML = infoJson.name;
    $($('.student-info-li').get(2)).find('span').get(1).innerHTML = infoJson.class;
  }
}

export default (tokenObj) => {
  Setting.init(tokenObj);
}