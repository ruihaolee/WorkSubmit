/*
 * @Author: liruihao
 * @Date:   2018-05-09 21:26:12
 * @Last Modified by:   liruihao
 * @Last Modified time: 2018-05-10 19:40:25
 */

import {
  fetchAPI
} from '../pub_funcs/fetchApi.js';

let firDO = true;

const eventHandle = {
  markClickHandle: function() {
    const markObject = {
      level: $('.teacher-mark-level').val(),
      comment: $('.teacher-mark-comment').val()
    };
    fetchAPI('http://222.24.63.100:9138/cms/markwork', Object.assign({}, MarkWork.detailToken, markObject))
      .then(result => {
        result === '0' ? alert('批改失败') : alert('批改成功');
      })
  }
}

const setView = (workDetail, studentInfo) => {
  const studentInfoHTML = `
    <div>该生班级: ${studentInfo.stuClassName}</div>
    <div>该生姓名/学号: ${studentInfo.stuNameID}</div>
  `;
  const detailHTML = `
    <div class="workdetail-title">${workDetail.title}</div>
    <div class="workdetail-info">
        <div class="workdetail-typeid">作业类型: ${workDetail.typeid}</div>
        <div class="workdetail-member">成员: ${workDetail.member}</div>
        <div class="workdetail-submittime">提交日期：${workDetail.time}</div>
    </div>
    <div class="workdetail-body">${workDetail.body}</div>
    `;
  $('.teacher-mark-stuinfo').html(studentInfoHTML);
  $('.teacher-mark-workdetail').html(detailHTML);
}

const MarkWork = {
  init: function(detailToken, studentInfo) {
    this.detailToken = detailToken;
    this.studentInfo = studentInfo;
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
        setView(this.workDetail, this.studentInfo);
      })
  },
  bindHandle: function() {
    $('.teacher-mark-button').bind('click', () => {
      eventHandle.markClickHandle();
    })
  }
}

export default (detailToken, studentInfo) => {
  MarkWork.init(detailToken, studentInfo);
}