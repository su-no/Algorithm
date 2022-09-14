function solution(n) {
  var answer = n - 1;
  for (let i = 2; i <= n; i++) {
    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j == 0) {
        answer -= 1;
        break;
      }
    }
  }
  return answer;
}

console.log(solution(10)); // 4
console.log(solution(5)); // 3