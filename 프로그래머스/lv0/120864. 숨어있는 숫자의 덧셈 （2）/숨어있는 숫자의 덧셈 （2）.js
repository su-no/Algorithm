function solution(my_string) {
    const numbers = my_string.match(/\d+/g);
    return numbers ? numbers.reduce((sum, cur) => sum + Number(cur), 0) : 0;
}