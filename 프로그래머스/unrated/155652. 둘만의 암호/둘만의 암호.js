// // s 문자열을 순회하면서
// // skip 문자를 건너뛴 index만큼 뒤의 문자 아스키코드를 구하고
// // 배열에 추가한다.
// // 배열을 문자열로 변환한다.

// function solution(s, skip, index) {
//     // skip 문자의 아스키 코드
//     const skipAscii = [...skip].map((_, idx) => skip.charCodeAt(idx));
//     const result = [];
    
//     for (let i=0; i<s.length; i++) {
//         let ascii = s.charCodeAt(i);
//         let cnt = 0;
        
//         // index만큼 건너뛸 때까지 반복
//         while (cnt < index) {
//             ascii++;
//             // z를 넘어가면 a로 돌아간다.
//             if (ascii > 122) {
//                 ascii = 97;
//             }
//             // skip 문자열에 포함될 경우 무시
//             if (skipAscii.includes(ascii)) {
//                 continue;
//             }
//             // skip 문자열에 포함되지 않을 경우 index cnt 추가
//             cnt++;
//         }
        
//         result.push(ascii);
//     }
    
//     return String.fromCharCode(...result);
// }

function solution(s, skip, index) {
    const alphabets = [...'abcdefghijklmnopqrstuvwxyz'].filter(char => !skip.includes(char));
    
    return [...s].map(char => alphabets[(alphabets.indexOf(char) + index) % alphabets.length]).join('');
    
}