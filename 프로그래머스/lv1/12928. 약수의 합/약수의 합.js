function solution(n) {
    // 0이나 1이면 그대로 반환
    if (n === 0 || n === 1) {
        return n;
    }
    
    let result = 1;
    for (let i=2; i<=n; i++) {
        if (n % i === 0) {
            result += i;
        }
    }
    return result;
}