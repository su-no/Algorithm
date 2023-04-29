function solution(arr, k) {
    if (k % 2 === 0) {
        return arr.map(num => num + k);
    } else {
        return arr.map(num => num * k);
    }
}