function solution(num, total) {
    const middle = Math.floor(total / num); // 가운데 수
    const spread = Math.floor(num / 2); // 가운데 수에서 양쪽까지의 거리
    const numbers = [];
    // 최소~최대 숫자 배열 만들기.
    for (let i=middle-spread; i<=middle+spread; i++) {
        numbers.push(i);
    }
    if (num % 2 !== 0) {
        // num이 홀수면 numbers 그대로 반환
        return numbers;
    } else {
        // num이 짝수면 첫번째 원소 제거하고 반환
        numbers.shift();
        return numbers;
    }
}