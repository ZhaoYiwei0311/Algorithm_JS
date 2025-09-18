/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    const map = new Array(26).fill(0);
    for (let i = 0; i < magazine.length; i++) {
        map[magazine[i].charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }
    for (let i = 0; i < ransomNote.length; i++) {
        let index = ransomNote[i].charCodeAt(0) - 'a'.charCodeAt(0);
        if (map[index] <= 0) {
            return false;
        } else {
            map[index]--;
        }
    }
    return true;
};

var betterCanConstruct = function(ransomNote, magazine) {
    if (ransomNote.length > magazine.length) {
        return false;
    }
    const cnt = Array(26).fill(0);
    const ordA = 'a'.charCodeAt(0);
    for (const c of magazine) {
        cnt[c.charCodeAt(0) - ordA]++;
    }
    for (const c of ransomNote) {
        if (--cnt[c.charCodeAt(0) - ordA] < 0) {
            return false;
        }
    }
    return true;
};