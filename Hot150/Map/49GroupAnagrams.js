/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const map = new Map();
    for (const s of strs) {
        // sort s and make it a key
        const sortedS = s.split("").sort().join("");
        if (!map.has(sortedS)) {
            map.set(sortedS, []);
        }
        // the sorted s will be put in the same array
        map.get(sortedS).push(s);
    }
    return new Array.from(map.values());
};