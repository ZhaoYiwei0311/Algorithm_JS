/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];
    for (let i = 0; i < s.length; i++) {
        let c = s[i];
        if (c === '(') {
            stack.push(')');
        } else if (c === '{') {
            stack.push('}')
        } else if (c === '[') {
            stack.push(']');
        } else {
            if (stack.length === 0) {
                return false;
            }
            if (stack.pop() !== c) {
                return false;
            }
        }
    }
    return stack.length === 0;
};