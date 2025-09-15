/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function(words, maxWidth) {
    const ans = [];
    let right = 0, n = words.length;
    while (true) {
        const left = right; // the position of the first word in the current line
        let sumLen = 0; // the sum of words length in the current line
        // right - left is number of words, meaning spaces
        while (right < n && sumLen + words[right].length + right - left <= maxWidth) {
            sumLen += words[right].length;
            right++;
        }

        // If the current line is the last line: we should
        // 1.left-align the word
        // 2.there is only one space between each word
        // 3.fill space to last
        if (right === n) {
            const s = words.slice(left).join(' ');
            ans.push(s + blank(maxWidth - s.length));
            break;
        }
        const numWords = right - left;
        const numSpaces = maxWidth - sumLen;

        // there is only 1 word
        // 1.this word should left-align
        // 2.fill spaces
        if (numWords === 1) {
            ans.push(words[left] + blank(numSpaces));
            continue;
        }

        const avgSpaces = Math.floor(numSpaces / (numWords - 1));
        const extraSpaces = numSpaces % (numWords - 1);
        const s1 = words.slice(left, left + extraSpaces + 1).join(blank(avgSpaces + 1));
        const s2 = words.slice(left + extraSpaces + 1, right).join(blank(avgSpaces));
        ans.push(s1 + blank(avgSpaces) + s2);
    }
    return ans;
};

const blank = function (n) {
    return new Array(n).fill(' ').join('');
}

const words = ["This", "is", "an", "example", "of", "text", "justification."];
const maxWidth = 16;
let strings = fullJustify(words, maxWidth);

console.log(strings);