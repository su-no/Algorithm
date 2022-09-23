// n = 1 : 1
// n = 2 : 2
// n = 3 : 3
// n = 4 : 5
// n = 5 : 8
// n = 6 : 13
// => 피보나치 수열

function solution(n) {
  const cases = [1, 1, ...Array(n - 1).fill(0)];
  for (let i = 2; i < n + 1; i++) {
    cases[i] = (cases[i - 2] + cases[i - 1]) % 1234567;
  }
  return cases[n];
}

console.log(solution(4)); // 5
console.log(solution(3)); // 3
console.log(solution(6)); // 12
console.log(solution(1999)); // 724647

// 1) factorial로 풀이
// function factorial(x) {
//     if (x <= 1) return 1;
//     else return x * factorial(x - 1);
// }

// let answer = 1;
// let cntOne = n;
// let cntTwo = 0;
// while (cntOne > 1) {
//     cntOne -= 2;
//     cntTwo += 1;
//     answer += factorial(cntOne + cntTwo) / (factorial(cntOne) * factorial(cntTwo));
// }
// return answer % 1234567;