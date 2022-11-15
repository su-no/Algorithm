function solution(n) {
    let numOf3x = 0;
    let count = 0;
    while (count < n) {
        if (/3/.test(numOf3x) || numOf3x % 3 === 0) {
            numOf3x++;
            continue;
        }
        numOf3x++;
        count++;
        console.log(count, numOf3x);
    }
    return numOf3x - 1;
}

// 1 2
// 2 3
// 3 5
// 4 6
// 5 8
// 6 9
// 7 11
// 8 12
// 9 15
// 10 17
// 11 18
// 12 20
// 13 21
// 14 23
// 15 26