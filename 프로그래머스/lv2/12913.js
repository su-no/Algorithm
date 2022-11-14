// DP (Dynamic Programming) 사용하는 문제!
// 참고: https://shanepark.tistory.com/183

function solution(land) {
  const dp = [...land[0]];
  for (i = 1; i < land.length; i++) {
    for (j = 0; j < 4; j++) {
      let max = 0;
      for (k = 0; k < 4; k++) {
        if (k === j) continue;
        if (land[i - 1][k] > max) max = land[i - 1][k];
      }
      land[i][j] += max;
      dp.push(land[i][j]);
    }
  }
  return Math.max(...dp.slice(dp.length - 4));
}

console.log(
  solution([
    [1, 1, 1, 1],
    [2, 2, 2, 3],
    [3, 3, 3, 6],
    [4, 4, 4, 7],
  ]),
); // 14

console.log(
  solution([
    [1, 2, 3, 5],
    [5, 6, 7, 8],
    [4, 3, 2, 1],
  ]),
); // 16

console.log(
  solution([
    [0, 1, 1, 10],
    [0, 1, 1, 100],
  ]),
); // 101
