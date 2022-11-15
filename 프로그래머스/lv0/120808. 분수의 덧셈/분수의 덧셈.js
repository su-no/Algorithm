function solution(denum1, num1, denum2, num2) {
    const denum = denum1 * num2 + denum2 * num1;
    const num = num1 * num2;
    for (let i=num; i>1; i--) {
        if (denum % i === 0 && num % i === 0) {
            return [denum / i, num / i]; 
        }
    }
    return [denum, num];
}

// 1/2 + 3/4 = (1*4+2*3)/(2*4) = 10/8

// 기약분수로 만들려면 분자와 분모의 최대공약수로 나눠야 됨.
// 최댓값은 분모의 값.
// 최댓값부터 시작해서 분자, 분모 둘다 나눠지면 바로 기약분수 리턴
// 안 나눠지면 원래 계산했던 값 리턴