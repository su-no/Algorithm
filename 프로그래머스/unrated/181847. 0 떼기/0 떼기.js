function solution(n_str) {
    return n_str.match(/[1-9]\d*/g)[0];
}