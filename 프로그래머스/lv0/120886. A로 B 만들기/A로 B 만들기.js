function solution(before, after) {
    // return JSON.stringify([...before].sort()) === JSON.stringify([...after].sort()) ? 1 : 0;
    return [...before].sort().join('') === [...after].sort().join('') ? 1 : 0;
}

// before, after 문자열을 배열로 변환 -> 배열 문자열 오름차순 정렬 => 문자열로 변환 => 같은지 비교
// 배열 -> 문자열 변환하는 방법 1) JSON.stringify(), 2) String.join('')