function solution(start, end) {
    return new Array(end - start + 1).fill(0).map((_, idx) => idx + start);
}