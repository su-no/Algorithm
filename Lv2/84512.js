/*
 * 1. 만들 수 있는 모든 단어를 배열에 추가한다.
 * A -> AA AE AI AO AU
 * E -> EA EE EI EO EU
 * EA -> EAA EAE EAI EAO EAU 이렇게 재귀적으로 쭉쭉쭉 추가하기.
 *
 * 2. 찾는 단어의 인덱스+1을 반환한다.
 */

function solution(word) {
  const vowels = ['A', 'E', 'I', 'O', 'U'];
  const words = [];

  function makeWord(ongoingWord) {
    if (ongoingWord.length === 5) {
      return;
    }

    for (let i = 0; i < 5; i++) {
      const currentWord = ongoingWord + vowels[i];
      words.push(currentWord);
      makeWord(currentWord);
    }
  }
  makeWord('');

  return words.indexOf(word) + 1;
}

console.log(solution('AAAAE')); // 6
console.log(solution('AAAE')); // 10
console.log(solution('I')); // 1563
console.log(solution('EIO')); // 1189
