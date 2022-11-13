function solution(my_string, num1, num2) {
  let result = '';
  for (let i = 0; i < my_string.length; i++) {
    if (i === num1) {
      result += my_string[num2];
    } else if (i === num2) {
      result += my_string[num1];
    } else {
      result += my_string[i];
    }
  }
  return result;
}

console.log(solution('hello', 1, 2)); // 'hlelo'
console.log(solution('I love you', 3, 6)); // 'I l veoyou'
