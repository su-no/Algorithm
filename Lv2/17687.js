function solution(n, t, m, p) {
  const max = t * m;
  const orders = [];
  let num = 0;
  while (orders.length < max) {
    const converted = num.toString(n);
    orders.push(...converted.split(''));
    num++;
  }
  let result = '';
  for (let i = 0; i < t; i++) {
    result += orders[i * m + p - 1];
  }
  result = result.toUpperCase();
  return result;
}

console.log(solution(2, 4, 2, 1)); // "0111"
console.log(solution(16, 16, 2, 1)); // "02468ACE11111111"
console.log(solution(16, 16, 2, 2)); // "13579BDF01234567"

/**
 * 1. 최대 숫자 max는 구할 숫자의 개수 t * 게임에 참가하는 인원 m 이다.
 * 2. 배열의 길이가 max를 넘을 때까지 0부터 n진법 변환하여 한글자씩 배열에 추가한다.
 * 3. 배열에서 게임 참가 인원, 튜브의 순서를 이용해서 결과 문자열을 구한다.
 * 4. 문자열을 대문자로 변환 후 반환한다.
 */
