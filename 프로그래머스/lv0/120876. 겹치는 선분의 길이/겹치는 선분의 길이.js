function solution(lines) {
    // 위치: 선분 개수 형태로 Map 저장
    // * 선분 마지막위치는 포함하지 않아야 함.
    const lineMap = new Map();
    for (const line of lines) {
        for (let i=line[0]; i<line[1]; i++) {
            lineMap.set(i, lineMap.get(i) + 1 || 1);
        }
    }
    
    // map의 value를 문자열로 변환해서, 정규표현식을 이용해서 겹치는 선분 찾기
    const overlappedLines = [...lineMap.values()].join('').toString().match(/[23]+/g);
    // 겹치는 선분 없으면 0 리턴
    if (!overlappedLines) return 0;
    
    // 각 선분의 길이 합 구해서 리턴
    const result = overlappedLines.reduce((sum, cur) => sum + cur.length, 0);
    return result;
}