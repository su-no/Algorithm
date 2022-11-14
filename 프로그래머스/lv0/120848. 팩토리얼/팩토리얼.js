function solution(n) {
    if (n === 1) {
        // 주의: 만족하는 가장 큰 정수이므로, factorial 값이 0일 때 가능한 (0, 1) 중 => 1이 정답
        return 1;
    }
    for (let i=2; i<=11; i++) {
        if (factorial(i) > n) {
            return i - 1;
        }
    }
}

function factorial(num) {
    if (num < 2) {
        return 1;
    }
    return num * factorial(num - 1);
}