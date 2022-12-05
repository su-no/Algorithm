function solution(s) {
    const arr = s.split(' ').map(num => Number(num));
    const result = [Math.min(...arr), Math.max(...arr)];
    return result.join(' ');
}