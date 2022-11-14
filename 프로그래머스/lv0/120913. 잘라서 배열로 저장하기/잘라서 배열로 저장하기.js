function solution(my_str, n) {
    // const result = [];
    // const lengthOfArray = parseInt((my_str.length - 1) / n) + 1;
    // for (let i=0; i<lengthOfArray; i++){
    //     result.push(my_str.slice(n*i, n*(i+1)));
    // }
    // return result;
    const result = [];
    for (let i=0; i<my_str.length; i+=n) {
        result.push(my_str.slice(i, i+n));
    }
    return result;
}