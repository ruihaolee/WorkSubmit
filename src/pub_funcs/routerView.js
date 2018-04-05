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
  indexCheckFunc
};