/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let ans = "";
    let arr = [];
    let left = s.length - 1;
    let right = s.length - 1;

    while (left >= 0) {
        if (s[right] === ' ') {
            right--;
            left--;
        } else {
            while (s[left] !== ' ' && left >= 0) {
                left--;
            }
            arr.push(s.slice(left + 1, right + 1));
            right = left;
        }
    }
    for (let i = 0; i < arr.length; i++) {
        ans += arr[i];
        if (i !== arr.length - 1) {
            ans += " ";
        }
    }
    return ans;
};
