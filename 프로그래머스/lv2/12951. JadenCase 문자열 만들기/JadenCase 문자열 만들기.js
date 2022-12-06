function solution(s) {
    // 1. 공백 기준으로 문자열을 배열로 분리한다.
    // 2. 각 문자열을 소문자로 만들고, 첫번째 글자만 대문자로 만든다.
    // 3. 배열을 합쳐서 문자열로 리턴한다..
    
    const arr = s.split(' ');
    const result = arr.map(str => {
        if (str.length === 0) {
            return str.toUpperCase();
        }
        return str[0].toUpperCase() + str.slice(1).toLowerCase();
    });
    return result.join(' ');
}