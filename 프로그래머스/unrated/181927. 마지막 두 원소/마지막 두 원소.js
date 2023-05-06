function solution(num_list) {
    const firstFromLast = num_list.at(-1);
    const secondFromLast = num_list.at(-2);
    
    if (firstFromLast > secondFromLast) {
        num_list.push(firstFromLast - secondFromLast);
    } else {
        num_list.push(firstFromLast * 2);
    }
    
    return num_list;
}