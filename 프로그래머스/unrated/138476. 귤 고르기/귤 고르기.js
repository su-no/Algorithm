function solution(k, tangerine) {
    // 같은 종류의 귤 개수를 Map으로 반환! (시간복잡도 때문에 Map 사용해야 함.)
    const map = new Map();
    for (const element of tangerine) {
        if (map.has(element)) {
            map.set(element, map.get(element) + 1);
        } else {
            map.set(element, 1);
        }
    }
    
    // 귤 개수를 내림차순 정렬! (많은 것부터 빼야 최소 개수가 됨)
    const countArray = [...map.values()].sort((a, b) => b - a);
    
    // 귤 개수 많은 것부터 빼고, k개 되면 리턴
    let result = 0;
    for (const count of countArray) {
        result++;
        k -= count;
        if (k <= 0) {
            return result;
        }
    }
}