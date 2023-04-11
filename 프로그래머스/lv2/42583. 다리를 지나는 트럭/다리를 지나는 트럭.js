function solution(bridge_length, weight, truck_weights) {
    const onBridge = [];
    
    let totalWeight = 0;
    let time = 1;
    while (truck_weights.length > 0) {
        if (onBridge.length > 0 && onBridge[0].endTime <= time) {
            totalWeight -= onBridge[0].weight;
            onBridge.shift();
        }
        
        if (totalWeight + truck_weights[0] <= weight) {
            totalWeight += truck_weights[0];
            onBridge.push({weight: truck_weights.shift(), endTime: time + bridge_length});
        } else {
            time = onBridge[0].endTime;
            continue;
        }
        
        time++;
    }
    
    return onBridge.at(-1).endTime;
}