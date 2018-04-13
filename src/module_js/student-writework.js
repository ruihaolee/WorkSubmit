/*
* @Author: liruihao02
* @Date:   2018-04-13
* @Last Modified by:   liruihao02
* @Last Modified time: 2018-04-13
*/
import {
  fetchAPI
} from '../pub_funcs/fetchApi.js';

const submitworkHandle = () => {
  const workInfo = Object.assign({}, WritingWork.typeToken, {
    title: $('.student-worktitle-value').val(),
    work: WritingWork.ue.getContent()
  });
  console.log(workInfo);
}

const WritingWork = {
  init: function(typeToken) {
    this.typeToken = typeToken;
    this.ue = UE.getEditor('editor-container');
    this.bindHandle();
    console.log(typeToken);
  },
  bindHandle: function() {
    $('.student-work-submit').click(() => {
      submitworkHandle()
    })
  }
}

export default (typeToken) => {
  WritingWork.init(typeToken);
}