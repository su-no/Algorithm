function solution(id_list, report, k) {
    const reportSet = new Set(report);
    const reportMap = {};
    const mails = Array(id_list.length).fill(0);
    
    for (const r of reportSet) {
        const [from, id] = r.split(' ');
        
        if (reportMap[id]) {
            reportMap[id].value += 1;
            reportMap[id].from.push(from);
        } else {
            reportMap[id] = { value: 1, from: [from] };
        }
    }    
    
    Object.entries(reportMap).forEach(report => {
        if (report[1].value >= k) {
            report[1].from.forEach(id => {
                mails[id_list.indexOf(id)] += 1;
            });
        }
    });
    
    return mails;
}