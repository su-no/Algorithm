function solution(n) {
    if (n % 2 !== 0) {
        let sum = 0;
        for (let i=1; i<=n; i+=2) {
            sum += i;
        }
        return sum;
    } else {
        let sum = 0;
        for (let i=0; i<=n; i+=2) {
            sum += Math.pow(i, 2);
        }
        return sum;
    }
}