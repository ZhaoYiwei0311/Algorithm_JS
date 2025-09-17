/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let ans = 0;
    let set = new Set();
    let left = 0;
    for (let right = 0; right < s.length; right++) {
        while (set.has(s[right])) {
            set.delete(s[left]);
            left++;
        }
        set.add(s[right]);
        ans = Math.max(ans, right - left + 1);
    }
    return ans;
};

let s = "dvdf";
let number = lengthOfLongestSubstring(s);
console.log(number);