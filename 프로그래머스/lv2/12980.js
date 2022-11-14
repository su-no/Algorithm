// 5 = 0+1*2*2+1 (2)
// 6 = 0+1*2+1*2 (2)
// n이 0이 될 때 까지 (홀수면 1을 빼고 / 짝수면 2를 나눈다)

function solution(n) {
  let battery = 0;
  while (n > 0) {
    if (n % 2 == 0) {
      n /= 2;
    } else {
      n -= 1;
      battery += 1;
    }
  }
  return battery;
}

console.log(solution(5)); // 2
console.log(solution(6)); // 2
console.log(solution(19192)); // 8
console.log(solution(1243153)); // 9
