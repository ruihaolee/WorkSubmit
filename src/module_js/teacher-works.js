/*
 * @Author: liruihao
 * @Date:   2018-05-07 15:53:01
 * @Last Modified by:   liruihao
 * @Last Modified time: 2018-05-08 22:11:28
 */
import {
  fetchAPI
} from '../pub_funcs/fetchApi.js';

let firDO = true;

const eventHandle = {};

const getClasses = (coursesArr, isActive = true, yearsArr) => {
  const infoObjArr = [];
  const fetchUrl = isActive ? 'http://222.24.63.100:9138/cms/getactiveclass' : 'http://222.24.63.100:9138/cms/getclassbyyear';
  if (isActive) {
    coursesArr.forEach(courseid => {
      infoObjArr.push({
        courseid
      });
    });
  } else {
    coursesArr.forEach(courseid => {
      yearsArr.forEach(yearid => {
        infoObjArr.push({
          courseid,
          yearid
        });
      });
    });
  }
  return infoObjArr.map(infoObj => {
    return fetchAPI(fetchUrl, Object.assign({}, Works.tokenObj, infoObj))
      .then(classesData => {
        if (classesData === '0') {
          return [];
        }
        const classesTemp = classesData.split('`');
        const classes = [];
        for (let i = 0; i < classesTemp.length; i = i + 2) {
          classes.push({
            classID: classesTemp[i],
            className: classesTemp[i + 1],
            isActive
          });
        }
        return classes;
      })
  })
}

const Works = {
  init: function(tokenObj) {
    this.tokenObj = tokenObj;
    this.initDate();
    this.startDate = Date.getBeforeDate(365);
    this.endDate = Date.getBeforeDate(0);
    this.getClassesOptions();
    this.getTypesOptions();
    this.getWorkList();
    this.bindHandle();
  },
  initDate: function() {
    $('#teacher-rangedate').DatePicker({
      type: 'rangedate',
      startDate: moment().subtract(1, 'year'),
      endDate: moment(),
      dateChange: (startDate, endDate) => {
        this.startDate = startDate.replace(/\./g, '-');
        this.endDate = endDate.replace(/\./g, '-');
      }
    });
  },
  setSearchOptions: function(isClasses, optionData) {
    const optionsHTML = optionData.map(option =>
      isClasses ? `<option value=${option.classID}>${option.className}(${option.isActive ? '活动' : '非活动'})</option>` : `<option value=${option.workid}>${option.workname}(${option.coursename})</option>`
    );
    optionsHTML.unshift('<option value="total">全部</option>');
    const selectClassName = isClasses ? '.teacher-searchworks-selectclass' : '.teacher-searchworks-worktype';
    $(selectClassName).html(optionsHTML.join(''));
  },
  setStudentList: function(worksArr) {
    const worksHTMLArr = worksArr.map(work => {
      return `
        <tr class="list-table-row teacher-work-row" workid=${work.workID}>
          <td>${work.className}</td>
          <td>${work.studentName}/${work.studentID}</td>
          <td>${work.workTitle}</td>
          <td>${work.level === ' ' ? '暂无' : work.level}</td>
          <td>${work.size}</td>
          <td>${work.submitTime}</td>
          <td>
            <span class='list-table-teacherwork' workid=${work.workID}>删除</span>
          </td>
        </tr>
      `
    });
    $('.teacher-work-list').html(worksHTMLArr.join(''));
  },
  getClassesOptions: async function() {
    const coursesArr = [];
    const yearsArr = [];
    await fetchAPI('http://222.24.63.100:9138/cms/getcourseinfo', this.tokenObj)
      .then(coursesData => {
        const coursesTempArr = coursesData.split('`');
        for (let i = 0; i < coursesTempArr.length; i = i + 3) {
          coursesArr.push(coursesTempArr[i]);
        }
      });
    await fetchAPI('http://222.24.63.100:9138/cms/getyearinfo', this.tokenObj)
      .then(yearsData => {
        const yearsTemp = yearsData.split('`');
        for (let i = 0; i < yearsTemp.length; i = i + 2) {
          yearsArr.push(yearsTemp[i]);
        }
      });
    const activeClassPromises = getClasses(coursesArr);
    const unactiveClassPromises = getClasses(coursesArr, false, yearsArr);
    const totalClassPromises = activeClassPromises.concat(unactiveClassPromises);
    Promise.all(totalClassPromises)
      .then(classesArr => {
        let totalClasses = [];
        classesArr.forEach(classes => {
          totalClasses = totalClasses.concat(classes);
        });
        this.setSearchOptions(true, totalClasses);
        // console.log(totalClasses);
      })
  },
  getTypesOptions: async function() {
    const courseArr = [];
    await fetchAPI('http://222.24.63.100:9138/cms/getcourseinfo', this.tokenObj)
      .then(courseData => {
        const courseTemp = courseData.split('`');
        for (let i = 0; i < courseTemp.length; i = i + 3) {
          courseArr.push({
            courseid: courseTemp[i],
            coursename: courseTemp[i + 1]
          });
        }
      });
    Promise.all(courseArr.map(courseInfo => {
        const {
          courseid,
          coursename
        } = courseInfo;
        return fetchAPI('http://222.24.63.100:9138/cms/getworktype', Object.assign({}, this.tokenObj, {
            courseid
          }))
          .then(workType => {
            const worktypeInfos = [];
            if (workType === '0') return worktypeInfos;
            const worksTemp = workType.split('`');
            for (let i = 0; i < worksTemp.length; i = i + 2) {
              worktypeInfos.push({
                coursename,
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
        this.setSearchOptions(false, totalworktypeInfoArr);
        // console.log(totalworktypeInfoArr);
      });
  },
  getWorkList: function() {
    fetchAPI('http://222.24.63.100:9138/cms/searchallwork', this.tokenObj)
      .then(workData => {
        const worksArr = [];
        const worksTemp = workData.split('`');
        for (let i = 0; i < worksTemp.length; i = i + 9) {
          worksArr.push({
            className: worksTemp[i],
            studentID: worksTemp[i + 1],
            studentName: worksTemp[i + 2],
            workID: worksTemp[i + 3],
            submitTime: worksTemp[i + 4],
            typeID: worksTemp[i + 5],
            workTitle: worksTemp[i + 6],
            size: worksTemp[i + 7],
            level: worksTemp[i + 8]
          });
        }
        worksArr.pop();
        this.setStudentList(worksArr);
        console.log(worksArr);
      })
  },
  bindHandle: function() {}
}

export default (tokenObj) => {
  Works.init(tokenObj);
}