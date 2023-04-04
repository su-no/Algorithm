function solution(s){
    let cntP = 0;
    let cntY = 0;
    
    for (let i=0; i<s.length; i++) {
        if (s[i] === 'p' || s[i] === 'P') {
            cntP++;
        }
        if (s[i] === 'y' || s[i] === 'Y') {
            cntY++;
        }
    }
    
    return cntP === cntY ? true : false;
}