function solution(n, words) {
  const usedWords = [words[0]];
  let turn = 1;
  for (let i = 1; i < words.length; i++) {
    if (i % n === 0) turn++
    if (words[i - 1].slice(-1) !== words[i].slice(0, 1)
      || usedWords.includes(words[i])) {
      return [i % n + 1, turn];
    } else {
      usedWords.push(words[i]);
    }
  }
  return [0, 0];
}

console.log(solution(3, ["tank", "kick", "know", "wheel", "land", "dream", "mother", "robot", "tank"]));
console.log(solution(5, ["hello", "observe", "effect", "take", "either", "recognize", "encourage", "ensure", "establish", "hang", "gather", "refer", "reference", "estimate", "executive"]));
console.log(solution(2, ["hello", "one", "even", "never", "now", "world", "draw"]));