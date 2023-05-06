function solution(arr) {
    const result = arr.reduce((list, num) => 
                              [...list, ...Array(num).fill(num)], [])
    
    return result;
}