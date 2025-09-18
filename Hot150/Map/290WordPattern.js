/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    const sArr = s.split(" ");
    if (pattern.length !== sArr.length) {
        return false
    }

    const mapPattern = new Map();
    const mapSArr = new Map();

    for (let i = 0; i < pattern.length; i++) {
        if ((mapPattern.has(pattern[i]) && mapPattern.get(pattern[i]) !== sArr[i]) || (mapSArr.has(sArr[i]) && mapSArr.get(sArr[i]) !== pattern[i])) {
            return false;
        }
        mapPattern.set(pattern[i], sArr[i]);
        mapSArr.set(sArr[i], pattern[i]);

    }
    return true;
};

let pattern = "abba";
let s = "dog dog dog dog";

let b = wordPattern(pattern, s);
console.log(b);