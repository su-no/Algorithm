function solution(people, limit) {
  // 조건: 최대 2명씩, 몸무게 합계 limit 이하만 탈 수 있다.
  // 방법: 내림차순으로 정렬하여, 최대몸무게 + 최소몸무게 순으로 보트에 태운다.

  let boat = 0;
  let i = 0;
  people.sort((a, b) => { return b - a; })
  while (i < people.length) {
    if (people[i] + people.at(-1) <= limit) {
      people.pop();
    }
    boat++;
    i++;
  }
  return boat;
}

console.log(solution([70, 50, 80, 50], 100)); // 3
console.log(solution([70, 80, 50], 100)); // 3
console.log(solution([70, 80, 20, 20, 50, 60, 40], 100)); // 4