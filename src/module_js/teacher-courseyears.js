/*
 * @Author: liruihao02
 * @Date:   2018-04-21
 * @Last Modified by:   liruihao02
 * @Last Modified time: 2018-04-28
 */
import {
  fetchAPI
} from '../pub_funcs/fetchApi.js';
import WorkDetail from './student-workdetail.js';

let firDO = true;

const setView = (viewData, type) => {
  let dataHTMLArr = null;
  const targetEle = type === 'years' ? $('.teacher-yearsclass-list') : $('.teacher-courses-list');
  if (type === 'years') {
    dataHTMLArr = viewData.map(year => {
      return `
        <tr class="list-table-row">
          <td>${year.yearID}</td>
          <td>${year.yearName}</td>
          <td>
            <span class='list-table-teachdeleteyear' yearid=${year.yearID}>删除</span>
          </td>
        </tr>
      `
    });
  } else if (type === 'courses') {
    dataHTMLArr = viewData.map(course => {
      return `
        <tr class="list-table-row">
          <td>${course.courseID}</td>
          <td>${course.courseName}</td>
          <td>${course.isShare === '1' ? '是' : '否'}</td>
          <td>
            <span class='list-table-teachdeletecourse' courseid=${course.courseID}>删除</span>
          </td>
        </tr>
      `
    });
  }

  const dataTotalHTML = dataHTMLArr.join('');
  targetEle.html(dataTotalHTML);
}

const CourseYears = {
  init: function(tokenObj) {
    this.tokenObj = tokenObj;
    if (firDO) {
      this.bindHandle();
      firDO = !firDO;
    } else {
      return;
    }
    this.getYears();
    this.getCourse();
  },
  getYears: function() {
    fetchAPI('http://222.24.63.100:9138/cms/getyearinfo', this.tokenObj)
      .then(yearsData => {
        const yearsTemp = yearsData.split('`');
        const yearsArr = [];
        for (let i = 0; i < yearsTemp.length; i = i + 2) {
          yearsArr.push({
            yearID: yearsTemp[i],
            yearName: yearsTemp[i + 1]
          });
        }
        console.log(yearsArr);
        setView(yearsArr, 'years');
      });
  },
  getCourse: function() {
    fetchAPI('http://222.24.63.100:9138/cms/getcourseinfo', this.tokenObj)
      .then(coursesData => {
        console.log(coursesData);
        const coursesTemp = coursesData.split('`');
        const coursesArr = [];
        for (let i = 0; i < coursesTemp.length; i = i + 3) {
          coursesArr.push({
            courseID: coursesTemp[i],
            courseName: coursesTemp[i + 1],
            isShare: coursesTemp[i + 2]
          });
        }
        console.log(coursesArr);
        setView(coursesArr, 'courses');
      })
  },
  createYearCourse: function(type) {
    let creInfo = {};
    const creatUrl = type === 'year' ? 'http://222.24.63.100:9138/cms/addyear' : 'http://222.24.63.100:9138/cms/addcourse';
    if (type === 'year') {
      creInfo = {
        year: $('.teacher-newyear-input').val()
      };
    } else if (type === 'course') {
      creInfo = {
        title: $('.teacher-newcourse-input').val(),
        share: $('.teacher-course-share').val()
      };
    }
    fetchAPI(creatUrl, Object.assign({}, creInfo, this.tokenObj))
      .then(result => {
        if (result === '-1') {
          alert(`创建${type === 'year' ? '年级' : '课程'}失败`);
        } else if (result === '1') {
          $('.teacher-newyear-input').val('');
          type === 'year' ? this.getYears() : this.getCourse();
        }
      });
  },
  deleteYearCourse: function(itemID, type) {
    const deleteUrl = type === 'year' ? 'http://222.24.63.100:9138/cms/delyear' : 'http://222.24.63.100:9138/cms/delcourse';
    const delIDObj = type === 'year' ? {
      yearid: itemID
    } : {
      courseid: itemID
    };
    fetchAPI(deleteUrl, Object.assign({}, delIDObj, this.tokenObj))
      .then(result => {
        if (result === '0') {
          alert('删除失败');
        } else if (result === '1') {
          type === 'year' ? this.getYears() : this.getCourse();
          alert('删除成功');
        }
      });
  },
  bindHandle: function() {
    $('.teacher-createyear-button').bind('click', () => {
      this.createYearCourse('year');
    });
    $('.teacher-createcourse-button').bind('click', () => {
      this.createYearCourse('course');
    });
    $('.teacher-courseyear-list').bind('click', (event) => {
      const target = event.target || event.srcElement;
      if (target.className === 'list-table-teachdeleteyear') {
        this.deleteYearCourse($(target).attr('yearid'), 'year');
      } else if (target.className === 'list-table-teachdeletecourse') {
        this.deleteYearCourse($(target).attr('courseid'), 'course');
      }
    });
  }
}

export default (tokenObj) => {
  CourseYears.init(tokenObj);
}