// /**
//  * @param {number[]} citations
//  * @return {number}
//  */
// var hIndex = function(citations) {
//     citations.sort((a, b) => b - a);
//     let ans = 0;
//     for (const citation of citations) {
//         if (citation > ans) {
//             ans++;
//         } else {
//             break;
//         }
//     }
//     return ans;
// };

/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    const count = Array(citations.length + 1).fill(0);
    for (const citation of citations) {
        count[Math.min(citation, citations.length)]++;
    }
    let sum = 0;
    for (let i = citations.length; i >= 0; i--) {
        sum += count[i];
        if (sum >= i) {
            return i;
        }
    }
};