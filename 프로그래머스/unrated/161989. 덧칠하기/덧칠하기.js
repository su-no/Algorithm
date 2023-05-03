function solution(n, m, section) {
    const wall = Array(n + 1).fill(true);
    for (const s of section) {
        wall[s] = false;
    }
    
    let cnt = 0;
    for (let i=1; i<n+1; i++) {
        if (wall[i]) continue;
        for (let j=i; j<i+m; j++) {
            wall[j] = true;
        }
        cnt++;
    }
    
    return cnt;
}