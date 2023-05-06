function solution(myString, pat) {
    const replacedString = [...myString].map(char => {
        return char === 'A' ? 'B': 'A';
    }).join('');

    return replacedString.includes(pat) ? 1 : 0;
}