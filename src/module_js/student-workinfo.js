/*
 * @Author: liruihao02
 * @Date:   2018-04-13
 * @Last Modified by:   liruihao
 * @Last Modified time: 2018-04-21
 */
import {
  fetchAPI
} from '../pub_funcs/fetchApi.js';
import WorkDetail from './student-workdetail.js';

let firDO = true;

const setView = async viewData => {
  let totalWorksArr = [];
  for (let i = 0; i < viewData.works.length; i++) {
    totalWorksArr = totalWorksArr.concat(await viewData.works[i]);
  }
  const worksHTMLArr = totalWorksArr.map(work => {
    return `
      <tr class="list-table-row student-work-row" workid=${work.workid}>
        <td>${work.title}</td>
        <td>${work.workid}</td>
        <td>${work.typename}</td>
        <td>${work.time}</td>
        <td>${work.size}</td>
        <td>${work.level === ' ' ? '暂无批阅' : work.level}</td>
        <td>
          <span class='list-table-studeletework' workid=${work.workid}>删除</span>
        </td>
      </tr>
    `
  });
  const worksHTML = worksHTMLArr.join('');
  $('.student-works-list').html(worksHTML);
  $('.student-works-coursname').html(viewData.courseName);
}

const WritingWork = {
  init: function(tokenObj, studentRoute) {
    this.tokenObj = tokenObj;
    this.studentRoute = studentRoute;
    // this.defaultSearch();
    this.initDate();
    this.startDate = Date.getBeforeDate(365);
    this.endDate = Date.getBeforeDate(0);
    if (firDO) {
      this.bindHandle();
      firDO = !firDO;
    } else {
      return;
    }
  },
  initDate: function() {
    $('#rangedate').DatePicker({
      type: 'rangedate',
      startDate: moment().subtract(1, 'year'),
      endDate: moment(),
      dateChange: (startDate, endDate) => {
        this.startDate = startDate.replace(/\./g, '-');
        this.endDate = endDate.replace(/\./g, '-');
        this.defaultSearch();
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
  },
  deleteWork: function(workid) {
    const workToken = Object.assign({}, this.tokenObj, {
      workid: workid
    });
    fetchAPI('http://222.24.63.100:9138/cms/delwork', workToken)
      .then(result => {
        console.log(result);
        if (result === '0') {
          alert('删除失败');
        } else if (result === '1') {
          alert('删除成功');
          this.defaultSearch();
        }
      })
    console.log(workToken);
  },
  bindHandle: function() {
    $('.student-works-list').bind('click', event => {
      const target = event.target || event.srcElement;
      if (target.className === 'list-table-studeletework') {
        //删除
        this.deleteWork($(target).attr('workid'));
      } else {
        //详情
        const parentNode = target.parentNode;
        const detailToken = Object.assign({}, this.tokenObj, {
          workid: $(parentNode).attr('workid')
        });
        this.studentRoute.changeRoute('workdetail');
        WorkDetail(detailToken);
        console.log(detailToken);
      }
    })
  }
}

export default (tokenObj, studentRoute) => {
  WritingWork.init(tokenObj, studentRoute);
}