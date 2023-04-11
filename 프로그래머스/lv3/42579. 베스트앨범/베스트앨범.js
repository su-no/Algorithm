function solution(genres, plays) {
    // 1. 장르별 총 재생 횟수를 담는 객체를 생성한다.
    const playsByGenre = {};
    
    for (let i=0; i<genres.length; i++) {
        playsByGenre[genres[i]] = (playsByGenre[genres[i]] ?? 0) + plays[i];        
    }
    
    // 2. 곡 정보를 객체로 담고 있는 배열을 생성한다.
    const dic = genres.map((genre, index) => ({index, genre, play: plays[index]}));
    
    // 3. 2번의 배열을 장르, 재생 횟수, index 순으로 정렬한다.
    dic.sort((a, b) => {
        if (a.genre !== b.genre) return playsByGenre[b.genre] - playsByGenre[a.genre];
        if (a.play !== b.play) return b.play - a.play;
        return a.index - b.index;
    })
    
    const tempDic = {};
    
    // 4. 같은 장르에서 2개까지 필터링해서 인덱스를 반환한다.
    const result = dic.filter(song => {
        if (tempDic[song.genre] >= 2) return false;
        tempDic[song.genre] = (tempDic[song.genre] ?? 0) + 1;
        return true;
    }).map(song => song.index);

    return result;
}