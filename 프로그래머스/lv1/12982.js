function solution(d, budget) {
  let result = 0;
  const sortedD = d.sort((a, b) => {
    return a - b;
  });
  for (let i = 0; i < sortedD.length; i++) {
    if (budget >= sortedD[i]) {
      budget -= sortedD[i];
      result += 1;
    } else {
      return result;
    }
  }
  return result;
}

console.log(solution([1, 3, 2, 5, 4], 9)); // 3
console.log(solution([2, 2, 3, 3], 10)); // 4
