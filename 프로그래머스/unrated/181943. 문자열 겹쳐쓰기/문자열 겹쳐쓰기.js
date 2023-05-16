function solution(my_string, overwrite_string, s) {
    const length = overwrite_string.length;
    
    let str = my_string.slice(0, s)
                + overwrite_string 
                + my_string.slice(s + length);
    return str;
}