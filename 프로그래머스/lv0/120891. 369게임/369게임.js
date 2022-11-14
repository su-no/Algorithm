function solution(order) {
    // return [...order.toString()].filter(num => (/[369]/).test(num)).length;
    // 문자열이 각각 369에 포함되는지 확인 -> 결과 배열 길이 반환
    
    return [...order.toString().matchAll(/[369]/g)].length;
    // 문자열 전체에서 369에 포함되는 글자만 배열 생성 -> 길이 반환
}

// Number(num) % 3 === 0 // 0도 포함됨.