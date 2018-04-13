/*
 * @Author: liruihao02
 * @Date:   2018-04-13
 * @Last Modified by:   liruihao02
 * @Last Modified time: 2018-04-13
 */
import {
  fetchAPI
} from '../pub_funcs/fetchApi.js';

let firDO = true;

const WritingWork = {
  init: function(typeToken) {
    if (firDO) {
      firDO = !firDO;
    } else {
      return;
    }
    this.typeToken = typeToken;
    this.bindHandle();
  },
  bindHandle: function() {}
}

export default (typeToken) => {
  WritingWork.init(typeToken);
}