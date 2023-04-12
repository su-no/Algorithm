function solution(citations) {
    const sortedArray = citations.sort((a, b) => b - a);
    
    let hIndex = 0;
    
    for (let i=0; i<sortedArray.length; i++ ) {
        if (i + 1 <= sortedArray[i]) {
            hIndex = i + 1;
        }
    }
    
    return hIndex;
}

// 인용수 내림차순 정렬
// 요소 순회하다가 인용수가 index+1 보다 작거나 같으면 그 index+1를 반환