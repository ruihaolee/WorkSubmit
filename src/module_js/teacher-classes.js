/*
 * @Author: liruihao02
 * @Date:   2018-04-21
 * @Last Modified by:   Marte
 * @Last Modified time: 2018-04-21
 */
import {
  fetchAPI
} from '../pub_funcs/fetchApi.js';

let firDO = true;

const eventHandle = {
  panClickHandle: function(whichPan, target) {
    Classes.panType = whichPan;
    $('.teacher-classbutton').attr('class', 'teacher-classbutton');
    $(target).attr('class', 'teacher-classbutton teacher-checkactive-clicked');
    if (whichPan === 'activeClass') {
      $('.teacher-searchactive-check').css('display', 'block');
      $('.teacher-searchunactive-check').css('display', 'none');
    } else if (whichPan === 'unactiveClass') {
      $('.teacher-searchactive-check').css('display', 'none');
      $('.teacher-searchunactive-check').css('display', 'block');
    }
    Classes.getClassList();
  },

  selectTypeChangeHandle: function(target) {
    const targetClassName = target.className;
    const selectValue = target.value;
    if (targetClassName.indexOf('teacher-searchactive-select') !== -1) {
      Classes.selectCheck.active = selectValue;
    } else if (targetClassName.indexOf('teacher-searchunactive-select') !== -1) {
      targetClassName.indexOf('teacher-searchunactive-coursetype') !== -1 ? Classes.selectCheck.unactive.course = selectValue : Classes.selectCheck.unactive.year = selectValue;
    }

    Classes.getClassList();
  },

  createClassHandle: function() {
    const newClassObj = {
      yearid: $('.teacher-createclass-year').val(),
      courseid: $('.teacher-createclass-course').val(),
      name: $('.teacher-createclass-name').val()
    };
    const fetchObj = Object.assign({}, newClassObj, Classes.tokenObj);
    fetchAPI('http://222.24.63.100:9138/cms/addclass', fetchObj)
      .then(result => {
        if (result === '1') {
          alert('添加成功');
          Classes.getClassList();
        } else if (result === '0') {
          alert('添加失敗');
        }
      })
  },

  checkActiveDeleteHandle: function(isCheckActive, isDelete, target) {
    const classid = $(target).attr('classid');
    const fetchUrl = isCheckActive ? 'http://222.24.63.100:9138/cms/setclasstype' : 'http://222.24.63.100:9138/cms/delclass';
    const infoObj = isCheckActive ? {
      classid,
      isactive: Classes.panType === 'activeClass' ? false : true
    } : {
      classid
    };
    fetchAPI(fetchUrl, Object.assign({}, infoObj, Classes.tokenObj))
      .then(result => {
        const sucessAlert = isCheckActive ? '切换活动状态成功' : '删除班级成功';
        const failAlert = isCheckActive ? '切换活动状态失败' : '删除班级失败';
        if (result === '0') {
          alert(failAlert);
        } else if (result === '1') {
          alert(sucessAlert);
        }
        Classes.getClassList();
      })
  }
}

