/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a, b) => a - b);
    let ans = [];
    for (let i = 0; i < nums.length - 2; i++) {
        if (i >= 1 && nums[i - 1] === nums[i]) {
            // Because it is sorted, we can deduplicate the same value
            continue;
        }
        let left = i + 1;
        let right = nums.length - 1;
        if (nums[i] + nums[left] + nums[left + 1] > 0) {
            break
        }
        if (nums[i] + nums[right] + nums[right - 1] < 0) {
            continue;
        }

        while (left < right) {
            let sum = nums[left] + nums[right] + nums[i];
            if (sum === 0) {
                if (left > i + 1 && nums[left - 1] === nums[left]) {
                    left++;
                    continue;
                }
                if (right < nums.length - 1 && nums[right] === nums[right + 1]) {
                    right--;
                    continue
                }
                ans.push([nums[left], nums[right], nums[i]]);
                left++;
                right--;
            } else if (sum > 0) {
                right--;
            } else {
                left++;
            }
        }
    }
    return ans;
};

let nums = [-1,0,1,2,-1,-4];
let ans = threeSum(nums);
console.log(ans);