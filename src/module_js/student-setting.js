/*
 * @Author: liruihao02
 * @Date:   2018-04-06
 * @Last Modified by:   liruihao02
 * @Last Modified time: 2018-04-07
 */
import {
  fetchAPI
} from '../pub_funcs/fetchApi.js';

const eventHandle = {
  infoClickHandle: function() {
    $('.student-change-info').css('display', 'block');
    $('.student-change-info').animate({
      opacity: '1'
    }, 1000);
  },
  changeInfoClickHandle: function() {
    
  }
}

const Setting = {
  init: function(tokenObj) {
    this.getStudentInfo(tokenObj);
    this.bindHandle();
  },
  bindHandle: function() {
    $('.student-info-button').bind('click', () => {
      eventHandle.infoClickHandle();
    })
  },
  getStudentInfo: function(tokenObj) {
    fetchAPI('http://222.24.63.100:9138/cms/getprofile', tokenObj)
      .then(stuInfo => {
        console.log(stuInfo);
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