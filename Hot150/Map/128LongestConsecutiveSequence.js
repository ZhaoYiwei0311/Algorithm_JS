/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    const set = new Set(nums); // turn nums to set
    let ans = 0;
    for (const element of set) {
        if (set.has(element - 1)) { // not start
            continue
        }
        // element is the start
        let y = element + 1;
        while (set.has(y)) {
            y++;
        }
        ans = Math.max(ans, y - element);
    }
    return ans;
};