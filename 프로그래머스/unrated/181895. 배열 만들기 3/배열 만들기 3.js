function solution(arr, intervals) {
    return intervals.reduce((acc, interval) => {
        const [a, b] = interval;
        return [...acc, ...arr.slice(a, b + 1)];
    }, []);
}