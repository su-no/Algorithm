function solution(balls, share) {
    return factorial(balls) / (factorial(share) * factorial(balls - share));
}

function factorial(number) {
    if (number < 2) {
        return BigInt(1);
    }
    return BigInt(number) * factorial(number - 1);
}

// 3 2 -> 3*2/2! => 3!/2!1!
// 5 3 -> 5*4*3/3! => 5!/2!3!

// BigInt
// 원시 number가 나타낼 수 있는 값 2^53 - 1
// BigInt(숫자) 또는 (숫자n) 리터럴로 나타낼 수 있음.