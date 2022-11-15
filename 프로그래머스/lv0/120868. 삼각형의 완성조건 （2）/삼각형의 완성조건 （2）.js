function solution(sides) {
    // 주어진 두 변 중 하나가 최대 길이일 때
    // 나머지 한 변은 두 변의 차보다 최소 1은 커야 함.
    const minLength = Math.abs(sides[0] - sides[1]) + 1;
    // 나머지 한 변의 길이가 최대 길이일 때
    // 최대 길이는 나머지 두 변의 합보다 1 작음.
    const maxLength = sides[0] + sides[1] - 1;
    // 최소~최대 사이의 개수를 리턴
    return maxLength - minLength + 1;
}