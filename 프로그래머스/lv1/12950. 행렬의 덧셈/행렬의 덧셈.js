function solution(arr1, arr2) {
    const rowLength = arr1.length;
    const columnLength = arr1[0].length;
    
    const result = [];
    for (let i=0; i<rowLength; i++) {
        const row = [];
        for (let j=0; j<columnLength; j++) {
            row.push(arr1[i][j] + arr2[i][j]);
        }
        result.push(row);
    }
    
    return result;
}