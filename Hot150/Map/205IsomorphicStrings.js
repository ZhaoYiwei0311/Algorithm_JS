/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    const mapS = new Map();
    const mapT = new Map();
    for (let i = 0; i < s.length; i++) {
        let a = s[i];
        let b = t[i];
        if ((mapS.has(a) && mapS.get(a) !== b) || (mapT.has(b) && mapT.get(b) !== a)) {
            return false;
        }
        mapS.set(a, b);
        mapT.set(b, a);
    }
    return true;
};

let s = "egg";
let t = "add";

console.log(isIsomorphic(s, t));