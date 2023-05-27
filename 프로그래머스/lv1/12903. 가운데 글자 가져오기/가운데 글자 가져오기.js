function solution(s) {
    const halfIndex = parseInt(s.length / 2);
    
    if (s.length % 2 === 0) {
        return s.slice(halfIndex - 1, halfIndex + 1);
    } else {
        return s[halfIndex];
    }
}