function solution(n, control) {
    let num = n;
    for (const char of control) {
        if (char === 'w') {
            num +=1 ;
        } else if (char === 's') {
            num -= 1;
        } else if (char === 'd') {
            num += 10;
        } else if (char === 'a') {
            num -= 10;
        }
    }
    return num;
}