function solution(clothes) {
    const map = new Map();
    
    for (let i=0; i<clothes.length; i++) {
        const clothe = clothes[i];
        map.set(clothe[1], (map.get(clothe[1]) ?? 0) + 1);
    }
    
    let result = 1;
    for (let cnt of map.values()) {
        result *= (cnt + 1);
    }
    
    return result - 1;
}