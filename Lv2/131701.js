function solution(elements) {
  let partialSum = [...elements];
  const toAdd = [...elements];
  // const array = [...elements, ...elements];
  let totalSum = [...elements];

  for (let i = 0; i < elements.length - 1; i++) {
    // const toAdd = array.slice(i, i+elements.length);
    toAdd.push(toAdd.shift());
    // console.log(partialSum, toAdd);

    for (let j = 0; j < elements.length; j++) {
      partialSum[j] += toAdd[j];
    }

    totalSum.push(...partialSum);
  }

  const result = Array(...new Set(totalSum));
  return result.length;
}

console.log(solution([7, 9, 1, 1, 4])); // 18
console.log(solution([1, 1, 1, 1, 1, 1, 1])); // 7
console.log(solution([1, 2, 3])); // 6

// 7 9 1 1 4
// 9 1 1 4 7
// 16 10 2 5 11

// 16 10 2 5 11
// 1 1 4 7 9
// 17 11 6 12 20

// 17 11 6 12 20
// 1 4 7 9 1
// 18 15 13 21 21

// 18 15 13 21 21
// 4 7 9 1 1
// 22 22 22 22 22

// 1 1 1 1 1
// 1 1 1 1 1
// 2 2 2 2 2

// 3 3 3 3 3
// 4 4 4 4 4
// 5 5 5 5 5
