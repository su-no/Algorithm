function solution(n) {
    if (n === 1) {
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