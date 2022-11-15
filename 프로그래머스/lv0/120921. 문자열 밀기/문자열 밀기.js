function solution(A, B) {
    // A와 B가 같으면 0번만에 만족
    if (A === B) {
        return 0;
    }
    let str = A;
    for (let i=1; i<A.length; i++) {
        str = str.slice(-1) + str.slice(0, -1);
        if (str === B) {
            return i;
        }
    }
    return -1;
}