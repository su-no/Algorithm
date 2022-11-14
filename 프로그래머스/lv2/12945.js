function solution(n) {
  const fibonacci = new Array(n + 1).fill(0);
  fibonacci[0] = 0;
  fibonacci[1] = 1;
  for (let i = 2; i <= n; i++) {
    fibonacci[i] = (fibonacci[i - 2] + fibonacci[i - 1]) % 1234567;
  }
  return fibonacci[n];
}

console.log(solution(3)); // 2
console.log(solution(5)); // 5
console.log(solution(100)); // 963606
