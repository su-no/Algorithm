function solution(bridge_length, weight, truck_weights) {
    // 다리를 지나고 있는 트럭
    const queue = [];
    
    // 다리 위 트럭의 무게
    let totalWeight = 0;
    // 시간
    let time = 1;
    
    // 대기 트럭이 존재할 때까지 반복
    while (truck_weights.length > 0) {
        // 다리 위에 트럭이 있고 첫번째 트럭이 나갈 시간이면, queue에서 제거하고 무게 제거
        if (queue.length > 0 && queue[0].endTime <= time) {
            totalWeight -= queue[0].weight;
            queue.shift();
        }
        
        // 트럭이 올라와도 되는 무게면 무게를 더해주고, queue에 추가 (무게와 나가는 시간)
        if (totalWeight + truck_weights[0] <= weight) {
            totalWeight += truck_weights[0];
            queue.push({weight: truck_weights.shift(), endTime: time + bridge_length});
        } else {
            // 올라오지 못하는 무게이면 time 점프
            time = queue[0].endTime;
            continue;
        }
        
        time++;
    }
    
    // 대기 트럭이 없으면 종료 시간은 맨 마지막 트럭이 나가는 시간
    return queue.at(-1).endTime;
}