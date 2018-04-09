/*
 * @Author: liruihao02
 * @Date:   2018-04-07
 * @Last Modified by:   liruihao02
 * @Last Modified time: 2018-04-09
 */
import {
  fetchAPI
} from '../pub_funcs/fetchApi.js';

const eventHandle = {}

const setView = async viewData => {
  console.log(viewData);
  const workTypes = viewData.types.map(type => {
    return `
      <tr className="list-table-row">
        <td>${type.typeName}</td>
        <td>${type.typeId}</td>
        <td>${viewData.isShare === '1' ? '是' : '否'}</td>
        <td>
          <a href=‘#’ target="_blank">
            进入
          </a>
        </td>
      </tr>
    `
  });
  const workTypesHTML = workTypes.join('');
  console.log(workTypesHTML);
  $('.student-worktype-list').html(workTypesHTML);

  const yearsClass = viewData.years.map(async yearsClass => {
    yearsClass = await yearsClass;
    const classes = yearsClass.classArr.map(oneClass =>
      `<tr className="list-table-row">
          <td>${yearsClass.yearId}</td>
          <td>${oneClass}</td>
       </tr>`);
    return classes.join('');
  });
  let yearsClassTolHTML = '';
  for (const yearClassHTML of yearsClass) {
    yearsClassTolHTML += await yearClassHTML;
  }
  console.log(yearsClassTolHTML);
  $('.student-yearsclass-list').html(yearsClassTolHTML);
}

const Course = {
  init: function(tokenObj) {
    this.tokenObj = tokenObj;
    this.courtokenObj = {};
    this.getCourse();
    this.bindHandle();
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
  bindHandle: function() {

  }
}

export default (tokenObj) => {
  Course.init(tokenObj);
}