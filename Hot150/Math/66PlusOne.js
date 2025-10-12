/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    // from right to left find the first not 9
    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] < 9) {
            digits[i] += 1;
            return digits;
        }
        // otherwise it will be 0
        digits[i] = 0;
    }

    // if not yet returned, then all digits must be 9
    digits.push(0);
    digits[0] = 1;
    return digits;
};

const digits = [9];
console.log(plusOne(digits));