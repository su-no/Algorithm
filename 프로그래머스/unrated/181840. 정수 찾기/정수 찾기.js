function solution(num_list, n) {
    // return num_list.some(num => num === n) ? 1 : 0;
    return num_list.includes(n) ? 1 : 0;
}