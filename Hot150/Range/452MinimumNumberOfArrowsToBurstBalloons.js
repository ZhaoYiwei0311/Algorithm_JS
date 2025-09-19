/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function(points) {
    points.sort((a, b) => (a[0] - b[0]));
    const ans = []
    let left = points[0][0];
    let right = points[0][1];
    for (let i = 1; i < points.length; i++) {
        let curLeft = points[i][0];
        let curRight = points[i][1];
        if (curLeft >= left && curLeft <= right) {
            right = Math.min(curRight, right);
        } else {
            ans.push([left, right]);
            left = curLeft;
            right = curRight;
        }
    }
    ans.push([left, right]);
    return ans.length;
};

var betterFindMinArrowShots = function (points) {
    // find the rightest point and update
    points.sort((a, b) => (a[1] - b[1]));
    let ans = 0;
    let pre = -Infinity;
    for (let i = 0; i < points.length; i++) {
        if (points[i][0] > pre) {
            ans++;
            pre = points[i][1];
        }
    }
    return ans;
}

const points = [[1,2],[2,3],[3,4],[4,5]];
let number = betterFindMinArrowShots(points);
console.log(number);