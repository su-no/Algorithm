function solution(s) {    
    // 처음(0)은 무조건 -1
    const result = [-1];
    
    // 1부터 s.length까지 순회하면서
    for (let idx=1; idx<s.length; idx++) {
        const char = s[idx];
        const word = s.slice(0, idx);
        
        const lastIndex = word.lastIndexOf(char);
        
        if (lastIndex === -1) {
            // 같은 글자가 없으면 -1 리턴
            result.push(-1);
        } else {
            // 같은 글자가 있으면 마지막 인덱스 구해서 현재 인덱스에서 빼기
            result.push(idx - lastIndex)
        }
    }
    
    return result;
}