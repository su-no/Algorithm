function solution(n, works) {
  let cnt = 0;

  // 최대값을 구해서 1씩 뺀다. (n번 반복)
  while (cnt < n) {
    const max = Math.max(...works);
    // 최대값이 0이라면 모든 배열이 0이므로 야근지수는 0
    if (max === 0) return 0;

    const idx = works.indexOf(max);
    // 최대값이 여러개인 경우, 한번에 1씩 빼준다.
    for (i = 0; i < works.length; i++) {
      if (works[i] === max) {
        works[i] -= 1;
        cnt++;
      }
      if (cnt >= n) break;
    }
  }

  const result = works.reduce((acc, cur) => acc + cur ** 2, 0);
  return result;
}

console.log(solution(4, [4, 3, 3])); // 12
console.log(solution(1, [2, 1, 2])); // 6
console.log(solution(3, [1, 1])); // 0
