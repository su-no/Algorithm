function solution(id_list, report, k) {
    const reportSet = new Set(report);
    const count = new Map();
    const suspendedUsers = [];
    const mails = Array(id_list.length).fill(0);
    
    for (const r of reportSet) {
        const [from, id] = r.split(' ');
        count.set(id, (count.get(id) ?? 0) + 1);
    }    
    
    for (const [id, cnt] of count) {
        if (cnt >= k) {
            suspendedUsers.push(id);
        }
    }
    
    for (const r of reportSet) {
        const [from, id] = r.split(' ');
        if (suspendedUsers.includes(id)) {
            mails[id_list.indexOf(from)] += 1;
        }
    } 
    
    return mails;
}