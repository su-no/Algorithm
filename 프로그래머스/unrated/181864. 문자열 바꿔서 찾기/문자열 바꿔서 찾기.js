function solution(myString, pat) {
    const replacedString = myString
                            .replaceAll('B', 'T')
                            .replaceAll('A', 'B')
                            .replaceAll('T', 'A');
    
    return replacedString.includes(pat) ? 1 : 0;
}