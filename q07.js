function q07() {
    start = 19641010
    end = 20200724

    for (let i = start; i <= end; i++) {
        // 妥当な日付か判定
        if (isNaN(Date.parse(format(i)))) {
            continue;
        }
        // 2進数に変換
        bin = i.toString(2);
        // 2進数を逆順に並べる
        reverseBin = reverse(bin)
        // 10進数に戻す
        dec = parseInt(reverseBin, 2);
        if (i === dec) console.log(i);
    }

}

function format(num) {
    str = num.toString();
    y = str.substring(0, 4);
    m = str.substring(4, 6);
    d = str.substring(6, 8);
    return `${y}-${m}-${d}`;
}

function reverse(str) {
    arr = [];
    for (let i = str.length - 1; i >= 0; i--) {
        arr.push(str[i])
    }
    return arr.join("");
}

q07();