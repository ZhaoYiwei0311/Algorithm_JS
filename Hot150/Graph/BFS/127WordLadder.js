/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
    const set = new Set();
    for (const word of wordList) {
        set.add(word);
    }
    if (!set.has(endWord)) {
        return 0;
    }
    let queue = [];
    queue.push([beginWord, 1]);
    const ALPHABETS = "abcdefghijklmnopqrstuvwxyz";
    while (queue.length > 0) {
        let cur = queue.shift();
        let curWord = cur[0];
        let curStep = cur[1];
        if (curWord === endWord) {
            return curStep;
        }
        for (let i = 0; i < curWord.length; i++) {
            for (const ch of ALPHABETS) {
                let newWord = curWord.slice(0, i) + ch + curWord.slice(i + 1);
                if (set.has(newWord)) {
                    queue.push([newWord, curStep + 1]);
                    set.delete(newWord);
                }
            }
        }
    }
    return 0;
};

let beginWord = "a";
let endWord = "b";
let wordList = ["a","b","c"];

let number = ladderLength(beginWord, endWord, wordList);
console.log(number);