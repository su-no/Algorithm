function solution(n) {
  const array = [...n.toString()];
  const result = array.reduce((sum, cur) => sum + parseInt(cur), 0);
  return result;
}

console.log(solution(1234)); // 10
console.log(solution(930211)); // 16
