function solution(n, k) {
  const convertedNumber = n.toString(k);
  const array = convertedNumber.split('0');

  let answer = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === '' || array[i] === '1') continue;
    const num = parseInt(array[i]);
    if (isPrime(num)) answer++;
  }
  return answer;
}

function isPrime(num) {
  if (num === 2) return true;
  for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

console.log(solution(437674, 3)); // 3
console.log(solution(110011, 10)); // 2
