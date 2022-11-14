function solution(phone_number) {
  let answer = '';
  for (let i = 0; i < phone_number.length - 4; i++) {
    answer += '*';
  }
  answer += phone_number.slice(phone_number.length - 4);
  return answer;
}

console.log(solution('01033334444'));
console.log(solution('027778888'));
