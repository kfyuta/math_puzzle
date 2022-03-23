/**
 * 少なくとも一つの半角英数字を含むパスワードを生成する
 * @param {number} length パスワード長
 * @returns {string}
 */
function genPass(length=8) {
    const range = (start, stop, step) => Array.from({length: (stop - start) / step + 1}, (_, i) => start + (i * step));
    const shuffle = arr => {
        for (let i = arr.length - 1; i > 0; i--) {
            r = Math.floor(Math.random() * (i + 1))
            tmp = arr[i]
            arr[i] = arr[r]
            arr[r] = tmp
        }
        return arr;
    }
    const choiceOne = arr => arr[Math.floor(Math.random()*(arr.length))]

    const numbers = range(48, 57, 1);
    const largeChars = range(65, 90, 1);
    const smallChars = range(97, 122, 1);

    must = [choiceOne(numbers), choiceOne(largeChars), choiceOne(smallChars)]

    password = shuffle(numbers.concat(largeChars).concat(smallChars)).slice(0, length - 3).concat(must);
    password = shuffle(password)

    return String.fromCharCode(...password);

}