const studentCheckFunc = {
  setting: () => {
    $('.student-rightbox').css({
      display: 'none'
    });
    $('.student-setting').css({
      display: 'block'
    });
  },
  course: () => {
    // console.log('course view');
    $('.student-rightbox').css({
      display: 'none'
    });
    $('.student-course').css({
      display: 'block'
    });
  },
  writework: () => {
    $('.student-rightbox').css({
      display: 'none'
    });
    $('.student-writework').css({
      display: 'block'
    });
  },
  works: () => {
    $('.student-rightbox').css({
      display: 'none'
    });
    $('.student-workinfo').css({
      display: 'block'
    });
  },
  workdetail: () => {
    $('.student-rightbox').css({
      display: 'none'
    });
    $('.student-workdetail').css({
      display: 'block'
    });
  }
}

const teacherCheckFunc = {
  setting: () => {
    $('.teacher-rightbox').css({
      display: 'none'
    });
    $('.teacher-setting').css({
      display: 'block'
    });
  },
  courseyears: () => {
    $('.teacher-rightbox').css({
      display: 'none'
    });
    $('.teacher-courseyears').css({
      display: 'block'
    });
  },
  class: () => {
    $('.teacher-rightbox').css({
      display: 'none'
    });
    $('.teacher-classes').css({
      display: 'block'
    });
  },
  students: () => {
    $('.teacher-rightbox').css({
      display: 'none'
    });
    $('.teacher-students').css({
      display: 'block'
    });
  }
}

const indexCheckFunc = {
  login: () => {
    $('.container-body').css({
      display: 'none'
    });
    $('.login').css({
      display: 'block'
    })
  },
  student: () => {
    $('.container-body').css({
      display: 'none'
    });
    $('.student').css({
      display: 'block'
    })
  },
  teacher: () => {
    $('.container-body').css({
      display: 'none'
    });
    $('.teacher').css({
      display: 'block'
    })
  }
}

export {
  indexCheckFunc,
  studentCheckFunc,
  teacherCheckFunc
};