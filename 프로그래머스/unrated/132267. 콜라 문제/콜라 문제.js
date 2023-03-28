function solution(a, b, n) {
    // n 처음 빈병 개수
    // 빈병 a개 주면 : 콜라 b개 받음
    
    let totalCnt = n;
    let toGiveCnt;
    let toGetCnt;
    
    let sum = 0; 
    
    while(true) {
        // 마트에 줄 수 있는 빈병의 최대 수
        toGiveCnt = parseInt(totalCnt/a) * a;
        if (toGiveCnt < 1) break;
        
        // 빈병을 주고 받을 수 있는 콜라 병 수
        toGetCnt = toGiveCnt * b / a;
        // 콜라를 다 마시고 남은 빈병의 수
        totalCnt = totalCnt - toGiveCnt + toGetCnt;
        
        // 마트에서 맡은 콜라 합
        sum += toGetCnt;
    }
    
    return sum;
}