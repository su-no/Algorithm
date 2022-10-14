function solution(number) {
  let cnt = 0;
  for (i = 0; i < number.length; i++) {
    for (j = i + 1; j < number.length; j++) {
      for (k = j + 1; k < number.length; k++) {
        if (number[i] + number[j] + number[k] === 0)
          cnt++;
      }
    }
  }
  console.log(cnt);
  return cnt;
}

solution([-2, 3, 0, 2, -5]); // 2
solution([-3, -2, -1, 0, 1, 2, 3]); // 5
solution([-1, 1, -1, 1]); // 0