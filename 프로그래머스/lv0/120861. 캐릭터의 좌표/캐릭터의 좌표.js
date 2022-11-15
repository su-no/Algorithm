function solution(keyinput, board) {
    // 방향의 dx, dy를 obj로 저장
    const direction = {
        'left': [-1, 0],
        'right': [1, 0],
        'up': [0, 1],
        'down': [0, -1]
    };

    // 초기 위치
    let [x, y] = [0, 0];
    // 최대 위치의 절댓값
    const [maxX, maxY] = [(board[0]-1)/2, (board[1]-1)/2];
    
    keyinput.forEach(input => {
        // 최대 위치에 있는 경우 입력 무시
        if (input === 'left' && x === -maxX) return;
        if (input === 'right' && x === maxX) return;
        if (input === 'up' && y === maxY) return;
        if (input === 'down' && y === -maxY) return;
        
        const [dx, dy] = direction[input];
        x += dx;
        y += dy;
    })
    return [x, y];
}