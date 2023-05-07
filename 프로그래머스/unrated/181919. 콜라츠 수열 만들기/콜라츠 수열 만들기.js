function solution(n) {
    let sequence = [];
    
    while (true) {
        sequence.push(n);
        
        if (n === 1) break;
        
        if (n % 2 === 0) n /= 2;
        else n = 3 * n + 1;
    }
    
    return sequence;
}