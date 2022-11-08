function solution(arr1, arr2) {
  const answer = [];

  for (let c = 0; c < arr1.length; c++) {
    const row = [];

    for (let r = 0; r < arr2[0].length; r++) {
      let sum = 0;

      for (let i = 0; i < arr1[0].length; i++) {
        sum += arr1[c][i] * arr2[i][r];
      }

      row.push(sum);
    }
    answer.push(row);
  }
  return answer;
}

console.log(
  solution(
    [
      [1, 4],
      [3, 2],
      [4, 1],
    ],
    [
      [3, 3],
      [3, 3],
    ],
  ),
);

console.log(
  solution(
    [
      [2, 3, 2],
      [4, 2, 4],
      [3, 1, 4],
    ],
    [
      [5, 4, 3],
      [2, 4, 1],
      [3, 1, 1],
    ],
  ),
);
