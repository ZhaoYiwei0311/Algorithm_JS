// /**
//  * @param {string[]} strs
//  * @return {string}
//  */
// var longestCommonPrefix = function(strs) {
//     let ans = "";
//     let index = 0;
//     while (true) {
//         let benchmark = ""
//         for (let i = 0; i < strs.length; i++) {
//             if (index >= strs[i].length) {
//                 return ans;
//             }
//             if (i === 0) {
//                 benchmark = strs[0][index];
//             }
//             if (strs[i][index] !== benchmark) {
//                 return ans;
//             }
//             if (i === strs.length - 1) {
//                 ans += benchmark;
//             }
//         }
//         index++;
//     }
// };

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    // 1. From left to right
    // 2.   From top to bottom
    let ans = "";
    for (let i = 0; i < strs[0].length; i++) {
        for (const str of strs) {
            if (i === str.length || str[i] !== strs[0][i]) {
                return strs[0].slice(0, i);
            }
        }
    }
    return strs[0];
};

let strs = ["dog","racecar","car"]
console.log(longestCommonPrefix(strs))