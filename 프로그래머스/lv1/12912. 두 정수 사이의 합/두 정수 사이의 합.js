function solution(a, b) {
    // a와 b가 같은 경우 리턴
    if (a === b) {
        return a;
    }
    
    // min, max 값 설정
    const [min, max] = [Math.min(a, b), Math.max(a, b)];

    
    if ((min - max + 1) % 2 === 0) {
        return ((min + max) * (max - min + 1)) / 2;
    } else {
        return (min + max) * (max - min) / 2 + (min + max) / 2;
    }
}

// 짝수
// 4부터 9까지 합
// 4 5 6 7 8 9
// 13 * 3
// (a + b) * (a + 1 - b) / 2

// 홀수 (a - b + 1) % 2 !== 0
// 4부터 10까지 합
// 4 5 6 7 8 9 10
// 14 * 3 + 7
// (a + b) * (b - a) / 2 + (a + b) / 2

