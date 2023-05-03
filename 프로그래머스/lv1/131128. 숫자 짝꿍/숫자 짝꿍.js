function solution(X, Y) {
    const arrayX = Array(10).fill(0);
    const arrayY = Array(10).fill(0);
    
    X.split('').forEach(num => arrayX[num] += 1);
    Y.split('').forEach(num => arrayY[num] += 1);
    
    const common = arrayX.map((num, idx) => {
        if (num <= arrayY[idx]) {
            return num;
        } else {
            return arrayY[idx];
        }
    })
    
    // 짝꿍이 존재하지 않는 경우
    if (common.every(num => num === 0)) {
        return '-1';
    }
    
    // 짝꿍이 0으로만 구성되어 있는 경우
    if (common[0] !== 0 
        && common.slice(1).join('') === '0'.repeat(9)) {
        return '0';
    }
    
    const commonNums = [];
    for (let i=0; i<common.length; i++) {
        for (let j=0; j<common[i]; j++) {
            commonNums.push(i)
        }
    }
    
    return commonNums.sort((a, b) => b - a).join('');
}