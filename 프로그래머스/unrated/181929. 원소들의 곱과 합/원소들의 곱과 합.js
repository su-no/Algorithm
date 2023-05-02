function solution(num_list) {
    const product = num_list.reduce((cur, acc) => acc * cur, 1);
    const sum = num_list.reduce((cur, acc) => acc + cur, 0);
    
    return product < Math.pow(sum, 2) ? 1 : 0;
}