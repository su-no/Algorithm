function solution(name, yearning, photo) {
  const yearningByName = new Map();
  for (let i = 0; i < name.length; i++) {
    yearningByName.set(name[i], yearning[i]);
  }

  const answer = photo.map((p) => {
    return p.reduce((sum, name) => {
      return sum + (yearningByName.get(name) ?? 0);
    }, 0);
  });

  return answer;
}