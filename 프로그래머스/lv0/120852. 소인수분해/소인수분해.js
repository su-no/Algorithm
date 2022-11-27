function solution(n) {
    const primeNumbers = [];
    let number = n;
    
    while (number > 1) {
        for (let i=2; i<=number; i++) {
            if (number % i === 0) {
                primeNumbers.push(i);
                number = parseInt(number / i, 10);
                break;
            }
        }
    }
    
    // 소인수 중복 제거
    return [...new Set(primeNumbers)];
}