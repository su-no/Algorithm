function solution(array, n) {
    const sortedArray = array.sort((a, b) => a - b);
    const relativeArray = sortedArray.map(num => Math.abs(num - n));
    const indexOfMin = relativeArray.indexOf(Math.min(...relativeArray));
    return sortedArray[indexOfMin];
}