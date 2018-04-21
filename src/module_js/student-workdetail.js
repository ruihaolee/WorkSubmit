/*
 * @Author: liruihao02
 * @Date:   2018-04-16
 * @Last Modified by:   liruihao02
 * @Last Modified time: 2018-04-16
 */

import {
  fetchAPI
} from '../pub_funcs/fetchApi.js';

let firDO = true;

const WorkDetail = {
  init: function(detailToken) {
    // if (firDO) {
    //   firDO = !firDO;
    // } else {
    //   return;
    // }
    this.detailToken = detailToken;
    this.defaultWorkDetail();
    this.bindHandle();
  },
  defaultWorkDetail: function() {
    fetchAPI('http://222.24.63.100:9138/cms/getworkdetail', this.detailToken)
      .then(detail => {
        const detailTemp = detail.split('`');
        detailTemp.pop();
        this.workDetail = {
          time: detailTemp[0],
          typeid: detailTemp[1],
          title: detailTemp[2],
          body: detailTemp[3],
          member: detailTemp[4] === 'null' ? '无' : detailTemp[4],
          level: detailTemp[6] === ' ' ? '暂无' : detailTemp[6],
          levelsay: detailTemp[7] === ' ' ? '暂无' : detailTemp[7]
        }
        console.log(detailTemp, this.workDetail);
      })
  },
  bindHandle: function() {

  }
}

export default (detailToken) => {
  WorkDetail.init(detailToken);
}