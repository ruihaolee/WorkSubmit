/*
 * @Author: liruihao02
 * @Date:   2018-04-06
 * @Last Modified by:   liruihao02
 * @Last Modified time: 2018-04-06
 */
import {
  fetchAPI
} from '../pub_funcs/fetchApi.js';

const Setting = {
  getStudentInfo: function() {
    const stuObj = {
      token: $.cookie('token'),
      id: $.cookie('id')
    };
    fetchAPI('http://222.24.63.100:9138/cms/getprofile', stuObj)
      .then(stuInfo => {
        console.log(stuInfo);
      });
  }
}

export default () => {
  Setting.getStudentInfo();
}