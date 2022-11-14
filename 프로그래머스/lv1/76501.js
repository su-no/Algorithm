function solution(absolutes, signs) {
  let answer = 0;
  signs.forEach((bool, idx) => {
    if (bool) answer += absolutes[idx];
    else answer -= absolutes[idx];
  });
  return answer;
}

console.log(solution([4, 7, 12], [true, false, true])); // 9
console.log(solution([1, 2, 3], [false, false, true])); // 0
