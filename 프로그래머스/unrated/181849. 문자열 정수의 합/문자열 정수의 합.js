function solution(num_str) {
    return [...num_str].reduce((sum, cur) => sum + Number(cur), 0);
}