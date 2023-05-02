function solution(a, b) {
    const resultA = Number(`${a}${b}`);
    const resultB = Number(`${b}${a}`);
    
    return resultA > resultB ? resultA : resultB;
}