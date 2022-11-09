// 1. eval() 함수 사용
// Airbnb Style Guide Says
// Never use eval() on a string, it opens too many vulnerabilities.

// function solution(quiz) {
//   const answer = quiz.map(exp => {
//     const newExp = exp.replace('=', '===');
//     const result = eval(newExp);
//     return result ? 'O' : 'X';
//   });
//   return answer;
// }

function solution(quiz) {
  return quiz.map(exp => {
    const splitExp = exp.split(' ');
    const calculated =
      splitExp[1] === '-'
        ? Number(splitExp[0]) - Number(splitExp[2])
        : Number(splitExp[0]) + Number(splitExp[2]);
    return calculated === Number(splitExp[4]) ? 'O' : 'X';
  });
}

console.log(solution(['3 - 4 = -3', '5 + 6 = 11'])); // ["X", "O"]
console.log(solution(['19 - 6 = 13', '5 + 66 = 71', '5 - 15 = 63', '3 - 1 = 2'])); // ["O", "O", "X", "O"]
