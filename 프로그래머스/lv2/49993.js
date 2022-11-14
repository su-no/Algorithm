// Summer/Winter Coding(~2018)
// 스킬트리

function solution(skill, skill_trees) {
  let answer = 0;
  for (let i = 0; i < skill_trees.length; i++) {
    let possibleTree = '';
    const skillTree = skill_trees[i];
    for (let j = 0; j < skillTree.length; j++) {
      if (skill.includes(skillTree[j])) {
        possibleTree += skillTree[j];
      }
    }
    if (skill.startsWith(possibleTree)) {
      answer++;
    }
  }
  return answer;
}

// 1. skill_trees 배열을 순회하면서, skill을 포함하는 possibleTree를 구한다.
// 2. 반드시 skill 순서대로 배워야 하므로, skill이 possibleTree로 시작하는지 확인한다.
// 3. 만족하는 스킬트리의 수를 반환한다.
