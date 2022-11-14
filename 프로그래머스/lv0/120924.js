// 다음에 올 숫자

function solution(common) {
  // 등차수열 확인
  if (common[1] - common[0] === common[2] - common[1]) {
    const diff = common[1] - common[0];
    return common[common.length - 1] + diff;
  }
  // 등비수열 확인
  if (common[1] / common[0] === common[2] / common[1]) {
    const multi = common[1] / common[0];
    return common[common.length - 1] * multi;
  }
}

console.log(solution([1, 2, 3, 4])); // 5
console.log(solution([2, 4, 8])); // 16
