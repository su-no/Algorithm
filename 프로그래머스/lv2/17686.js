function solution(files) {
  const arr = [];

  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const [head, number] = [file.split(/[0-9]+/)[0], file.match(/[0-9]+/)[0]];
    arr.push([file, head, number]);
  }
  // console.log(arr);

  arr.sort((a, b) => {
    const head1 = b[1].toLowerCase();
    const head2 = a[1].toLowerCase();
    const number1 = parseInt(a[2]);
    const number2 = parseInt(b[2]);
    if (head1 < head2) return 1;
    if (head1 > head2) return -1;
    if (number1 < number2) return -1;
    if (number1 > number2) return 1;
    return 0;
  });
  // console.log(arr);

  return arr.map(value => value[0]);
}

console.log(
  solution([
    'img12.png',
    'img10.png',
    'img02.png',
    'img1.png',
    'IMG01.GIF',
    'img2.JPG',
  ]),
);
console.log(
  solution([
    'F-5 Freedom Fighter',
    'B-50 Superfortress',
    'A-10 Thunderbolt II',
    'F-14 Tomcat',
  ]),
);
