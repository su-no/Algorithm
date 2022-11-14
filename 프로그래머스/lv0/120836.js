// Lv0. 코딩테스트 입문 > 순서쌍의 개수

function solution(n) {
  let result = 0;
  // 제곱근 이하까지 확인해서 두개씩 추가
  for (let i = 1; i < Math.sqrt(n); i++) {
    if (n % i === 0) {
      result += 2;
    }
  }
  // 제곱근이 정수일 경우 하나 추가
  if (Number.isInteger(Math.sqrt(n))) {
    return result + 1;
  } else {
    return result;
  }
}

console.log(solution(20)); // 6
console.log(solution(100)); // 9
