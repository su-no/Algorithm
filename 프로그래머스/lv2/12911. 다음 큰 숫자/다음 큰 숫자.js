function solution(n) {
    const cntOfZero = n.toString(2).replaceAll('0', '').length;
    
    let num = n + 1;
    while (true) {
        if (num.toString(2).replaceAll('0', '').length === cntOfZero) {
            return num;
        }
        num++;
    }
}