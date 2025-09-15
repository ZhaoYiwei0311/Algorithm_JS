/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if (numRows === 1) {
        return s;
    }
    let arr = Array(numRows);
    for (let i = 0; i < arr.length; i++) {
        arr[i] = [];
    }
    let turn = numRows + numRows - 2;
    let index = 0;
    while (index < s.length) {
        let seq = index % turn;
        if (seq < numRows) {
            arr[seq].push(s[index]);
        } else {
            arr[turn - seq].push(s[index]);
        }
        index++;
    }
   let ans = "";
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            ans += arr[i][j];
        }
    }
    return ans;
};

let str = "A";
console.log(convert(str, 1));