function solution(num) {
    if (num === 1) {
        return 0;
    }
    
    let number = num;
    let cnt = 0;
    
    while (cnt < 500) {
        cnt++;
        
        if (number % 2 === 0) {
            number = number / 2;
        } else {
            number = 3 * number + 1;
        }
        
        if (number === 1) {
            return cnt;
        }
    }
    
    return -1;
}