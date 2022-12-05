function solution(numbers) {
    // 문자열에 일치하는 숫자 obj
    const dict = {
        zero: 0,
        one: 1,
        two: 2,
        three: 3,
        four: 4,
        five: 5,
        six: 6,
        seven: 7,
        eight: 8,
        nine: 9,
    }
    
    // // 문자열 찾아서 배열로 나누기
    // const arr = numbers.match(/zero|one|two|three|four|five|six|seven|eight|nine/g);
    // // 각 문자열을 숫자로 치환, join으로 문자열로 이어서, number 타입으로 변환
    // const result = Number(arr.map(str => dict[str]).join(''));
    // return result;
    
    // 더 간단한 방법. replace를 정규표현식으로 사용
    const replaced = numbers.replace(/zero|one|two|three|four|five|six|seven|eight|nine/g, num => dict[num]);
    return Number(replaced);
}