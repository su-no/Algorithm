function solution(food) {
    // 왼쪽선수 먹을 음식 먼저 구하고, 0 더하고 뒤집은 문자열 추가하기
    
    // 왼쪽선수: food 배열 1부터 끝까지 돌아가면서, 인덱스 * 2로 나눈 몫 만큼 문자열 더하기
    let leftFood = '';
    for (let index=1; index<food.length; index++) {
        // food 먹을 개수가 0이면 (<2 이면) 추가 안하고 버리기
        if (food[index] < 2) {
            continue;
        }
        const numOfFood = Math.floor(food[index] / 2);
        leftFood += index.toString().repeat(numOfFood);
    }
    // 왼쪽 + 물(0) + 오른쪽(왼쪽 뒤집은 문자열)
    const result = leftFood + '0' + [...leftFood].reverse().join('');
    
    return result;
}