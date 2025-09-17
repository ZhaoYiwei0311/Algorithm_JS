/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    const cnt = Array(128).fill(0);
    let less = 0;
    for (let c of t) {
        c = c.codePointAt(0);
        if (cnt[c] === 0) {
            less++; // the number of characters that appear fewer than the times of character
        }
        cnt[c]++;
    }

    const m = s.length;
    let ansLeft = -1, ansRight = m;
    let left = 0;
    for (let right = 0; right < m; right++) { // move right point
        const c = s[right].codePointAt(0); // character at right end
        cnt[c]--; // character at right end moves iin
        if (cnt[c] === 0) {
            // Less before in c but now the same
            less--;
        }
        while (less === 0) {
            if (right - left < ansRight - ansLeft) {
                ansLeft = left;
                ansRight = right;
            }
            const x = s[left].codePointAt(0);
            if (cnt[x] === 0) {
                // when x is moved out of the window
                // we must check how many times it appears
                // if it is the same, then less++
                less++;
            }
            cnt[x]++;
            left++;
        }
    }
    return ansLeft < 0 ? "" : s.substring(ansLeft, ansRight + 1);
};