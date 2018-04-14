/*
 * @Author: liruihao02
 * @Date:   2018-04-13
 * @Last Modified by:   liruihao02
 * @Last Modified time: 2018-04-14
 */
import {
  fetchAPI
} from '../pub_funcs/fetchApi.js';

let firDO = true;

const WritingWork = {
  init: function(tokenObj) {
    if (firDO) {
      firDO = !firDO;
    } else {
      return;
    }
    this.tokenObj = tokenObj;
    this.initDate();
    this.defaultSearch();
    this.startDate = Date.getBeforeDate(7);
    this.endDate = Date.getBeforeDate(0);
  },
  initDate: function() {
    $('#rangedate').DatePicker({
      type: 'rangedate',
      startDate: moment().subtract(1, 'week'),
      endDate: moment(),
      dateChange: function(startDate, endDate) {
        // console.log(startDate, endDate);
      }
    });
  },
  getWork: async function(typeId) {
    const workToken = Object.assign({}, this.tokenObj, {
      typeid: typeId,
      datefrom: this.startDate,
      dateto: this.endDate
    });
    console.log(workToken);
    return await fetchAPI('http://222.24.63.100:9138/cms/searchmywork', workToken)
      .then((workdata) => {
        console.log(workdata);
      })
  },
  defaultSearch: async function() {
    await fetchAPI('http://222.24.63.100:9138/cms/searchmycourse', this.tokenObj)
      .then(courseData => {
        const courseTemp = courseData.split('`');
        this.courtokenObj = Object.assign({},
          this.tokenObj, {
            courseid: courseTemp[0]
          });
        this.viewData = {
          courseName: courseTemp[1],
          isShare: courseTemp[2],
          types: [],
          works: []
        };
      });
    await fetchAPI('http://222.24.63.100:9138/cms/getworktype', this.courtokenObj)
      .then(typeData => {
        const typeTemp = typeData.split('`');
        for (let i = 0; i < typeTemp.length; i = i + 2) {
          console.log(typeTemp[i]);
          this.getWork(typeTemp[i]);
          this.viewData.types.push({
            typeId: typeTemp[i],
            typeName: typeTemp[i + 1]
          });
        }
      });
  }
}

export default (tokenObj) => {
  WritingWork.init(tokenObj);
}