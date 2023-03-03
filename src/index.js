module.exports = function reverse(n) {
    let result = '';
    let i = 0;
    let stringNumber = String(Math.abs(n));
    while (i < stringNumber.length) {
        result = stringNumber[i] + result;
        i++;
    }
    return +result;
}
