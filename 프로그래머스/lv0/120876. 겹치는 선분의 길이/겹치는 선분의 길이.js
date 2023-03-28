function solution(lines) {
    // 최소값~최대값 선분을 만들어서 0으로 초기화
    // line들이 지날때마다 1씩 추가
    // 반복문 완료 후 2 이상의 숫자가 연속되는 선분의 길이를 구해서 리턴
    
    const min = Math.min(...lines.flat());
    const max = Math.max(...lines.flat());
    
    const cntArray = Array(max-min+1).fill(0);
    
    for (let i=0; i<lines.length; i++) {
        const start = lines[i][0];
        const end = lines[i][1];
        
        for (let j=start-min; j<end-min; j++) {
            cntArray[j]++;
        }
    }

    const continuousLines = cntArray.join('').match(/[2-3]*/g);
    if (!continuousLines) return 0;
    return continuousLines.reduce((sum, cur) => sum + cur.length ,0);
}