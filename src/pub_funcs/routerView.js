const studentCheckFunc = {
  setting: () => {
    $('.student-rightbox').css({
      display: 'none'
    });
    $('.student-setting').css({
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
    studentCheckFunc.setting();
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