function solution(quiz) {
    const result = quiz.map(q => {
        let [num1, operator, num2, _, answer] = q.split(' ');
        num1 = Number(num1);
        num2 = Number(num2);
        answer = Number(answer);
        
        if (operator === '-' && num1 - num2 === answer) {
            return 'O'
        }
        if (operator === '+' && num1 + num2 === answer) {
            return 'O'
        }
        return 'X';
    })
    
    return result;
}