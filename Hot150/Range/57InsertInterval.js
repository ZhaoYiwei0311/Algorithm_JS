/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    let newArr = intervals.slice(0);
    newArr.push(newInterval);
    newArr.sort((a, b) => (a[0] - b[0]));
    let ans = [];
    let left = newArr[0][0];
    let right = newArr[0][1];
    for (let i = 1; i < newArr.length; i++) {
        let curLeft = newArr[i][0];
        let curRight = newArr[i][1];
        if (curLeft >= left && curLeft <= right) {
            right = Math.max(curRight, right);
        } else {
            ans.push([left, right]);
            left = curLeft;
            right = curRight;
        }
    }
    ans.push([left, right]);
    return ans;
};