// 행 별 포스터 번호 붙이기, 즉시 실행 함수
(function setPosterNum() {
  const itemsUl = document.querySelectorAll('.itemsUl');
  const posterNum = document.querySelectorAll('.posterNum');
  const posterArr = [];
  
  itemsUl.forEach((v, i) => {
    // [[1,2,3,4,5],[1,2,3]] -> flat() -> [1,2,3,4,5,1,2,3]
    posterArr.push(...Array(itemsUl[i].children.length).fill(1).map((v, i) => v + i));
    posterArr.flat();
    console.log(posterArr);
  })
  
  posterNum.forEach((v, i) => {
    v.innerText = posterArr[i];
  });
})()


// 포스터 슬라이드 효과
// 고민 1. 전역변수 말고 방법이 없을까? -> 모듈화?
let arrow_count = 0;

function moveItem(n) {
  const item = document.querySelectorAll('.item');
  
  // translate(509.65%) 중 숫자만 num에 저장
  let num = Number(item[0].style.transform.slice(10).slice(0, -2));
  
  if (n.target.innerText === 'next') {
    if (arrow_count < item.length / 5 - 1) {
      num -= 509.65;
      arrow_count++;
      console.log('next', num, 'count', arrow_count);
    }
  } else if (num !== 0) {
    num = parseFloat(num);
    num += 509.65;
    arrow_count--;
    console.log('next', num, 'count', arrow_count);
  }
  
  // 각 item마다 translate 적용하기
  item.forEach((v, i) => {
    v.style.transform = `translate(${num}%)`;
  });
}
const arrow_prev = document.querySelector('.arrow_prev');
const arrow_next = document.querySelector('.arrow_next');

arrow_prev.addEventListener('click', moveItem);
arrow_next.addEventListener('click', moveItem);