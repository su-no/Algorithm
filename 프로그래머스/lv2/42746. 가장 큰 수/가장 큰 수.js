function solution(numbers) {
    const result = numbers.sort((a, b) => {
        return (b.toString() + a.toString()) - (a.toString() + b.toString());
    }).join('');
    
    return result[0] === '0' ? '0' : result;
}