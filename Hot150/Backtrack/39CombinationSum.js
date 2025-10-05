/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    candidates.sort((a, b) => a - b);
    let ans = [];
    let path = [];

    function backtrack(index, sum) {
        if (sum > target) {
            return;
        }
        // console.log(index, sum);
        if (sum === target) {
            ans.push(path.slice(0));
        }
        for (let i = index; i < candidates.length; i++) {

            path.push(candidates[i]);
            backtrack(i, sum + candidates[i]);
            path.pop();
        }
    }

    backtrack(0, 0);
    return ans;
};

let candidates = [2, 3, 6, 7];
let target = 7;

console.log(combinationSum(candidates, target));