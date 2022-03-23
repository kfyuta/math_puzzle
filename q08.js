let n = 12;
/**
 * 
 * @param {array} log 
 * @returns 
 */
function move(log) {
    if (log.length === n + 1) {
        return 1;
    }
    let cnt = 0;

    const dir = [[0, 1], [0, -1], [1, 0], [-1, 0]];

    for (let d of dir) {
        new_log = log.slice()
        const last = new_log.length - 1
        next_pos = [new_log[last][0] + d[0], new_log[last][1] + d[1]]
        if (canMove(new_log, next_pos)) {
            new_log.push(next_pos)
            cnt += move(new_log)
        }
    }
    return cnt;
}

function canMove(log, pos) {
    for (let l of log) {
        if (l[0] === pos[0] && l[1] === pos[1]) {
            return false;
        }
    }
    return true;
}

console.log(move([[0,0]]));