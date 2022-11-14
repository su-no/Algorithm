function solution(before, after) {
    // return JSON.stringify([...before].sort()) === JSON.stringify([...after].sort()) ? 1 : 0;
    return [...before].sort().join('') === [...after].sort().join('') ? 1 : 0;
}