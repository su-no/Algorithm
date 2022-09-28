function solution(operations) {
  const queue = [];

  operations.forEach(operation => {
    const command = operation.toString().split(" ")[0];
    const value = parseInt(operation.toString().split(" ")[1]);

    if (command === "I") {
      queue.push(value);

    } else if (command === "D") {
      if (queue.length < 1) {
        return;
      } else if (queue.length === 1) {
        queue.pop();

      } else {
        if (value === 1) {
          const indexMax = queue.indexOf(Math.max(...queue));
          queue.splice(indexMax, 1);

        } else if (value === -1) {
          const indexMin = queue.indexOf(Math.min(...queue));
          queue.splice(indexMin, 1);
        }
      }
    }
  });

  if (queue.length < 1) {
    return [0, 0];
  } else {
    return [Math.max(...queue), Math.min(...queue)];
  }
}

console.log(solution(["I 16", "I -5643", "D -1", "D 1", "D 1", "I 123", "D -1"])); // [0, 0]
console.log(solution([["I -45", "I 653", "D 1", "I -642", "I 45", "I 97", "D 1", "D -1", "I 333"]])); // [333, -45]
