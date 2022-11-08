function solution(s) {
  let result = '';
  let firstChar = false;
  for (let i = 0; i < s.length; i++) {
    // 1) 공백일 경우 -> 그대로 더하기
    if (s[i] === ' ') {
      result += s[i];
      firstChar = false;
    } else {
      // 2) 공백이 아니고, 첫 글자일 경우 -> 대문자로 바꿔서 더하기
      if (!firstChar) {
        result += s[i].toUpperCase();
        firstChar = true;
      }
      // 3) 공백이 아니고, 첫 글자가 아닐 경우 -> 소문자로 바꿔서 더하기
      else {
        result += s[i].toLowerCase();
      }
    }
  }
  return result;
}

console.log(solution('3people unFollowed me'));
console.log(solution('for the last week'));
console.log(solution('i   wanT    GO   hOme    '));
