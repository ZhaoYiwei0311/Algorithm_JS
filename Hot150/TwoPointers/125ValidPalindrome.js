/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {

    let left = 0;
    let right = s.length - 1;
    while (left <= right) {
        if (!/[a-zA-Z0-9]/.test(s[left])) {
            left++;
        } else if (!/[a-zA-Z0-9]/.test(s[right])) {
            right--;
        } else if (s[left].toLowerCase() === s[right].toLowerCase()) {
            left++;
            right--;
        } else {
            return false;
        }
    }
    return true;
};