function solution(cacheSize, cities) {
  // 캐시 사이즈가 0이면, 모두 cache miss.
  if (cacheSize === 0) return cities.length * 5;

  let time = 0;
  const queue = [];
  const citiesUpperCase = cities.map((city) => {
    return city.toUpperCase();
  });

  for (let i = 0; i < citiesUpperCase.length; i++) {
    const searchCity = citiesUpperCase[i];
    const searchIndex = queue.indexOf(searchCity);

    if (searchIndex === -1) {
      if (queue.length >= cacheSize) {
        queue.shift();
      }
      queue.push(citiesUpperCase[i]);
      time += 5;
    } else {
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
    "Jeju",
    "Pangyo",
    "Seoul",
    "NewYork",
    "LA",
    "Jeju",
    "Pangyo",
    "Seoul",
    "NewYork",
    "LA",
  ])
); // 50
console.log(
  solution(3, [
    "Jeju",
    "Pangyo",
    "Seoul",
    "Jeju",
    "Pangyo",
    "Seoul",
    "Jeju",
    "Pangyo",
    "Seoul",
  ])
); // 21
console.log(solution(2, ["a", "a", "a", "b", "b", "b", "c", "c", "c"])); // 21
