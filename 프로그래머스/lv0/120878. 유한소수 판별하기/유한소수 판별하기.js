function solution(a, b) {
    let num = a;
    let denom = b;
    // a/b를 기약분수로 만들기
    for (let i=Math.min(a, b); i>1; i--) {
        if (a % i === 0 && b % i === 0) {
            num = a / i;
            denom = b / i;
            break;
        }
    }
    
    let prime = denom;
    while (true) {
        // 분모가 2, 5로 나누어 떨어지면 나누기
        if (prime % 2 === 0) {
            prime /= 2;
            continue;
        } else if (prime % 5 === 0) {
            prime /= 5;
            continue;
        }
        
        // 더이상 2, 5로 나누어 떨어지지 않을 때
        if (prime === 1) {
            // 분모가 1이면 모든 소인수가 2, 5라는 뜻 => 유한소수
            return 1;
        } else {
            // 분모가 1이 아니면 2, 5가 아닌 소인수가 있다는 뜻 => 무한소수
            return 2;
        }
    }
}

// 7/20 => 7/20
// 11/22 => 1/2
// 12/21 => 4/7