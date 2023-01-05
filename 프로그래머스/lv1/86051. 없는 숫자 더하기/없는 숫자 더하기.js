function solution(numbers) {
    let result = 0;
    for (let i=1; i<10; i++) {
        result += i;
    }
    
    for (const num of numbers) {
        result -= num;
    }
    
    return result;
}