function solution(num_list) {
    let cnt = 0;
    for (let num of num_list) {
        while (num !== 1) {
            if (num % 2 === 0) {
                num /= 2;
            } else {
                num = (num - 1) / 2;
            }
            cnt++;
        }
    }
    
    return cnt;
}