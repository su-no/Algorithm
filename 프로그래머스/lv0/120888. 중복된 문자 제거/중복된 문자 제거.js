function solution(my_string) {
    // return [...my_string].filter((char, idx, arr) => arr.indexOf(char) === idx).join('');
    return [...new Set(my_string)].join('');
}