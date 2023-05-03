function solution(n, m, section) {
    const painted = Array(n + 1).fill(true);
    for (const s of section) {
        painted[s] = false;
    }
    
    let cnt = 0;
    for (let i=1; i<n+1; i++) {
        if (painted[i]) continue;
        for (let j=i; j<i+m; j++) {
            painted[j] = true;
        }
        cnt++;
    }
    
    return cnt;
}