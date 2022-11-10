// 연습문제 > 할인행사
// discount 배열의 길이가 10~100,000 이라서 시간 효율이 좋지 않다.

function solution(want, number, discount) {
  let result = 0;

  // 원하는 제품 개수에 맞게 배열을 만들고 글자순으로 정렬한다.
  const toBuyItems = want
    .map((item, idx) => Array(number[idx]).fill(item))
    .flat()
    .sort();

  // 첫날부터 10일씩 구매 가능한 제품 배열을 만들고 글자순으로 정렬한다.
  // 원하는 제품 배열과 비교하고 같으면 result에 1을 더한다.
  for (let i = 0; i < discount.length - 9; i++) {
    const discountItems = discount.slice(i, i + 10).sort();
    if (discountItems.every((item, idx) => item === toBuyItems[idx])) {
      result += 1;
    }
  }

  return result;
}
