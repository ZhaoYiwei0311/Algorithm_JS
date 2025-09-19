/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    const ans = [];
    intervals.sort((a, b) => (a[0] - b[0]));
    let left = intervals[0][0];
    let right = intervals[0][1];
    for (let i = 1; i < intervals.length; i++) {
        let curLeft = intervals[i][0];
        let curRight = intervals[i][1];
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