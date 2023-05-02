function solution(start, end) {
    return Array(start - end + 1).fill(start).map((num, idx) => num - idx);
}