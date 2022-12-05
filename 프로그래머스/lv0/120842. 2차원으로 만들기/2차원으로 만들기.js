function solution(num_list, n) {
    const result = [];
    for (let i=0; i<num_list.length/n; i++) {
        result.push(num_list.slice(n*i, n*(i+1)));
    }
    return result;
}