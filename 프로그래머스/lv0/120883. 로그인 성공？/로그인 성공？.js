function solution(id_pw, db) {
    const [myId, myPw] = id_pw;
    for (let i=0; i<db.length; i++) {
        const data = db[i];
        const [id, pw] = [data[0], data[1]];
        if (id === myId) {
            return pw === myPw ? 'login' : 'wrong pw';
        }   
    };
    return 'fail';
}