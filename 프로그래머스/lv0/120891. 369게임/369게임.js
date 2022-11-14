function solution(order) {
    // return [...order.toString()].filter(num => (/[369]/).test(num)).length;
    return [...order.toString().matchAll(/[369]/g)].length;
}

// Number(num) % 3 === 0 // 0도 포함됨.