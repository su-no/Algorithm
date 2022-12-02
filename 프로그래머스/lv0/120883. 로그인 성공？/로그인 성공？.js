function solution(id_pw, db) {
    const [id, pw] = id_pw;
    for (const user of db) {
        if (user[0] === id) {
            return user[1] === pw ? 'login' : 'wrong pw';
        }
    }
    return 'fail';
}