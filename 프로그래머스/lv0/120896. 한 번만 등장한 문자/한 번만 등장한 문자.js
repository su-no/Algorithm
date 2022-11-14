function solution(s) {
    // return [...s].filter(char => s.split(char).length === 2).sort().join('');
    return [...s].filter(char => s.match(new RegExp(char, 'g')).length === 1).sort().join('');
}

// 시간
// split : 0.40 ms
// RegExp : 0.18 ms => 더 빠르다.