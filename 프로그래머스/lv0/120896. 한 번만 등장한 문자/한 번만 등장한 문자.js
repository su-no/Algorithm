function solution(s) {
    // return [...s].filter(char => s.split(char).length === 2).sort().join('');
    return [...s].filter(char => s.match(new RegExp(char, 'g')).length === 1).sort().join('');
}