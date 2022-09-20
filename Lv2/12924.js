function solution(n) {
  let count = 0;
  for (let i = 1; i <= n; i++) {
    let sum = 0;
    for (let j = i; j <= n; j++) {
      sum += j;
      if (sum > n) {
        break;
      }
      if (sum === n) {
        count += 1;
        break;
      }
    }
  }
  return count;
}

console.log(solution(15)); // 4