// HTML 에서 해당 요소를 검색하여 찾은 모든 요소들을 반환
const boxELs = document.querySelectorAll('.box');

console.log(boxELs); //요소들의 리스트가 반환됨 => 앞에서 사용한 DON API 속성들을 바로 쓸수가 없음

// forEach() 메소드 사용: 배열에서 각 요소에 대한 반복 처리를 수행
// 인수(인자값)으로 반복을 돌면서 꺼내온 요소를 처리하는 함수 작성
// 처리 함수 작성 시 매개변수(현재 가져온 요소, 요소의 인덱스) <= 순서가 중요!!
boxELs.forEach(function (boxEL, index) {
  console.log(index, boxEL);

  boxEL.classList.add(`order-${index + 1}`);
});

// 요소의 내용 확인 및 수정
const boxEL = document.querySelector('.box');

console.log(boxEL.textContent);

boxEL.textContent = 'hyeok';
console.log(boxEL.textContent);
