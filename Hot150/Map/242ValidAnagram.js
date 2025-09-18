/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }
    const map = new Array(26).fill(0);
    for (let i = 0; i < s.length; i++) {
        map[s[i].charCodeAt(0) - 'a'.charCodeAt(0)]++;
        map[t[i].charCodeAt(0) - 'a'.charCodeAt(0)]--;
    }
    for (let i = 0; i < map.length; i++) {
        if (map[i] !== 0) {
            return false;
        }
    }
    return true;
};