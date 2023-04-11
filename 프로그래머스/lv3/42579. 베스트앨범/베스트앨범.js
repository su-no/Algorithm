function solution(genres, plays) {
    const playsByGenre = {};
    
    for (let i=0; i<genres.length; i++) {
        playsByGenre[genres[i]] = (playsByGenre[genres[i]] ?? 0) + plays[i];        
    }
    
    const dic = genres.map((genre, index) => ({index, genre, play: plays[index]}));
    
    dic.sort((a, b) => {
        if (a.genre !== b.genre) return playsByGenre[b.genre] - playsByGenre[a.genre];
        if (a.play !== b.play) return b.play - a.play;
        return a.index - b.index;
    })
    
    const tempDic = {};
    
    const result = dic.filter(song => {
        if (tempDic[song.genre] >= 2) return false;
        tempDic[song.genre] = (tempDic[song.genre] ?? 0) + 1;
        return true;
    }).map(song => song.index);

    return result;
}

// 1. 장르별 합계 구해서 상위 2개
// 2. genres, plays 정렬