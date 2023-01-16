function solution(n) {
    return [...n.toString()].reduce((sum, cur) => sum + Number(cur), 0);
}