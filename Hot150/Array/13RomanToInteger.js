/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let ans = 0;
    for (let i = 0; i < s.length - 1; i++) {
        const x = map[s[i]];
        const y = map[s[i + 1]];
        if (x < y) {
            // just check if x is smaller than y
            // because it is ordered from big to small
            // if x is smaller, than it should be negative
            ans -= x;
        } else {
            ans += x;
        }
    }
    return ans + map[s[s.length - 1]];
};

const map = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
}