const mapping = {
    "2": "abc",
    "3": "def",
    "4": "ghi",
    "5": "jkl",
    "6": "mno",
    "7": "pqrs",
    "8": "tuv",
    "9": "wxyz"
}

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    const ans = [];
    const path = "";

    function backtrack(digits, path) {
        if (digits === '') {
            if (path !== '') {
                ans.push(path);
            }
            return
        }
        let val = mapping[digits[0]];
        for (const c of val) {
            path = path + c;
            backtrack(digits.slice(1), path);
            path = path.slice(0, path.length - 1);
        }

    }

    backtrack(digits, path);
    return ans;
};

const digits = "";

console.log(letterCombinations(digits));