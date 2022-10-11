function solution(fees, records) {
  const queue = {};
  const cumulativeTime = {};

  // 1. 누적 주차 시간을 구한다.
  records.forEach(record => {
    const [time, number, state] = record.split(' ');
    if (state === 'IN') {
      queue[number] = time;
    } else {
      const outTime = time;
      const inTime = queue[number];

      // 1) arrivalTime과 출차 시간을 빼서 몇분인지 계산한다.
      const netTime =
        parseInt(60 * outTime.split(':')[0]) +
        parseInt(outTime.split(':')[1]) -
        parseInt(60 * inTime.split(':')[0]) -
        parseInt(inTime.split(':')[1]);

      delete queue[number];

      // 2)
      // 두번째 들어온 경우
      if (number in cumulativeTime) cumulativeTime[number] += netTime;
      // 처음 들어온 경우
      else cumulativeTime[number] = netTime;
    }
  });

  console.log(cumulativeTime);
  console.log(queue);

  // 2. 출차하지 않은 차량에 대해 23:59까지의 요금을 부과한다.
  if (queue) {
    for (const number in queue) {
      const inTime = queue[number];
      const netTime = 23 * 60 + 59 - parseInt(60 * inTime.split(':')[0]) - parseInt(inTime.split(':')[1]);

      if (number in cumulativeTime) cumulativeTime[number] += netTime;
      else cumulativeTime[number] = netTime;
    }
  }
  console.log(cumulativeTime);

  // 3. 요금을 계산하고, 차량 번호가 작은 순서대로 배열에 담는다.
  const answer = [];
  Object.keys(cumulativeTime)
    .sort((a, b) => a - b)
    .forEach(number => {
      const time = cumulativeTime[number];
      // 기본 시간, 기본 요금, 단위 시간, 단위 요금
      if (time <= fees[0]) {
        answer.push(fees[1]);
      } else {
        answer.push(fees[1] + Math.ceil((time - fees[0]) / fees[2]) * fees[3]);
      }
    });
  return answer;
}

console.log(
  solution(
    [180, 5000, 10, 600],
    [
      '05:34 5961 IN',
      '06:00 0000 IN',
      '06:34 0000 OUT',
      '07:59 5961 OUT',
      '07:59 0148 IN',
      '18:59 0000 IN',
      '19:09 0148 OUT',
      '22:59 5961 IN',
      '23:00 5961 OUT',
    ],
    [14600, 34400, 5000],
  ),
);
// console.log(
//   solution(
//     [120, 0, 60, 591],
//     ['16:00 3961 IN', '16:00 0202 IN', '18:00 3961 OUT', '18:00 0202 OUT', '23:58 3961 IN'],
//     [0, 591],
//   ),
// );
// console.log(solution([1, 461, 1, 10], ['00:00 1234 IN'], [14841]));
