function solution(n, words) {
    // 참여자 번호는 (idx % 3 + 1)
    // 차례는 parseInt(idx / 3) + 1
    // 탈락하는 경우 1) 단어 재사용 2) 이전 단어의 끝이랑 안맞음
    
    const usedWords = new Set();
    usedWords.add(words[0]);
    
    for (let i=1; i<words.length; i++) {
        const word = words[i];
        
        if (usedWords.has(word) || words[i-1].at(-1) !== word[0]) {
            const number = i % n + 1;
            const turn = parseInt(i / n) + 1;
            return [number, turn];
        }
        
        usedWords.add(word);
    }
    
    return [0, 0];
}