function solution(s){
    const lowerS = s.toLowerCase();
    let cntP = 0;
    let cntY = 0;
    
    for (let i=0; i<lowerS.length; i++) {
        if (lowerS[i] === 'p') {
            cntP++;
        }
        if (lowerS[i] === 'y') {
            cntY++;
        }
    }
    
    return cntP === cntY ? true : false;
}