function solution(babbling) {
    let result = 0;
    for (const word of babbling) {
        // 연속된 발음이 있으면 못함
        if (/ayaaya|yeye|woowoo|mama/.test(word)) {
            continue;
        }
        // 네가지 발음으로 조합 가능하면 가능
        if (word.replaceAll(/aya|ye|woo|ma/g, '') === '') {
            result++;
        }
    }
    return result;
}