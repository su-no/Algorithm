function solution(n) {
    let result = 0;
    for (let num=4; num<=n; num++) { // 합성수는 4부터..
        let divisor = 1; // 1은 무조건 약수
        for (let i=2; i<=num; i++) {
            if (num % i === 0) {
                divisor++;
            }
            if (divisor >= 3) {
                result++;
                break;
            }
        }
    }
    return result;
}

// 개선방안: i<=num 범위를 i<=Math.sqrt(num)으로 잡고, 제곱근까지 약수가 1개이면 소수임. (합성수 아님)