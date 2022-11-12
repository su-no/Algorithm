// 23 -> 'cd'
// 1. 숫자를 한글자씩 순회하기 위해서 문자열 배열로 만든다.
// 2. 숫자 인덱스에 해당하는 문자열 배열을 만든다.
// 3. 문자열 배열을 스트링으로 합쳐서 반환한다.

function solution(age) {
  const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
  return [...age.toString()].map(num => alphabet[num]).join('');
}

console.log(solution(23));
console.log(solution(51));
console.log(solution(100));
