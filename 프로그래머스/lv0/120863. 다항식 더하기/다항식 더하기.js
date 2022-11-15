function solution(polynomial) {
    // + 연산자를 제외한 변수, 숫자 배열 생성
    const array = polynomial.split(' + ');
    
    // 숫자와 변수의 합을 각각 구하기
    let sumOfNumbers = 0;
    let sumOfVariables = 0;
    array.forEach(value => {
        if (Number(value)) {
            sumOfNumbers += Number(value);
        } else if (value === 'x') {
            sumOfVariables += 1;
        } else {
            sumOfVariables += Number(value.split('x')[0]);
        }
    })
    
    // 변수가 1x면 x로 표시
    if (sumOfVariables === 1) {
        sumOfVariables = 'x';
    } else {
        sumOfVariables = `${sumOfVariables}x`;
    }
    
    // 숫자가 없으면 변수만 반환, 변수가 없으면 숫자만 반환
    if (sumOfNumbers === 0) {
        return `${sumOfVariables}`;
    } else if (sumOfVariables === '0x') {
        return `${sumOfNumbers}`;
    } else {
        return `${sumOfVariables} + ${sumOfNumbers}`;
    }
}