/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    const nums = [];
    nums.push(0);
    s = s.replaceAll(" ", "");
    const ops = [];
    let n = s.length;
    for (let i = 0; i < n; i++) {
        let c = s[i];
        if (c === '(') {
            ops.push(c);
        } else if (c === ')') {
            // calculate until last '('
            while (ops.length !== 0) {
                let op = ops[ops.length - 1];
                if (op !== '(') {
                    calc(nums, ops);
                } else {
                    ops.pop();
                    break;
                }
            }
        } else {
            if (isDigit(c)) {
                let u = 0;
                let j = i;
                while (j < n && isDigit(s[j])) {
                    u = u * 10 + s[j++].charCodeAt(0) - '0'.charCodeAt(0);
                }
                nums.push(u);
                i = j - 1;
            } else {
                // in the case of 1 - ( -2)
                if (i > 0 && (s[i - 1] === '(' || s[i - 1] === '+' || s[i - 1] === '-')) {
                    console.log(nums, ops);
                    nums.push(0);
                }
                while (ops.length !== 0 && ops[ops.length - 1] !== '(') {
                    calc(nums, ops);
                }
                ops.push(c);
            }
        }
    }
    while (ops.length !== 0) {
        calc(nums, ops);
    }
    return nums[nums.length - 1];
};

var calc = function(nums, ops) {
    if (nums.length === 0 || nums.length < 2) {
        return;
    }
    if (ops.length === 0) {
        return;
    }
    let b = nums.pop(), a = nums.pop();
    let op = ops.pop();
    nums.push(op === '+' ? a + b : a - b);
}

var isDigit = function(c) {
    return /\d/.test(c);
}

let s = "1-(     -2)";
calculate(s);

