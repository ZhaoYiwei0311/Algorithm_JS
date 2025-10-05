var combine = function(n, k) {
    let ans = [];
    let path = [];

    for(let i = 1; i <= n; i++) {
        backtrack(i, k, n);
        path = [];
    }

    function backtrack(num, length, number) {
        path.push(num)
        if (path.length === length) {
            ans.push(path.slice(0))
            return
        }
        for (let i = num + 1; i <= number; i++) {
            backtrack(i, length, number);
            path.pop();
        }
    }

    return ans;
};

var betterCombine = function(n, k) {
    let ans = [];
    let path = [];
    function betterBacktrack(i) {
        let d = k - path.length
        if (i < d) {
            return;
        }
        if (path.length === k) {
            ans.push(path.slice(0))
            return
        }
        for (let j = i; j > 0; j--) {
            path.push(j)
            betterBacktrack(j - 1);
            path.pop();
        }
    }

    betterBacktrack(n);
    return ans;
};

console.log(betterCombine(4, 2))