function solution(s) {
    const array = s.split(' ');
    
    // array에서 Z가 없어질 때까지
    while (array.includes('Z')) {
        // 첫번째 Z의 인덱스를 구한다.
        const idx = array.indexOf('Z');
        // 만약 Z 인덱스가 0이라면, Z 하나만 지움
        if (idx === 0) {
            array.shift();
            continue;
        }
        // Z 인덱스가 0이 아니면, 앞 원소와 Z 두개를 지움
        array.splice(idx-1, 2);
    }
    
    // 남은 원소들의 합을 리턴
    return array.reduce((sum, cur) => sum + Number(cur), 0);
}