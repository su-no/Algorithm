function solution(array) {
    // 1. 빈도를 저장하기 위해 array 최대값+1 길이의 배열을 만들고 모든 원소를 0으로 초기화한다.
    const count = Array(Math.max(...array) + 1).fill(0);
    // 2. array를 돌아가면서 해당 인덱스를 1씩 증가시킨다.
    array.forEach(num => {
        count[num]++;
    })
    // 3. 최빈값을 구한다.
    const maxCount = Math.max(...count);
    // 4. 최빈값의 처음,끝 인덱스가 같을 경우 : 최빈값이 한 개 / 같지 않을 경우 : 최빈값이 여러개
    if (count.indexOf(maxCount) === count.lastIndexOf(maxCount)) {
        return count.indexOf(maxCount);
    } else {
        return -1;
    }
}