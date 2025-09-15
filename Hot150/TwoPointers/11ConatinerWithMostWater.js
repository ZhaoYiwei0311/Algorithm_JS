/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let max = 0;
    let left = 0;
    let right = height.length - 1;
    while (left < right) {
        let leftHeight = height[left];
        let rightHeight = height[right];
        let curSize = (right - left) * Math.min(leftHeight, rightHeight);
        max = Math.max(curSize, max);
        leftHeight >= rightHeight ? right-- : left++;
    }
    return max;
};