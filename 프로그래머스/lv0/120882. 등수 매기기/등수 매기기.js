function solution(score) {
    // 1. 평균 점수 배열 만들기
    const averageScore = score.map(arr => (arr[0] + arr[1]) / 2);
    // 2. 평균 점수를 내림차순으로 정렬
    const rank = [...averageScore].sort((a, b) => b - a);
    // 3. 인덱스+1(랭크) 를 배열로 반환
    return averageScore.map(avg => rank.indexOf(avg) + 1);
}