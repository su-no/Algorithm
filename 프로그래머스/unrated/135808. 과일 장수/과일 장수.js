function solution(k, m, score) {
    // 내림차순 정렬 후 m개씩 상자에 담는다
    
    let sum = 0;
    
    score.sort((a, b) => b - a)
    
    for (let i=0; i<parseInt(score.length/m); i++) {
        const box = score.slice(i*m, i*m+m)
        const cost = box.at(-1) * m;
        sum += cost;
    }
    
    return sum;
}