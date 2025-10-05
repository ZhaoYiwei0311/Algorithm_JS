/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    const n = nums.length;
    let ans = [];
    const path = [];
    const onPath = Array(n).fill(false);

    function backtrack(index) {
        if (nums.length === path.length) {
            ans.push(path.slice(0));
        }
        for (let j = 0; j < nums.length; j++) {
            if (!onPath[j]) {
                path.push(nums[j]);
                onPath[j] = true;
                backtrack(index + 1);
                onPath[j] = false;
                path.pop();
            }
        }
    }

    backtrack(0);
    return ans;
};

let nums = [1, 2, 3];
console.log(permute(nums));