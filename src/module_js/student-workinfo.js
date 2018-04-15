/*
 * @Author: liruihao02
 * @Date:   2018-04-13
 * @Last Modified by:   liruihao02
 * @Last Modified time: 2018-04-15
 */
import {
  fetchAPI
} from '../pub_funcs/fetchApi.js';

let firDO = true;

const setView = async viewData => {
  for (let i = 0; i < viewData.works.length; i++) {
    console.log(await viewData.works[i]);
  }
}

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
  getWork: async function(typeId, typeName) {
    const workToken = Object.assign({}, this.tokenObj, {
      typeid: typeId,
      datefrom: this.startDate,
      dateto: this.endDate
    });
    return await fetchAPI('http://222.24.63.100:9138/cms/searchmywork', workToken)
      .then(workdata => {
        let workArr = [];
        const workdataTemp = workdata.split('`');
        workdataTemp.pop();
        for (let i = 0; i < workdataTemp.length; i = i + 6) {
          const work = {
            workid: workdataTemp[i],
            time: workdataTemp[i + 1],
            typeid: workdataTemp[i + 2],
            title: workdataTemp[i + 3],
            size: workdataTemp[i + 4],
            level: workdataTemp[i + 5],
            typename: typeName
          }
          workArr.push(work);
        }
        return workArr;
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
          works: []
        };
      });
    await fetchAPI('http://222.24.63.100:9138/cms/getworktype', this.courtokenObj)
      .then(typeData => {
        const typeTemp = typeData.split('`');
        for (let i = 0; i < typeTemp.length; i = i + 2) {
          const work = this.getWork(typeTemp[i], typeTemp[i + 1]);
          this.viewData.works.push(work);
        }
      });
    setView(this.viewData);
  }
}

export default (tokenObj) => {
  WritingWork.init(tokenObj);
}