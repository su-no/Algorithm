function solution(answers) {
    let score = [0, 0, 0];
    
    const answer1 = [1, 2, 3, 4, 5];
    const answer2 = [2, 1, 2, 3, 2, 4, 2, 5];
    const answer3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    
    for (let i=0; i<answers.length; i++) {
        const answer = answers[i];    
        if (answer === answer1[i % 5]) score[0]++;
        if (answer === answer2[i % 8]) score[1]++;
        if (answer === answer3[i % 10]) score[2]++;
    }
    
    const maxScore = Math.max(...score);
    const result = [];
    for (let i=0; i<score.length; i++) {
        if (score[i] === maxScore) {
            result.push(i+1);
        }
    }
    
    return result;
}