function solution(n) {
  let number = n;
  const countOne = n.toString(2).match(/1/g)?.length;
  while (true) {
    number += 1;
    const binNumber = number.toString(2);
    if (countOne === binNumber.match(/1/g)?.length) {
      break;
    }
  }
  return number;
}

console.log(solution(78)); // 83
console.log(solution(15)); // 23