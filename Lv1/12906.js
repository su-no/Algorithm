function solution(arr)
{
  return arr.filter((value, index) => value !== arr[index+1])
}

console.log(solution([1,1,3,3,0,1,1]))
console.log(solution([4,4,4,3,3]))
console.log(solution([1,1,4,6,3,2,2,3,1,1,1,1,4,4,2,2]))