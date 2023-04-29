function solution(a, b) {
    const AisOdd = a % 2 !== 0;
    const BisOdd = b % 2 !== 0;
    
    if (AisOdd && BisOdd) {
        return Math.pow(a, 2) + Math.pow(b, 2);
    } else if (!AisOdd && !BisOdd) {
        return Math.abs(a - b);
    } else {
        return 2 * (a + b);
    }
}