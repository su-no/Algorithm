function solution(numlist, n) {
    numlist.sort((a, b) => b - a);
    return numlist.sort((a, b) => Math.abs(a - n) - Math.abs(b - n));
}

// 1. 거리가 같으면 더 큰 수가 앞에 와야 함 -> 1차적으로 내림차순 정렬
// 2. 절대값 거리를 비교해서 오름차순 정렬!