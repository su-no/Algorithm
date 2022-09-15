function solution(s) {
  const s_array = s.split(" ").map(n => {
    return parseInt(n, 10);
  });
  let max = s_array[0];
  let min = s_array[0];
  s_array.forEach(n => {
    if (n > max) max = n;
    if (n < min) min = n;
  });
  return [min, max].join(" ");
}

console.log(solution("1 2 3 4")); // "1 4"
console.log(solution("-1 -2 -3 -4")); // "-4 -1"
console.log(solution("-1 -1")); // "-1 -1"