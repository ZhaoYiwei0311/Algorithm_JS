/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    const numStack = [];
    for (let i = 0; i < tokens.length; i++) {
        const token = tokens[i];
        if (!isNaN(Number(token))) {
            numStack.push(parseInt(token));
        } else {
            let last = numStack.pop();
            let first = numStack.pop();
            switch (token) {
                case '+':
                    numStack.push(first + last);
                    break;
                case '*':
                    numStack.push(first * last);
                    break
                case '-':
                    numStack.push(first - last);
                    break;
                case '/':
                    numStack.push(Math.trunc(first / last));
                    break;
                default:
                    break;
            }
        }
    }
    return numStack.pop();
};

let tokens = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"];
console.log(evalRPN(tokens));