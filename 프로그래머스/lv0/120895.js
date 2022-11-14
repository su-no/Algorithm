function solution(my_string, num1, num2) {
  // 반복문 사용, 해당 인덱스에서 인덱스 바꾸기
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

function solution2(my_string, num1, num2) {
  // 문자열을 배열로 만들어서, 해당 인덱스 주소에 할당값을 바꾸기
  const str_array = my_string.split('');
  [str_array[num1], str_array[num2]] = [str_array[num2], str_array[num1]];
  return str_array.join('');
}

// console.log(solution('hello', 1, 2)); // 'hlelo'
// console.log(solution('I love you', 3, 6)); // 'I l veoyou'
console.log(solution2('hello', 1, 2)); // 'hlelo'
console.log(solution2('I love you', 3, 6)); // 'I l veoyou'
