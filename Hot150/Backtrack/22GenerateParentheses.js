/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const ans = [];
    const path = Array(n * 2);

    function backtrack(left, right) {
        if (right === n) {
            ans.push(path.join(''));
            return;
        }
        if (left < n) { // we can fill (
            path[left + right] = '(';
            backtrack(left + 1, right);
        }
        if (right < left) { // we can fill )
            path[left + right] = ')';
            backtrack(left, right + 1);
        }
    }
    backtrack(0, 0);
    return ans;
};