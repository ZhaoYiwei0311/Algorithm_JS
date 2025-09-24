/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    // check if there is a cycle
    // three color spots
    const g = Array.from({ length: numCourses }, () => []);
    for (const [a, b] of prerequisites) {
        g[b].push(a);
    }

    const colors = new Array(numCourses).fill(0);
    function dfs(x) {
        colors[x] = 1; // visiting
        for (const y of g[x]) {
            if (colors[y] === 1 || (colors[y] === 0 && dfs(y))) {
                return true; // a cycle
            }
        }
        colors[x] = 2; // visited all x
        return false;
    }

    for (let i = 0; i < numCourses; i++) {
        if (colors[i] === 0 && dfs(i)) {
            return false; // there is cycle
        }
    }
    return true; // no cycle

};