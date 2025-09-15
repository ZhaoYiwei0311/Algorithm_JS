/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let ans = nums[0];
    let hp = 0;
    for (let num of nums) {
        if (hp === 0) { // new turn
            ans = num;
            hp = 1;
        } else {
            if (num === ans) {
                hp++;
            } else {
                hp--;
            }
        }
    }
    return ans
};

let nums = [6,5,5];
console.log(majorityElement(nums))