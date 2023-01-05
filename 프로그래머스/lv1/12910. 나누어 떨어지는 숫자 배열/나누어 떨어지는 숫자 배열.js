function solution(arr, divisor) {
    const result = [...arr].sort((a, b) => a - b).filter(num => num % divisor === 0);
    return result.length === 0 ? [-1] : result;
}