function solution(brown, yellow) {
    // 너비 w, 높이 h일 때
    // 갈색 타일의 수는 wh - (w-2) * (h-2) = 2w + 2h - 4
    // 노란색 타일의 수는 (w-2) * (h-2) = wh - 2w - 2h + 4
    
    for (let i=1; i<=yellow; i++) {
        if (yellow % i !== 0) continue;
        
        let w = i + 2;
        let h = (yellow / i) + 2;
        
        if (w < h) continue;
        
        if (2*w + 2*h - 4 === brown) {
            return [w, h];
        }
    }
}