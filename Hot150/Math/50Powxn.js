/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    // if n = 4, we have 100 and only at the third loop we need to update ans
    // To sum up, we convert n to binary and only when the bit position is 1 do we need to update ans by multiplying
    let ans = 1;
    if (n < 0) {
        n = -n;
        x = 1 / x;
    }
    while (n) { // from low to high to enumerate every bit
        if (n % 2) { // the bit is 1
            ans *= x;
        }
        x *= x;
        n = n>>1;
    }
    return ans;
};

let x = 2;
let n = 4;
console.log(myPow(x, n));