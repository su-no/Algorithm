function solution(elements) {
  const MAX_LENGTH = elements.length
  const array = [...elements, ...elements.slice(0, MAX_LENGTH - 1)];
  
  const sums = new Set();
  for (let i=1; i<=MAX_LENGTH; i++) {
    for (let j=0; j<MAX_LENGTH; j++) {
      const newArray = array.slice(j, j+i);
      const sum = newArray.reduce((sum, cur) => sum + cur, 0);
      sums.add(sum);
    }
  }

  return sums.size;
}