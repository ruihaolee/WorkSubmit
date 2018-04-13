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
    console.log('course view');
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
  studentCheckFunc
};