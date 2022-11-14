function solution(cacheSize, cities) {
  // 캐시 사이즈가 0이면, 모두 cache miss.
  if (cacheSize === 0) return cities.length * 5;

  // 대소문자 구분 없이 처리하기 위해, 모두 대문자로 바꾼다.
  const citiesUpperCase = cities.map(city => {
    return city.toUpperCase();
  });
  let time = 0;
  const queue = [];

  for (let i = 0; i < citiesUpperCase.length; i++) {
    const searchCity = citiesUpperCase[i];
    const searchIndex = queue.indexOf(searchCity);

    // cache miss
    if (searchIndex === -1) {
      if (queue.length >= cacheSize) {
        queue.shift();
      }
      queue.push(citiesUpperCase[i]);
      time += 5;
    } else {
      // cache hit
      if (searchIndex !== cacheSize - 1) {
        queue.splice(searchIndex, 1);
        queue.push(searchCity);
      }
      time += 1;
    }
  }

  return time;
}

console.log(
  solution(3, [
    'Jeju',
    'Pangyo',
    'Seoul',
    'NewYork',
    'LA',
    'Jeju',
    'Pangyo',
    'Seoul',
    'NewYork',
    'LA',
  ]),
); // 50
console.log(
  solution(3, [
    'Jeju',
    'Pangyo',
    'Seoul',
    'Jeju',
    'Pangyo',
    'Seoul',
    'Jeju',
    'Pangyo',
    'Seoul',
  ]),
); // 21
console.log(solution(2, ['a', 'a', 'a', 'b', 'b', 'b', 'c', 'c', 'c'])); // 21
