function solution(number, limit, power) {
    let result = 0;
    
    for (let i=1; i<=number; i++) {
        let cnt = 0;
        
        for (let j=1; j<Math.sqrt(i); j++) {
            if (i%j === 0) cnt += 2;
            if (cnt > limit) break;
        }
        if (Math.sqrt(i) === Math.floor(Math.sqrt(i))) {
            cnt += 1;
        }
        
        if (cnt > limit) result += power;
        else result += cnt;
    }
    
    return result;
}