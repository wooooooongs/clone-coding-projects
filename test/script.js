const promiseTest = (param) => new Promise((resolve, reject) => {
  setTimeout(() => {
    if (param) resolve('완료!');
    else reject('실패!');
  })
}, 3000)