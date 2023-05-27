function solution(number) {
    const sum = [...number].reduce((sum, num) => sum + Number(num), 0);
    console.log(sum)
    return sum % 9;
}