/*
 * @Author: liruihao
 * @Date:   2018-05-04 16:36:51
 * @Last Modified by:   liruihao
 * @Last Modified time: 2018-05-07 15:10:45
 */
import {
  fetchAPI
} from '../pub_funcs/fetchApi.js';

let firDO = true;

//批量删除test函数
const testDeleteStudents = () => {
  for (let i = 1198; i < 2201; i++) {
    console.log(i);
    fetchAPI('http://222.24.63.100:9138/cms/delstudent', Object.assign({}, Students.tokenObj, {
        sid: `0414${i}`
      }))
      .then(result => {

      });
  }
}

const eventHandle = {
  createStudentsHandle: function() {
    let createStuObj = {
      classid: $('.teacher-createstudents-select').val(),
      idfrom: $('.teacher-createstudent-start').val().trim()
    };
    if ($('.teacher-createstudent-end').val().trim()) {
      createStuObj['idto'] = $('.teacher-createstudent-end').val().trim();
    }
    if (!createStuObj.idfrom) {
      alert('开始学号必须输入');
      return;
    } else if (!Number(createStuObj.idfrom) || createStuObj.idfrom.length !== 8) {
      alert('学号请输入8位数字，请检查');
      return;
    } else if (createStuObj.idto && (!Number(createStuObj.idto) || createStuObj.idto.length !== 8)) {
      alert('学号请输入8位数字，请检查');
      return;
    } else if (createStuObj.idto && Number(createStuObj.idto) < Number(createStuObj.idfrom)) {
      alert('结束学号应小于等于开始学号，请检查');
      return;
    }

    fetchAPI('http://222.24.63.100:9138/cms/addstudent', Object.assign({}, Students.tokenObj, createStuObj))
      .then(result => {
        if (result === '0') {
          alert('创建学生账号失败');
        } else {
          Students.getStudentList();
          alert('创建学生账号成功');
        }
      });
    // console.log(createStuObj);
  },
  deleteStudentHandle(sid) {
    fetchAPI('http://222.24.63.100:9138/cms/delstudent', Object.assign({}, Students.tokenObj, {
        sid
      }))
      .then(result => {
        Students.getStudentList();
        result === '0' ? alert(`删除失败`) : alert(`删除 ${sid} 成功`);
      });
  },
  listSelectChangeHandle(event) {
    const selectValue = event.target.val();
    if (selectValue === Students.nowClassID) {
      return;
    } else {
      Students.nowClassID = selectValue;
      Students.getStudentList();
    }
  }
}

const Students = {
  init: function(tokenObj) {
    this.tokenObj = tokenObj;
    this.getActiveClasses();
    // testDeleteStudents();
    this.bindHandle();
  },
  setStudentsListView: function(studentsData) {
    const studentsHTMLArr = studentsData.map(student =>
      `
          <tr class="list-table-row">
            <td>${student.studentNumber}</td>
            <td>${student.studentName}</td>
            <td>
              <span class='list-table-deleteStudent' sid=${student.studentNumber}>删除</span>
            </td>
          </tr>
      `
    );
    $('.teacher-students-list').html(studentsHTMLArr.join(''));
  },
  setOption: function(totalClasses) {
    // console.log(totalClasses);
    const optionHTMLArr = totalClasses.map(item =>
      `<option value=${item.classID}>${item.className}</option>`
    );
    $('.teacher-createstudents-select').html(optionHTMLArr.join(''));
    $('.teacher-search-select').html(optionHTMLArr.join(''));
  },
  getActiveClasses: async function() {
    const coursesArr = [];
    await fetchAPI('http://222.24.63.100:9138/cms/getcourseinfo', this.tokenObj)
      .then(coursesData => {
        const coursesTempArr = coursesData.split('`');
        for (let i = 0; i < coursesTempArr.length; i = i + 3) {
          coursesArr.push(coursesTempArr[i]);
        }
      });
    Promise.all(coursesArr.map(courseid => {
        return fetchAPI('http://222.24.63.100:9138/cms/getactiveclass', Object.assign({}, this.tokenObj, {
            courseid
          }))
          .then(classesData => {
            if (classesData === '0') {
              return [];
            }
            const classesTemp = classesData.split('`');
            const classes = [];
            for (let i = 0; i < classesTemp.length; i = i + 2) {
              classes.push({
                classID: classesTemp[i],
                className: classesTemp[i + 1]
              });
            }
            return classes;
          })
      }))
      .then(classesArr => {
        let totalClasses = [];
        classesArr.forEach(classes => {
          totalClasses = totalClasses.concat(classes);
        });
        this.nowClassID = totalClasses[0].classID;
        this.setOption(totalClasses);
        this.getStudentList();
      });
  },
  getStudentList: function() {
    fetchAPI('http://222.24.63.100:9138/cms/getstubyclass', Object.assign({}, this.tokenObj, {
        classid: this.nowClassID
      }))
      .then(studentsData => {
        const studentsTemp = studentsData.split('`');
        const studentsArr = [];
        for (let i = 0; i < studentsTemp.length; i = i + 2) {
          studentsArr.push({
            studentNumber: studentsTemp[i],
            studentName: studentsTemp[i + 1]
          });
        }
        console.log(studentsArr);
        this.setStudentsListView(studentsArr);
      })
  },
  bindHandle: function() {
    $('.teacher-createstudents-button').bind('click', () => {
      eventHandle.createStudentsHandle();
    });
    $('.teacher-students-list').bind('click', (event) => {
      const targetClassName = event.target.className;
      if (targetClassName !== 'list-table-deleteStudent') return;
      eventHandle.deleteStudentHandle($(event.target).attr('sid'));
    });
    $('.teacher-search-select').bind('change', (event) => {
      eventHandle.listSelectChangeHandle(event);
    });
  }
}

export default (tokenObj) => {
  Students.init(tokenObj);
}