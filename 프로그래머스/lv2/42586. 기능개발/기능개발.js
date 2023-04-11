function solution(progresses, speeds) {
    const answer = [];
    
    while (progresses.length > 0) {
        for (let i=0; i<progresses.length; i++) {
            progresses[i] += speeds[i];
        }
        
        let deployCount = 0;
        while (progresses[0] >= 100) {
            progresses.shift();
            speeds.shift();
            deployCount++;
        }
        
        if (deployCount > 0) {
            answer.push(deployCount);
        }
    }
    
    return answer;
    
}