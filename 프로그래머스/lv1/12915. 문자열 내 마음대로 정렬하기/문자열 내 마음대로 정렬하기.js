function solution(strings, n) {
    // 사전 순으로 먼저 정렬
    strings.sort();
    
    // n번째 인덱스 순으로 정렬
    strings.sort((a, b) => {
        if (a[n] < b[n]) return -1;
        if (a[n] > b[n]) return 1;
        return 0;
    })
    
    return strings;
}