function solution(citations) {
    // 내림차순 정렬
    const sortedArray = citations.sort((a, b) => b - a);
    
    let hIndex = 0;
    
    // 인덱스+1보다 값이 크다면 hIndex 업데이트
    for (let i=0; i<sortedArray.length; i++ ) {
        if (i + 1 <= sortedArray[i]) {
            hIndex = i + 1;
        }
    }
    
    return hIndex;
}