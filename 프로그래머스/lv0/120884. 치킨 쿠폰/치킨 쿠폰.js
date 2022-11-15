function solution(chicken) {
    let totalCoupons = chicken;
    let service = 0;
    while (totalCoupons >= 10) {
        const toOrder = Math.floor(totalCoupons / 10);
        const leftCoupons = totalCoupons % 10;
        service += toOrder;
        totalCoupons = toOrder + leftCoupons;
    }
    return service;
}

// totalCoupons toOrder leftCoupons
// 1081         108     1
// 109          10      9
// 19           1       9
// 10           1       0