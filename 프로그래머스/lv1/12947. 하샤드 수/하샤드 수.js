function solution(x) {
    const sum = x.toString().split('').reduce((sum, cur) => sum + Number(cur), 0)
    return x % sum === 0 ? true : false;
}