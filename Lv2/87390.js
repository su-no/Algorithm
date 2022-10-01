function solution(n, left, right) {
  const answer = [];
  for (let i = left; i <= right; i++) {
    answer.push(Math.max(parseInt(i / n) + 1, i % n + 1));
    console.log(parseInt(i / n) + 1, i % n + 1);
  }
  return answer;
}

console.log(solution(3, 2, 5)); // [3, 2, 2, 3]
console.log(solution(4, 7, 14)); // [4, 3, 3, 3, 4, 4, 4, 4,]
console.log(solution(5, 3, 10)); // [4, 5, 2, 2, 3, 4, 5, 3]

// 1 2 3
// 2 2 3
// 3 3 3

// 3, 2, 5 -> [3, 2, 2, 3]
// 행과 열 중 최댓값을 선택하자.
// 1 3
// 2 1
// 2 2
// 3 3

// 1 2 3 4
// 2 2 3 4
// 3 3 3 4
// 4 4 4 4

// 1 2 3 4 5
// 2 2 3 4 5
// 3 3 3 4 5
// 4 4 4 4 5
// 5 5 5 5 5