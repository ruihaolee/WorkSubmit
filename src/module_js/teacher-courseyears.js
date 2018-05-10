/*
 * @Author: liruihao02
 * @Date:   2018-04-21
 * @Last Modified by:   liruihao
 * @Last Modified time: 2018-04-28
 */
import {
  fetchAPI
} from '../pub_funcs/fetchApi.js';
import WorkDetail from './student-workdetail.js';

let firDO = true;

const setCourseOptions = courseArr => {
  const courseOptionsHTML = courseArr.map(courseObj =>
    `<option value=${courseObj.courseID}>${courseObj.courseName}</option>`
  );
  $('.teacher-createworktype-select').html(courseOptionsHTML.join(''));
}

const setView = (viewData, type) => {
  let dataHTMLArr = null;
  let targetEle = null;
  // const targetEle = type === 'years' ? $('.teacher-yearsclass-list') : $('.teacher-courses-list');
  if (type === 'years') {
    targetEle = $('.teacher-yearsclass-list');
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
    targetEle = $('.teacher-courses-list');
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
  } else if (type === 'worktypes') {
    targetEle = $('.teacher-worktypes-list');
    dataHTMLArr = viewData.map(worktype => {
      return `
        <tr class="list-table-row">
          <td>${worktype.workname}</td>
          <td>${worktype.workid}</td>
          <td>${worktype.courseName}</td>
          <td>
            <span class='list-table-teachdeleteworktype' typeid=${worktype.workid}>删除</span>
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
        // console.log(yearsArr);
        setView(yearsArr, 'years');
      });
  },
  getCourse: function() {
    fetchAPI('http://222.24.63.100:9138/cms/getcourseinfo', this.tokenObj)
      .then(coursesData => {
        // console.log(coursesData);
        const coursesTemp = coursesData.split('`');
        const coursesArr = [];
        for (let i = 0; i < coursesTemp.length; i = i + 3) {
          coursesArr.push({
            courseID: coursesTemp[i],
            courseName: coursesTemp[i + 1],
            isShare: coursesTemp[i + 2]
          });
        }
        this.getWorkTypes(coursesArr);
        setCourseOptions(coursesArr);
        setView(coursesArr, 'courses');
      })
  },
  getWorkTypes: function(courseArr) {
    Promise.all(courseArr.map(courseInfo => {
        const {
          courseID,
          courseName
        } = courseInfo;
        return fetchAPI('http://222.24.63.100:9138/cms/getworktype', Object.assign({}, this.tokenObj, {
            courseid: courseID
          }))
          .then(workType => {
            const worktypeInfos = [];
            if (workType === '0') return worktypeInfos;
            const worksTemp = workType.split('`');
            for (let i = 0; i < worksTemp.length; i = i + 2) {
              worktypeInfos.push({
                courseName,
                workid: worksTemp[i],
                workname: worksTemp[i + 1]
              });
            }
            return worktypeInfos;
          });
      }))
      .then(worktypeInfoArr => {
        let totalworktypeInfoArr = [];
        worktypeInfoArr.forEach(typeInfos => {
          totalworktypeInfoArr = totalworktypeInfoArr.concat(typeInfos);
        });
        setView(totalworktypeInfoArr, 'worktypes');
      });
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
  createWorkType: function() {
    const workTypeInfo = {
      courseid: $('.teacher-createworktype-select').val(),
      name: $('.teacher-createworktype-input').val()
    };
    fetchAPI('http://222.24.63.100:9138/cms/addworktype', Object.assign({}, workTypeInfo, this.tokenObj))
      .then(result => {
        if (result === '0') {
          alert('创建作业类型失败');
        } else if (result === '1') {
          alert('创建作业类型成功');
          this.getCourse();
        }
      });
  },
  deleteWorkType: function(typeid) {
    fetchAPI('http://222.24.63.100:9138/cms/delworktype', Object.assign({}, {
        typeid
      }, this.tokenObj))
      .then(result => {
        if (result === '0') {
          alert('删除作业类型失败');
        } else if (result === '1') {
          alert('删除作业类型成功');
          this.getCourse();
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
    $('.teacher-createworktype-button').bind('click', () => {
      this.createWorkType();
    });
    $('.teacher-courseyear-list').bind('click', (event) => {
      const target = event.target || event.srcElement;
      console.log(target.className);
      if (target.className === 'list-table-teachdeleteyear') {
        this.deleteYearCourse($(target).attr('yearid'), 'year');
      } else if (target.className === 'list-table-teachdeletecourse') {
        this.deleteYearCourse($(target).attr('courseid'), 'course');
      } else if (target.className === 'list-table-teachdeleteworktype') {
        this.deleteWorkType($(target).attr('typeid'));
      }
    });
  }
}

export default (tokenObj) => {
  CourseYears.init(tokenObj);
}