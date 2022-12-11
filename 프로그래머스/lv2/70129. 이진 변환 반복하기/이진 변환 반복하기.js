function solution(s) {
    let [cntConvert, cntZero] = [0, 0];
    let x = s;
    
    while (x !== '1') {
        cntConvert++;
        cntZero += x.match(/0/g)?.length ?? 0;
        x = x.replaceAll(/0/g, '').length.toString(2);
    }
    
    return [cntConvert, cntZero];
}