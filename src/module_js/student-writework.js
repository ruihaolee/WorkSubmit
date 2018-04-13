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

const submitworkHandle = () => {
  const workInfo = Object.assign({}, WritingWork.typeToken, {
    title: $('.student-worktitle-value').val(),
    work: WritingWork.ue.getContent()
  });
  fetchAPI('http://222.24.63.100:9138/cms/submitwork', workInfo)
    .then(result => {
      if (result === '0') {
        alert('提交失败');
      } else if (result === '1') {
        alert('提交成功');
      }
    })
  console.log(workInfo);
}

const WritingWork = {
  init: function(typeToken) {
    if (firDO) {
      firDO = !firDO;
    } else {
      this.viewBack();
      //除了第一次加载其余都清空内容
      return;
    }
    this.typeToken = typeToken;
    this.ue = UE.getEditor('editor-container');
    this.bindHandle();
  },
  bindHandle: function() {
    $('.student-work-submit').click(() => {
      submitworkHandle()
    })
  },
  viewBack: function() {
    console.log('viewBack');
    this.ue.execCommand('cleardoc');
    $('.student-worktitle-value').val('');
  }
}

export default (typeToken) => {
  WritingWork.init(typeToken);
}