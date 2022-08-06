function solution(lottos, win_nums) {
  const rank = [6, 6, 5, 4, 3, 2, 1];

  let matchingNumberCount = 0;
  let zeroCount = 0;

  lottos.forEach(num => {
    if (win_nums.includes(num)) matchingNumberCount += 1;
    if (num === 0) zeroCount += 1;
  })

  const highestRank = rank[matchingNumberCount + zeroCount];
  const lowestRank = rank[matchingNumberCount];

  const answer = [highestRank, lowestRank];
  return answer;
}