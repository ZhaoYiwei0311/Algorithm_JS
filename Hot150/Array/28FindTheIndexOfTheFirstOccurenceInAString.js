/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    let next = getNext(needle);
    for (let haystackIndex = 0, needleIndex = 0; haystackIndex < haystack.length; haystackIndex++) {
        while (needleIndex > 0 && haystack[haystackIndex] !== needle[needleIndex]) {
            needleIndex = next[needleIndex - 1];
        }
        if (haystack[haystackIndex] === needle[needleIndex]) {
            needleIndex++;
        }
        if (needleIndex === needle.length) {
            return haystackIndex - needle.length + 1;
        }
    }
    return -1;

};

var getNext = function (word) {
    let next = new Array(word.length).fill(0);
    let right = 1;
    let left = 0;
    for (; right < word.length; right++) {
        while (left !== 0 && word[left] !== word[right]) {
            left = next[left - 1];
        }
        if (word[left] === word[right]) {
            left++;
        }
        next[right] = left;
    }
    return next;
}

let needle = "pi";
let haystack = "mississippi";
let number = strStr(haystack, needle);
console.log(number);
