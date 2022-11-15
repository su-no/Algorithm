function solution(spell, dic) {
    const word = spell.sort().join('');
    return (dic.some(w => [...w].sort().join('') === word)) ? 1 : 2;
}

// spell을 오름차순 정렬해서 단어로 만들기.
// dic의 모든 단어들도 오름차순 정렬하기

// 알파벳을 모두 한번씩만 사용해야 하기 때문에 word는 dic 단어랑 같아야 한다.

// dic에 만족하는 게 하나라도 있으면 (some) 1 반환, 없으면 2 반환