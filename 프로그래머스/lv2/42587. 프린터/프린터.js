function solution(priorities, location) {
    // 1. 우선순위와 인덱스 객체를 담고 있는 배열 생성
    const dic = priorities.map((priority, index) => ({index, priority}));
    
    let order = 1;

    while (priorities.length > 0) {
        // 2. 첫번째 프린트가 우선순위 최대값일 때
        if (dic[0].priority === Math.max(...priorities)) {
            // 2-1. 내가 요청한 문서면 순서를 반환
            if (dic[0].index === location) {
                return order;
            }
            
            // 2-2. 대기열에서 제거
            dic.shift();
            priorities.shift();
            
            order++;
        } else {
            // 3. 우선순위 최대값이 아니면 배열 맨 뒤로 이동
            dic.push(dic.shift());
            priorities.push(priorities.shift());
        }
    }
    
    return order;
}