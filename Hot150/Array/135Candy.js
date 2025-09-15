/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
    // Greedy
    let ans = 0;
    let candies = new Array(ratings.length).fill(1);
    // 1.From left to right
    for (let i = 1; i < ratings.length; i++) {
        if (ratings[i] > ratings[i - 1]) {
            candies[i] = candies[i - 1] + 1;
        }
    }
    // 2.From right to left
    for (let i = ratings.length - 2; i >= 0 ; i--) {
        if (ratings[i] > ratings[i + 1]) {
            candies[i] = Math.max(candies[i + 1] + 1, candies[i]);
        }
    }
    for (let i = 0; i < candies.length; i++) {
        ans += candies[i];
    }
    return ans;
};

let ratings = [1, 2, 2];
console.log(candy(ratings));