function solution(arr) {
    const sum = arr.reduce((sum, cur) => sum + (cur/arr.length), 0)
    return sum;
}