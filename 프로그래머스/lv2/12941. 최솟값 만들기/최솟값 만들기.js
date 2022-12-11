function solution(A,B){
    // A 오름차순, B 내림차순 정렬
    const incrementA = [...A].sort((a, b) => a - b);
    const decrementB = [...B].sort((a, b) => b - a);
    
    // 첫번째 원소부터 각각 곱하기
    const result = incrementA.reduce((sum, cur, idx) => {
        return sum + (cur * decrementB[idx]);
    }, 0);

    return result;
}