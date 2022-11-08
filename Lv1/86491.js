function solution(sizes) {
  const sortedSizes = [];
  let w = 0;
  let h = 0;
  sizes.forEach((size, idx) => {
    if (size[0] > size[1]) {
      sortedSizes.push([size[0], size[1]]);
      if (size[0] > w) {
        w = size[0];
      }
      if (size[1] > h) {
        h = size[1];
      }
    } else {
      sortedSizes.push([size[1], size[0]]);
      if (size[1] > w) {
        w = size[1];
      }
      if (size[0] > h) {
        h = size[0];
      }
    }
  });
  console.log(sortedSizes);
  console.log(w, h);
  return w * h;
}

console.log(
  solution([
    [60, 50],
    [30, 70],
    [60, 30],
    [80, 40],
  ]),
); // 4000
console.log(
  solution([
    [10, 7],
    [12, 3],
    [8, 15],
    [14, 7],
    [5, 15],
  ]),
); // 120
console.log(
  solution([
    [14, 4],
    [19, 6],
    [6, 16],
    [18, 7],
    [7, 11],
  ]),
); // 133
