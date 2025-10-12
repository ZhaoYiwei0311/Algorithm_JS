/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
    /*
    We need to find 10 and 10 is composed of 2 * 5
    We need to know min(#2, #5) but as #5 is always smaller, we only to focus on #5
    We need to find 5, 5^2, 5^3
     */
    let ans = 0;
    while (n > 0) {
        n = Math.floor(n / 5); // by doing so, we can deduplicate 5^2 from 5 and 5^3 from 5^2
        ans += n;
    }
    return ans;
};