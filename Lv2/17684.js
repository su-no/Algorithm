function solution(msg) {
  const answer = [];

  const arr = Array(26).fill(0);
  for (let i = 0; i < 26; i++) {
    arr[i + 1] = String.fromCharCode(i + 65);
  }

  let idx = 0;
  let cnt = 1;
  let searchIdx = -1;
  while (true) {
    let w = msg.slice(idx, idx + cnt);
    if (arr.includes(w)) {
      // 이미 있을 때는, 인덱스 저장하고 카운트 늘려서 한번 더 찾기
      searchIdx = arr.indexOf(w);
      // 뒤에 찾을 글자가 없을 경우 검색인덱스 출력하고 종료
      if (idx + cnt > msg.length) {
        answer.push(searchIdx);
        break;
      }
      cnt++;
    } else {
      // 없을 때는, 이전 검색인덱스 출력하고, 새롭게 추가하고 인덱스 초기화
      answer.push(searchIdx);
      arr.push(w);
      idx += cnt - 1;
      cnt = 1;
    }
  }

  return answer;
}

console.log(solution('KAKAO'));
console.log(solution('TOBEORNOTTOBEORTOBEORNOT'));
console.log(solution('ABABABABABABABAB'));
