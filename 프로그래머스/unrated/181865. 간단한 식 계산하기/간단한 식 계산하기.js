function solution(binomial) {
    let [a, op, b] = binomial.split(' ');
    a = Number(a);
    b = Number(b);
    
    if (op === '+') return a + b;
    if (op === '-') return a - b;
    if (op === '*') return a * b;
}