// 행 별 포스터 번호 붙이기, 즉시 실행 함수
(function setPosterNum() {
  const itemsUl = document.querySelectorAll('.itemsUl');
  const posterNum = document.querySelectorAll('.posterNum');
  const posterArr = [];
  
  itemsUl.forEach((v, i) => {
    // [[1,2,3,4,5],[1,2,3]] -> flat() -> [1,2,3,4,5,1,2,3]
    posterArr.push(...Array(itemsUl[i].children.length).fill(1).map((v, i) => v + i));
    posterArr.flat();
  })
  
  posterNum.forEach((v, i) => {
    v.innerText = posterArr[i];
  });
})()

/*
// 포스터 슬라이드 효과
// [[1,2,3],[1,2],[1,2,3,4,5]]
// 1을 찾고 그 다음 1을 찾아서 그 사이에만 주기?
*/
let arrow_count = [0, 0, 0];

function a(e) {
  const itemsUl = document.querySelectorAll(".itemsUl");
  
  itemsUl.forEach((ul, i) => {
      // itemsUl > li의 배열
      if (itemsUl[i] === e.target.parentElement.parentElement.children[0]){
      console.log('yes');
        
      const itemsUl_children = itemsUl[i].children;
    
      // translate(509.65%) 중 숫자만 저장
      let translateValue = Number(
        itemsUl_children[0].style.transform.slice(10).slice(0, -2)
      );
      
      // next버튼 클릭 시
      if (e.target.innerText === "next") {
        if (arrow_count[i] < itemsUl_children.length / 5 - 1) {
          translateValue -= 509.65;
          arrow_count[i]++;
          console.log("next", translateValue, "count", arrow_count[i]);
        }
      } else if (arrow_count[i] !== 0) {
        console.log("prev", translateValue, "count", arrow_count[i]);
        translateValue = parseFloat(translateValue);
        translateValue += 509.65;
        arrow_count[i]--;
      }
    
      // 각 item마다 translate 적용하기
      for (v of itemsUl_children) {
        v.style.transform = `translate(${translateValue}%)`;
        console.log(arrow_count);
      };
    }
  })
}

const arrow_prev = document.querySelectorAll('.arrow_prev');
const arrow_next = document.querySelectorAll('.arrow_next');

arrow_prev.forEach((v, i) => {
  arrow_prev[i].addEventListener('click', a);
  arrow_next[i].addEventListener('click', a);
})
