function solution(my_string) {
    // 1. my_string 문자열을 배열로 변환한다.
    // 2. 문자의 인덱스가 arr.indexOf(char) 과 같은 값인 문자를 반환한다. (indexOf는 일치하는 첫번째 값을 반환함)
    // 3. 결과 배열을 문자열로 변환한다..
    // return [...my_string].filter((char, idx, arr) => arr.indexOf(char) === idx).join('');
    
    // 1. my_string을 Set으로 변환하고 (중복 제거), Set을 배열로 변환한 뒤 다시 문자열로 변환, 반환한다.
    return [...new Set(my_string)].join('');
}