function solution(sizes) {
    let maxW = 0;
    let maxH = 0;
    
    for (let i=0; i<sizes.length; i++) {
        const size = sizes[i];
        size.sort((a, b) => a - b);
        
        if (size[0] > maxW) {
            maxW = size[0];
        }
        if (size[1] > maxH) {
            maxH = size[1];
        }
    }
    
    return maxW * maxH;
}