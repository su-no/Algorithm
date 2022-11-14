function solution(my_string) {
    const numbers = my_string.match(/\d+/g);
    console.log(numbers);
    return numbers ? numbers.reduce((sum, cur) => sum + Number(cur), 0) : 0;
}

// 1. my_string에서 자연수를 찾아 배열로 반환한다. -> 연속된 숫자는 하나의 숫자로 간주한다. (/\d+/)
// 2. 찾은 배열이 null일 경우 (자연수가 존재하지 않으면) 0을 반환
// 3. 배열이 null이 아닐 경우 (자연수가 존재하면), 합계를 반환