function solution(s) {
    // const numbers = s.split(/\d+ Z /g).join('');
    // return numbers.split(' ').reduce((sum, cur) => sum + Number(cur), 0);
    
    const array = s.split(' ');
    
    while (array.includes('Z')) {
        const idx = array.indexOf('Z');
        if (idx === 0) {
            array.shift();
            continue;
        }
        array.splice(idx-1, 2);
    }
    
    return array.reduce((sum, cur) => sum + Number(cur), 0);
}