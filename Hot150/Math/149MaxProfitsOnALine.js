/**
 * @param {number[][]} points
 * @return {number}
 */
var maxPoints = function(points) {
    // check the third point slant with the first and second point
    // if they are the same, then they are all on the same line
    // because of the precision, we should use slant multiplication instead of division
    let ans = 1;
    const n = points.length;
    for (let i = 0; i < n; i++) {
        const x = points[i];
        for (let j = i + 1; j < n; j++) {
            const y = points[j];
            // check x, y slant
            let cnt = 2; // x, y on the line
            for (let k = j + 1; k < n; k++) {
                const p = points[k];
                const s1 = (y[1] - x[1]) * (p[0] - y[0]);
                const s2 = (p[1] - y[1]) * (y[0] - x[0]);
                if (s1 === s2) {
                    cnt++;
                }
            }
            ans = Math.max(ans, cnt);
        }
    }
    return ans;
};