const Classes = {
  init: function(tokenObj) {
    this.tokenObj = tokenObj;
    this.panType = 'activeClass';
    this.selectCheck = {
      active: null,
      unactive: {}
    };

    this.bindHandle();
    this.getYearsCourseOpitons();
  },

  setOption: function(yearcourseOptions) {
    const opitonHTMLArr = [];
    yearcourseOptions.forEach((dataArr, index) => {
      opitonHTMLArr[index] = dataArr.map(item =>
        `<option value=${item.id}>${item.name}</option>`
      );
    });
    $('.teacher-createclass-year').html(opitonHTMLArr[0].join(''));
    $('.teacher-createclass-course').html(opitonHTMLArr[1].join(''));
    $('.teacher-searchactive-coursetype').html(opitonHTMLArr[1].join(''));
    $('.teacher-searchunactive-yeartype').html(opitonHTMLArr[0].join(''));
    $('.teacher-searchunactive-coursetype').html(opitonHTMLArr[1].join(''));
  },

  getYearsCourseOpitons: async function() {
    let yearcourseOptions = [];
    await fetchAPI('http://222.24.63.100:9138/cms/getyearinfo', this.tokenObj)
      .then(yearsData => {
        const yearsTempArr = yearsData.split('`');
        yearcourseOptions[0] = [];
        for (let i = 0; i < yearsTempArr.length; i = i + 2) {
          yearcourseOptions[0].push({
            id: yearsTempArr[i],
            name: yearsTempArr[i + 1]
          });
        }
      });
    await fetchAPI('http://222.24.63.100:9138/cms/getcourseinfo', this.tokenObj)
      .then(coursesData => {
        const coursesTempArr = coursesData.split('`');
        yearcourseOptions[1] = [];
        for (let i = 0; i < coursesTempArr.length; i = i + 3) {
          yearcourseOptions[1].push({
            id: coursesTempArr[i],
            name: coursesTempArr[i + 1]
          });
        }
      });
    this.selectCheck = {
      active: yearcourseOptions[1][0].id,
      unactive: {
        course: yearcourseOptions[1][0].id,
        year: yearcourseOptions[0][0].id
      }
    };
    this.setOption(yearcourseOptions);
    this.getClassList();
  },

  getClassList: function() {
    const isActive = this.panType === 'activeClass';
    const fetchUrl = isActive ? 'http://222.24.63.100:9138/cms/getactiveclass' : 'http://222.24.63.100:9138/cms/getclassbyyear';
    let selectObj = null;
    if (isActive) {
      selectObj = {
        courseid: this.selectCheck.active
      };
    } else {
      selectObj = {
        courseid: this.selectCheck.unactive.course,
        yearid: this.selectCheck.unactive.year
      }
    }
    fetchAPI(fetchUrl, Object.assign({}, this.tokenObj, selectObj))
      .then(classData => {
        if (classData === '0') {
          $('.teacher-class-list').html('');
          $('.teacher-classes-nodata').css('display', 'block');
          return;
        }
        $('.teacher-classes-nodata').css('display', 'none');

        const classesArr = [];
        const classesTemp = classData.split('`');
        for (let i = 0; i < classesTemp.length; i = i + 2) {
          classesArr.push({
            classID: classesTemp[i],
            className: classesTemp[i + 1]
          });
        }
        const classesHTMLArr = classesArr.map(classItem => {
          return `
              <tr class="list-table-row">
                <td>${classItem.classID}</td>
                <td>${classItem.className}</td>
                <td>
                  <span class='list-table-checkactive' classid=${classItem.classID}>切换</span>
                </td>
                <td>
                  <span class='list-table-deleteClass' classid=${classItem.classID}>删除</span>
                </td>
              </tr>
          `
        });
        $('.teacher-class-list').html(classesHTMLArr.join(''));
        console.log(classesArr);
      });
    console.log(fetchUrl);
  },

  bindHandle: function() {
    $('.teacher-checkactive-pan').bind('click', event => {
      const whichPan = $(event.target).attr('name');
      if (!whichPan) return;
      eventHandle.panClickHandle(whichPan, event.target);
    });
    $('.teacher-searchactive-select').bind('change', event => {
      eventHandle.selectTypeChangeHandle(event.target);
    });
    $('.teacher-searchunactive-select').bind('change', event => {
      eventHandle.selectTypeChangeHandle(event.target);
    });
    $('.teacher-createclass-button').bind('click', event => {
      eventHandle.createClassHandle();
    });
    $('.teacher-class-list').bind('click', event => {
      const target = event.target || event.srcElement;
      const targetClassName = $(target).attr('class');
      if (!targetClassName) return;
      const isCheckActive = targetClassName.indexOf('list-table-checkactive') !== -1 ? true : false;
      const isDelete = targetClassName.indexOf('list-table-deleteClass') !== -1 ? true : false;
      if (!isCheckActive && !isDelete) return;
      eventHandle.checkActiveDeleteHandle(isCheckActive, isDelete, target);
    });
  }
}

export default (tokenObj) => {
  Classes.init(tokenObj);
}