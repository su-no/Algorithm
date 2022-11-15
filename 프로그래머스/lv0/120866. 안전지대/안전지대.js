function solution(board) {
    // 1. n*n 행렬을 만들고 0으로 초기화한다.
    const dangerZone = [];
    for (let i=0; i<board.length; i++) {
        dangerZone.push(Array(board.length).fill(0));
    }
    
    // 2. board를 돌면서 지뢰가 있는 곳과 주변을 1로 표시한다.
    for (let m=0; m<board.length; m++) {
        for (let n=0; n<board.length; n++) {
            if (board[m][n] === 1) {
                const leftMin = Math.max(n-1, 0);
                const rightMax = Math.min(n+1, dangerZone.length-1);
                const upMax = Math.min(m+1, dangerZone.length-1);
                const downMin = Math.max(m-1, 0);
                
                dangerZone[m][n] = 1; // 지뢰
                dangerZone[upMax][n] = 1; // 위쪽
                dangerZone[upMax][rightMax] = 1; // 오른쪽 위
                dangerZone[m][rightMax] = 1; // 오른쪽
                dangerZone[downMin][rightMax] = 1; // 오른쪽 아래
                dangerZone[downMin][n] = 1; // 아래쪽
                dangerZone[downMin][leftMin] = 1; // 왼쪽 아래
                dangerZone[m][leftMin] = 1; // 왼쪽
                dangerZone[upMax][leftMin] = 1 // 왼쪽 위  
            }
        }
    }
    
    // 3. dagerZone을 돌면서 안전지대 (0)의 합을 구해 리턴한다.
    const safeZone = dangerZone.reduce((sum, row) => {
        return sum + row.filter(sign => sign === 0).length;
    }, 0)
    
    return safeZone;
}