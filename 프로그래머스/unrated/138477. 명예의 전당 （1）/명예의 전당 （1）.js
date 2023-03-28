function solution(k, score) {
    const result = [];
    const top3 = [];

    for (let i=0; i<score.length; i++) {
        if (top3.length < k) {
            // k일까지는 명예의 전당에 다 올라감
            top3.push(score[i]);
        } else if (score[i] > top3.at(-1)) {
            // k일이 지나면 k번째 가수보다 점수가 높을 때 명예의 전당에 올라감
            top3.splice(-1, 1, score[i]);
        }
        
        // 내림차순 정렬
        top3.sort((a, b) => b - a);
        // 명예의 전당 최하위 점수를 추가
        result.push(top3.at(-1));
    }
    
    return result;
}