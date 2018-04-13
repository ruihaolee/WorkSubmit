/*
 * @Author: liruihao02
 * @Date:   2018-04-07
 * @Last Modified by:   liruihao02
 * @Last Modified time: 2018-04-13
 */
import {
  fetchAPI
} from '../pub_funcs/fetchApi.js';
import writingWork from './student-writework.js'

let firDO = true;

const setView = async viewData => {
  const workTypes = viewData.types.map(type => {
    return `
      <tr class="list-table-row">
        <td>${type.typeName}</td>
        <td>${type.typeId}</td>
        <td>${viewData.isShare === '1' ? '是' : '否'}</td>
        <td>
          <span class='list-table-writebutton' typeid=${type.typeId}>进入</span>
        </td>
      </tr>
    `
  });
  const workTypesHTML = workTypes.join('');
  $('.student-worktype-list').html(workTypesHTML);

  const yearsClass = viewData.years.map(async yearsClass => {
    yearsClass = await yearsClass;
    const classes = yearsClass.classArr.map(oneClass =>
      `<tr class="list-table-row">
          <td>${yearsClass.yearId}</td>
          <td>${oneClass}</td>
       </tr>`);
    return classes.join('');
  });
  let yearsClassTolHTML = '';
  for (const yearClassHTML of yearsClass) {
    yearsClassTolHTML += await yearClassHTML;
  }
  $('.student-yearsclass-list').html(yearsClassTolHTML);
}

const Course = {
  init: function(tokenObj, studentRoute) {
    this.tokenObj = tokenObj;
    this.studentRoute = studentRoute;
    this.courtokenObj = {};
    if (firDO) {
      firDO = !firDO;
      this.getCourse();
      this.bindHandle();
    } else {
      this.getCourse();
      return;
    }
  },

  getCourseYearClass: async function(yeartokenObj, yearId) {
    return await fetchAPI('http://222.24.63.100:9138/cms/getcourseyearclass', yeartokenObj)
      .then(yearclass => {
        const yearclassTemp = yearclass.split('`');
        const yearClass = {
          yearId: yearId,
          classArr: yearclassTemp
        }
        return yearClass;
      });
  },

  getCourse: async function() {
    await fetchAPI('http://222.24.63.100:9138/cms/searchmycourse', this.tokenObj)
      .then(courseData => {
        const courseTemp = courseData.split('`');
        Object.assign(
          this.courtokenObj,
          this.tokenObj, {
            courseid: courseTemp[0]
          });
        this.viewData = {
          courseName: courseTemp[1],
          isShare: courseTemp[2],
          types: [],
          years: []
        };
      });
    await fetchAPI('http://222.24.63.100:9138/cms/getworktype', this.courtokenObj)
      .then(typeData => {
        const typeTemp = typeData.split('`');
        for (let i = 0; i < typeTemp.length; i = i + 2) {
          this.viewData.types.push({
            typeId: typeTemp[i],
            typeName: typeTemp[i + 1]
          });
        }
      });
    await fetchAPI('http://222.24.63.100:9138/cms/getcourseyear', this.courtokenObj)
      .then(yearData => {
        const yearTemp = yearData.split('`');
        this.yearClassLength = yearTemp.length;
        for (let i = 0; i < yearTemp.length; i++) {
          const yearClass = this.getCourseYearClass(Object.assign({}, this.courtokenObj, {
            yearid: yearTemp[i]
          }), yearTemp[i])
          this.viewData.years.push(yearClass);
        }
      });
    await this.viewData.years.length === this.yearClassLength;
    setView(this.viewData);
  },

  writeworkHandle: function(target) {
    const typeID = $(target).attr('typeid');
    this.studentRoute.changeRoute('writework');
    writingWork(Object.assign({}, this.tokenObj, {
      typeid: typeID
    }));
  },
  bindHandle: function() {
    $('.student-worktype-list').click((event) => {
      const target = event.target || event.srcElement;
      if (target.className !== 'list-table-writebutton') {
        return;
      }
      this.writeworkHandle(target);
    })
  }
}

export default (tokenObj, studentRoute) => {
  Course.init(tokenObj, studentRoute);
}