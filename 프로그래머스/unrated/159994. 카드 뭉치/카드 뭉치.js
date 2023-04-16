function solution(cards1, cards2, goal) {
    // cards1부터 첫번째 원소 확인
    // 맞으면 cards1, goal에서 shift하고 다음 요소 확인
    // 틀리면 cards로 이동
    
    let isCards1 = true;
    let switchingCount = 0;
    
    while (goal.length > 0 && switchingCount < 2) {
        let cards = isCards1 ? cards1 : cards2;
        if (cards[0] === goal[0]) {
            cards.shift();
            goal.shift();
            switchingCount = 0;
            continue;
        } else {
            isCards1 = !isCards1;
            switchingCount++;
            continue;
        }
    }
    
    return goal.length === 0 ? 'Yes' : 'No';
}