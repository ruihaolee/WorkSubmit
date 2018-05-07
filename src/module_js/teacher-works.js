/*
 * @Author: liruihao
 * @Date:   2018-05-07 15:53:01
 * @Last Modified by:   liruihao
 * @Last Modified time: 2018-05-07 21:06:46
 */
import {
  fetchAPI
} from '../pub_funcs/fetchApi.js';

let firDO = true;

const eventHandle = {};

const Works = {
  init: function(tokenObj) {
    this.tokenObj = tokenObj;
    this.initDate();
    this.startDate = Date.getBeforeDate(7);
    this.endDate = Date.getBeforeDate(0);
    this.bindHandle();
  },
  initDate: function() {
    $('#teacher-rangedate').DatePicker({
      type: 'rangedate',
      startDate: moment().subtract(1, 'week'),
      endDate: moment(),
      dateChange: (startDate, endDate) => {
        this.startDate = startDate.replace(/\./g, '-');
        this.endDate = endDate.replace(/\./g, '-');
        // this.defaultSearch();
      }
    });
  },
  bindHandle: function() {}
}

export default (tokenObj) => {
  Works.init(tokenObj);
}