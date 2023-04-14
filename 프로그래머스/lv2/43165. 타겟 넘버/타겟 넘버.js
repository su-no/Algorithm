function solution(numbers, target) {
    function getAnswer(digit, value) {
        if (digit < numbers.length) {
            getAnswer(digit + 1, value + numbers[digit]);
            getAnswer(digit + 1, value - numbers[digit]);
        } else {
            if (value === target) {
                answer++;
            }
        }
    }
    
    let answer = 0;
    getAnswer(0, 0);
    
    return answer;
}