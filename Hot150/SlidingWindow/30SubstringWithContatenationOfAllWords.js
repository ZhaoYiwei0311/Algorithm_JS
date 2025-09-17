/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
    // 0, wordLen, 2 * wordLen
    // 1, 1 + wordLen, 1 + 2 * wordLen
    // 2, 2 + wordLen, 2 + 2 * wordLen
    // wordLen - 1, wordLen - 1 + wordLen, wordLen - 1 + 2 * wordLen
    // Further is not needed, because it is included in the first round
    const wordLen = words[0].length // len of each word
    const windowLen = wordLen * words.length; // window size that can contain all the words

    const targetCnt = new Map();
    for (let word of words) {
        targetCnt.set(word, (targetCnt.get(word) ?? 0) + 1);
    }

    const ans = [];
    // enumerate window start, we will have wordLen times window
    for (let start = 0; start < wordLen; start++) {
        const cnt = new Map();
        let overload = 0;

        // enumerate the right end of the last word
        for (let right = start + wordLen; right <= s.length ; right += wordLen) {
            // 1.inWord enters the window
            const inWord = s.substring(right - wordLen, right);
            const cntIn = cnt.get(inWord) ?? 0;

            // inWord can appear too many times
            if (cntIn === (targetCnt.get(inWord) ?? 0)) {
                overload++;
            }
            cnt.set(inWord, cntIn + 1);

            const left = right - windowLen; // the first word of window
            if (left < 0) { // the window size is not enough
                continue;
            }

            // 2.update answer
            // if there is no word bigger than targetCnt, then there will be no words fewer than targetCnt
            if (overload === 0) {
                ans.push(left);
            }

            // 3.the leftest word will leave the window
            const outWord = s.substring(left, left + wordLen);
            const cntOut = cnt.get(outWord) - 1;
            cnt.set(outWord, cntOut);
            if (cntOut === (targetCnt.get(outWord) ?? 0)) {
                overload--;
            }
        }
    }
    return ans;
};