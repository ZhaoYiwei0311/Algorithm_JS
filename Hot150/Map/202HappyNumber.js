/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let set = new Set();
    let a = n;
    while (true) {
        let sum = 0;
        while (a > 0) {
            sum += (a % 10) * (a % 10);
            a = Math.floor(a / 10);
        }
        if (sum === 1) {
            return true;
        }
        if (set.has(sum)) {
            return false;
        }
        set.add(sum);
        a = sum;
    }
};

let num = 2;
console.log(isHappy(num));