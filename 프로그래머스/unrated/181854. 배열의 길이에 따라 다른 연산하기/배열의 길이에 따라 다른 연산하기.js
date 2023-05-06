function solution(arr, n) {
    const isLengthEven = arr.length % 2 === 0;
    
    return arr.map((num, idx) => {
        if ((idx % 2 === 0) !== isLengthEven) {
            return num + n;
        } else {
            return num;
        }
    })
}