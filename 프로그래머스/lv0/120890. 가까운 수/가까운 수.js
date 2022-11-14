function solution(array, n) {
    const sortedArray = array.sort((a, b) => a - b);
    const relativeArray = sortedArray.map(num => Math.abs(num - n));
    const indexOfMin = relativeArray.indexOf(Math.min(...relativeArray));
    return sortedArray[indexOfMin];
}

// 1. 배열 숫자 오름차순 정렬
// 2. 각 숫자에서 n만큼 빼고 절댓값 취하기
// 3. 절댓값이 가장 작은 인덱스를 구하기 (여러개면 가장 앞에 있는 숫자 -> 더 작은 수)
// 4. 원본 오름차순 정렬된 배열에서 해당 인덱스 숫자 리턴