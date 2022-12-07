function solution(board) {
    const n = board.length;
    
    // 새로운 n*n 배열 생성
    const dangerBoard = Array(n).fill(0).map(arr => Array(n).fill(0));
    
    for (let i=0; i<n; i++) { //세로
        for (let j=0; j<n; j++) { // 가로
            if (board[i][j] !== 1) continue;
            // 1인 지역 주위를 1로 변경
            for (let k=Math.max(i-1, 0); k<=Math.min(i+1, n-1); k++) {
                for (let l=Math.max(j-1, 0); l<=Math.min(j+1, n-1); l++) {
                    dangerBoard[k][l] = 1;
                }
            }
        }
    }
    
    // 새로운 배열에서 0의 개수 리턴
    const result = dangerBoard.flat().filter(v => v === 0).length;
    return result;
}