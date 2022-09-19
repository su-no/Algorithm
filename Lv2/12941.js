function solution(A, B) {
  // A는 오름차순, B는 내림차순으로 정렬
  const sortedA = A.sort((a, b) => { return a - b; });
  const sortedB = B.sort((a, b) => { return b - a; });

  // 같은 인덱스끼리 곱해서 더하기
  let sum = 0;
  for (let i = 0; i < A.length; i++) {
    sum += sortedA[i] * sortedB[i];
  }

  return sum;
}

console.log(solution([1, 4, 2], [5, 4, 4])); // 29
console.log(solution([1, 2], [3, 4])); // 10