function solution(n, s) {
  if (s < n) return [-1];
  if (s % n === 0) return new Array(n).fill(s / n);

  // 1. n 길이의 배열을 s/n 버림 한 숫자로 채운다.
  // 2. 배열의 합이 s보다 모자란 만큼 뒤에서부터 1씩 증가시킨다.

  const roundDown = parseInt(s / n);
  const diff = s - (parseInt(s / n) * n);

  const frontArray = new Array(n - diff).fill(roundDown);
  const backArray = new Array(diff).fill(roundDown + 1);

  return [...frontArray, ...backArray];
}

console.log(solution(2, 9)); // [4, 5]
console.log(solution(2, 1)); // [-1]
console.log(solution(2, 8)); // [4, 4]
console.log(solution(4, 10)); // [2, 2, 3, 3]
console.log(solution(4, 15)); // [3, 4, 4, 4]