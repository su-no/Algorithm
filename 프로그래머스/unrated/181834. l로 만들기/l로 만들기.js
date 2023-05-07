function solution(myString) {
    const l  = 'l'.charCodeAt(0);
    
    return [...myString].map((char, idx) => {
        if (myString.charCodeAt(idx) < l) return 'l';
        return char;
    }).join('');
}