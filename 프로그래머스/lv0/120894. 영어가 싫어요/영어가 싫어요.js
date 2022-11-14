function solution(numbers) {
    const dict = {'zero': 0,
                  'one': 1,
                  'two': 2,
                  'three': 3,
                  'four': 4,
                  'five': 5,
                  'six': 6,
                  'seven': 7,
                  'eight': 8,
                  'nine': 9
                 }
    // 1) 해당하는 문자를 배열로 만들어서 map 함수로 변환
    // return Number(numbers.match(/zero|one|two|three|four|five|six|seven|eight|nine/g).map(num => dict[num]).join(''));
    
    // 2) 해당하는 문자를 바로 숫자로 치환 => 더 빠름.
    return Number(numbers.replace(/zero|one|two|three|four|five|six|seven|eight|nine/g, num => dict[num]));
}