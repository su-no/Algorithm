function solution(n, a, b) {
  let answer = 0;
  let groupA = a;
  let groupB = b;
  while (groupA !== groupB) {
    groupA = parseInt((groupA + 1) / 2);
    groupB = parseInt((groupB + 1) / 2);
    answer++;
  }
  return answer;
}

console.log(solution(8, 4, 7)); // 3
