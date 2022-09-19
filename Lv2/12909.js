function solution(s) {
  const queue = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === ')' && queue.at(-1) === '(') {
      queue.pop();
    } else {
      queue.push(s[i]);
    }
  }

  if (queue.length === 0) return true;
  else return false;
}

console.log(solution("()()")); // true
console.log(solution("(())()")); // true
console.log(solution(")()(")); // false
console.log(solution("(()()))")); // false