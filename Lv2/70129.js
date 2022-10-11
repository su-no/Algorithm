function solution(s) {
  let binaryNumber = s;
  let countOfZero = 0;
  let countOfConvert = 0;

  // TODO: 이진수 변환할 때.. 정규식이나 replace 활용할 수도 있음...^^!

  // 변환된 이진수가 1이면 종료
  while (binaryNumber !== '1') {
    let zeroRemovedNumber = '';
    for (let i = 0; i < binaryNumber.length; i++) {
      if (binaryNumber[i] !== '0')
        zeroRemovedNumber += binaryNumber[i];
    }
    // 제거된 0의 개수 더하기
    countOfZero += binaryNumber.length - zeroRemovedNumber.length;

    // 0이 제거된 수의 길이를 이진수로 변환
    const lengthOfNumber = zeroRemovedNumber.length;
    binaryNumber = lengthOfNumber.toString(2);
    countOfConvert += 1;
  }

  return [countOfConvert, countOfZero];
}

console.log(solution("110010101001"));
console.log(solution("01110"));
console.log(solution("1111111"));