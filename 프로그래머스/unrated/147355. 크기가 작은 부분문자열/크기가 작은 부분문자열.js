function solution(t, p) {
    const len = p.length;
    let array = [];
    
    // t, p 길이가 같으면 바로 비교해서 리턴
    if (t.length === p.length) {
        if (Number(t) <= Number(p)) return 1;
        return 0;
    }

    // t, p 길이가 다르면 배열 만들기
    for (let i=0; i<=t.length-len; i++) {
        array.push(Number(t.slice(i, i+len)));
    }
    
    // p보다 작은 숫자 개수 리턴
    let result = 0;
    for (const num of array) {
        if (num <= Number(p)) {
            result++;
        }
    }
    
    return result;
}
