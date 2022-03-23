function q06(limit) {
    let cnt = 0;

    for (let i = 2; i <= limit; i +=2) {
        let s = i;
        let sflag = true;

        for (;;) {
            if (sflag) {
                s = s*3 +1
                sflag = false;
            } else {
                if (s % 2 === 0) {
                    s = s / 2;
                } else {
                    s = s*3 +1
                }
            } 
            if (s === i) {
                cnt += 1
                break;
            } else if (s === 1) {
                break
            }
        }
    }
    return cnt;
}



console.log(q06(10000));
