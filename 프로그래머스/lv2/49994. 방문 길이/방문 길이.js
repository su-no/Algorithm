function solution(dirs) {
    // 위치를 초기화하고, 모든 좌표를 (x, y) 문자열로 배열에 추가한다.
    let [x, y] = [0, 0];
    
    const allRoutes = [`(${x}, ${y})`];
    for (let i=0; i<dirs.length; i++) {
        const direction = dirs[i];
        if (direction === 'U') {
            if (y === 5) continue;
            y++;
        } else if (direction === 'D') {
            if (y === -5) continue;
            y--;
        } else if (direction === 'R') {
            if (x === 5) continue;
            x++;
        } else if (direction === 'L') {
            if (x === -5) continue;
            x--
        }
        allRoutes.push(`(${x}, ${y})`);
    }
    
    // 실제 이동한 경로를 중복 없이 배열에 추가한다.
    // 주의) 반대로 가도 같은 길이므로 reverseStr도 중복으로 고려함. 
    const netRoutes = [];
    for (let i=0; i<allRoutes.length-1; i++) {
        const route = allRoutes.slice(i, i+2);
        const str = `${route[0]} -> ${route[1]}`;
        const reverseStr = `${route[1]} -> ${route[0]}`
        if (!netRoutes.includes(str) && !netRoutes.includes(reverseStr)) {
            netRoutes.push(str);
        }
    }
    
    // 실제 이동한 경로의 길이를 반환
    return netRoutes.length;
}