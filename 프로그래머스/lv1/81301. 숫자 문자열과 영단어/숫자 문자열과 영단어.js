function solution(s) {
    const indexArr = [
        'zero',
        'one',
        'two',
        'three',
        'four',
        'five',
        'six',
        'seven',
        'eight',
        'nine',
    ];
    const result = s.replace(
        /zero|one|two|three|four|five|six|seven|eight|nine/g,
        (s) => indexArr.indexOf(s)
    );
    return Number(result);
}