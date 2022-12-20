function solution(s) {
    // 문자열의 길이가 4나 6이 아니면 false
    if (s.length !== 4 && s.length !== 6) {
        return false;
    }
    
    // 문자열이 숫자로만 구성되어 있지 않으면 false
    if (s.match(/[0-9]+/g)[0] !== s) {
        return false;
    }
    
    return true;
}