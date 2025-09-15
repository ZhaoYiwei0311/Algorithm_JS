// /**
//  * @param {number[]} prices
//  * @return {number}
//  */
// var maxProfit = function(prices) {
//     let diffs = [];
//     let ans = 0;
//     let cur = 0;
//     for (let i = 1; i < prices.length; i++) {
//         diffs[i - 1] = prices[i] - prices[i - 1];
//     }
//     for (let i = 0; i < diffs.length; i++) {
//         cur += diffs[i];
//         if (cur < 0) {
//             cur = 0;
//         } else {
//             ans = Math.max(ans, cur);
//         }
//     }
//     return ans;
// };

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    // Keep the min to the left
    let ans = 0;
    let minPrice = prices[0];
    for (let price of prices) {
        ans = Math.max(ans, price - minPrice);
        minPrice = Math.min(minPrice, price);
    }
    return ans;
};

let prices = [7,6,4,3,1];
console.log(maxProfit(prices));