// /**
//  * @param {number[]} height
//  * @return {number}
//  */
// var trap = function(height) {
//     const leftArr = Array(height.length);
//     leftArr[0] = height[0];
//     const rightArr = Array(height.length);
//     rightArr[height.length - 1] = height[height.length - 1];
//     for (let i = 1; i < height.length; i++) {
//         leftArr[i] = Math.max(leftArr[i - 1], height[i]);
//     }
//     for (let i = height.length - 2; i >= 0; i--) {
//         rightArr[i] = Math.max(rightArr[i + 1], height[i]);
//     }
//     let ans = 0;
//     for (let i = 0; i < height.length; i++) {
//         if (Math.min(leftArr[i], rightArr[i]) > height[i]) {
//             ans += Math.min(leftArr[i], rightArr[i]) - height[i];
//         }
//     }
//     return ans;
// };

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    // two pointers
    let ans = 0;
    let left = 0;
    let right = height.length - 1;
    let pre = 0;
    let suf = 0;
    while (left <= right) {
        pre = Math.max(pre, height[left]);
        suf = Math.max(suf, height[right]);
        if (pre < suf) { // left should move right because pre is lower and pre would be the limit of bucket
            ans += pre - height[left];
            left++;
        } else { // right should move left because suf is lower and suf would be the limit of bucket
            ans += suf - height[right];
            right--;
        }
    }
    return ans;
};

let height = [4,2,0,3,2,5]
console.log(trap(height))