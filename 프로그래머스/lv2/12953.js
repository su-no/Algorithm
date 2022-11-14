function solution(arr) {
  let lcm = arr[0];
  for (let i = 1; i < arr.length; i++) {
    lcm = getLCM(lcm, arr[i]);
  }
  return lcm;
}

function getLCM(num1, num2) {
  let lcm = 1;
  while (true) {
    if (lcm % num1 === 0 && lcm % num2 === 0) {
      break;
    }
    lcm++;
  }
  return lcm;
}

console.log(solution([2, 6, 8, 14])); // 168
console.log(solution([1, 2, 3])); // 6
console.log(solution([4, 6, 8])); // 24
