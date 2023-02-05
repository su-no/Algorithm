function solution(s){
    let cnt = 0;
    
    for (let i=0; i<s.length; i++) {
        // (이면 +1, )이면 -1
        cnt += (s[i] === '(' ? 1 : -1);
        
        // cnt가 마이너스가 되면 )가 더 많다는 뜻이므로 실패.
        if (cnt < 0) return false;
    }
    return (cnt === 0 ? true : false);
}