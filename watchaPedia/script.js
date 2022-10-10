const posterNum = document.querySelectorAll('.posterNum');

// 포스터에 번호 붙여주기
posterNum.forEach((v, i) => {
  v.innerText = i + 1
})

const itemUl = document.getElementsByClassName('itemUl');
const itemUl_li = itemUl.childNodes;

/*
  transform: translate(-509.65%);
  transform: translate(0%);
*/

itemUl_li.style.transform = 'translate(-509.65%)';
// console.log(itemUl_li);