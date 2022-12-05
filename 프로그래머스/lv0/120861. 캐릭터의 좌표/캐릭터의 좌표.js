function solution(keyinput, board) {
  // 초기 위치
  let [x, y] = [0, 0];

  // X, Y의 절대값 최대
  const maxX = (board[0]-1)/2;
  const maxY = (board[1]-1)/2;

  for (const key of keyinput) {
    switch (key) {
      case 'up':
        y = Math.min(maxY, y+1);
        break;
      case 'down':
        y = Math.max(-maxY, y-1);
        break;
      case 'left':
        x = Math.max(-maxX, x-1);
        break;
      case 'right': 
        x = Math.min(maxX, x+1);
        break;
    }
  }
  return [x, y];
}