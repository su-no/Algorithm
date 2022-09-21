function solution(n, words) {
  const usedWords = [];
  for (let i = 0; i < words.length; i++) {
    // 1) 이미 말한 단어
    // 2) 끝말잇기 성립 안함
    console.log(words.slice(-1))
    //         else if (usedWords.includes(words[i])) {
    //             usedWords.push(words[i]);
    //         } else {

    //         }
  }
  console.log(usedWords);

  return;
}

console.log(solution(3, ["tank", "kick", "know", "wheel", "land", "dream", "mother", "robot", "tank"]));
console.log(solution(5, ["hello", "observe", "effect", "take", "either", "recognize", "encourage", "ensure", "establish", "hang", "gather", "refer", "reference", "estimate", "executive"]));
console.log(solution(2, ["hello", "one", "even", "never", "now", "world", "draw"]));