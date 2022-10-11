const posterNum = document.querySelectorAll('.posterNum');

// 포스터에 번호 붙여주기
posterNum.forEach((v, i) => {
  v.innerText = i + 1
})

// arrow btn 클릭시 다음 슬라이드
const arrow_prev = document.querySelector('.arrow_prev');
const arrow_next = document.querySelector('.arrow_next');

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

arrow_prev.addEventListener('click', moveItem);
arrow_next.addEventListener('click', moveItem);