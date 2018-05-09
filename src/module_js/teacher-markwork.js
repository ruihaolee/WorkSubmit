/*
 * @Author: liruihao
 * @Date:   2018-05-09 21:26:12
 * @Last Modified by:   liruihao
 * @Last Modified time: 2018-05-09 21:46:00
 */

import {
  fetchAPI
} from '../pub_funcs/fetchApi.js';

let firDO = true;

const setView = (workDetail) => {
  const detailHTML = `
    <div class="rightbody-title">学生作业批改/查看</div>
      <div class="workdetail-title">${workDetail.title}</div>
      <div class="workdetail-info">
          <div class="workdetail-typeid">作业类型: ${workDetail.typeid}</div>
          <div class="workdetail-member">成员: ${workDetail.member}</div>
          <div class="workdetail-submittime">提交日期：${workDetail.time}</div>
      </div>
    <div class="workdetail-body">${workDetail.body}</div>
    <div class="workdetail-levelbox">
      <div class="workdetail-level"><span>老师评分：</span>${workDetail.level}</div>
      <div class="workdetail-levelsay"><span>老师评语：</span>${workDetail.levelsay}</div>
    </div>
    `;
  $('.teacher-workdetail').html(detailHTML);
}

const MarkWork = {
  init: function(detailToken) {
    this.detailToken = detailToken;
    this.defaultWorkDetail();
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
        setView(this.workDetail);
        console.log(detailTemp, this.workDetail);
      })
  }
}

export default (detailToken) => {
  MarkWork.init(detailToken);
}