/*
 * @Author: liruihao
 * @Date:   2018-05-07 15:53:01
 * @Last Modified by:   liruihao
 * @Last Modified time: 2018-05-08 16:28:10
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
  // console.log(infoObjArr);
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
    this.startDate = Date.getBeforeDate(7);
    this.endDate = Date.getBeforeDate(0);
    this.getClassesOptions();
    this.getTypesOptions();
    this.bindHandle();
  },
  initDate: function() {
    $('#teacher-rangedate').DatePicker({
      type: 'rangedate',
      startDate: moment().subtract(1, 'week'),
      endDate: moment(),
      dateChange: (startDate, endDate) => {
        this.startDate = startDate.replace(/\./g, '-');
        this.endDate = endDate.replace(/\./g, '-');
      }
    });
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
        console.log(totalClasses);
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
        console.log(totalworktypeInfoArr);
      });
    // console.log(courseArr);
  },
  bindHandle: function() {}
}

export default (tokenObj) => {
  Works.init(tokenObj);
}