function solution(s, skip, index) {
    const skipAscii = [...skip].map((_, idx) => skip.charCodeAt(idx));
    const result = [];
    
    for (let i=0; i<s.length; i++) {
        let ascii = s.charCodeAt(i);
        let cnt = 0;
        
        while (cnt < index) {
            ascii++;
            if (ascii > 122) {
                ascii = 97;
            }
            if (skipAscii.includes(ascii)) {
                continue;
            }
            cnt++;
        }
        
        result.push(ascii);
    }
    
    return String.fromCharCode(...result);
}