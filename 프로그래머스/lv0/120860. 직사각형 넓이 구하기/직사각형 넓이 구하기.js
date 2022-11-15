function solution(dots) {
    const [x1, y1] = dots[0];
    let lengthX;
    let lengthY;
    dots.forEach(dot => {
        const [x2, y2] = dot;
        if (x1 !== x2) {
            lengthX = Math.abs(x1 - x2);
        }
        if (y1 !== y2) {
            lengthY = Math.abs(y1 - y2);
        }
    })
    return lengthX * lengthY;
}

// 직사각형은 x 값 두개, y 값 두개가 나온다.
// 초기 x1, y1 값을 정하고 배열을 돌면서
// x1, y1과 다른 값을 찾는다.
// 그 값에서 x1, y1을 뺀 게 길이이다.