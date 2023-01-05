function solution(array, commands) {
    const result = [];
    
    for (const command of commands) {
        const [i, j, k] = command;
        result.push(array.slice(i-1, j).sort((a, b) => a - b)[k-1]);
    }
    
    return result;
}