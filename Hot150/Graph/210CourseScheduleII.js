/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function (numCourses, prerequisites) {
    if (numCourses <= 0) {
        return [];
    }

    // adjacency list
    const adj = Array.from({length: numCourses}, () => new Set());

    // in-degree array
    const inDegree = new Array(numCourses).fill(0);

    // build graph
    for (const [course, pre] of prerequisites) {
        if (!adj[pre].has(course)) {
            adj[pre].add(course);
            inDegree[course]++;
        }
    }

    // queue for inDegree = 0
    const queue = [];
    for (let i = 0; i < numCourses; i++) {
        if (inDegree[i] === 0) {
            queue.push(i);
        }
    }

    const res = [];
    while (queue.length > 0) {
        const head = queue.shift();
        res.push(head);

        for (const nextCourse of adj[head]) {
            inDegree[nextCourse]--;
            if (inDegree[nextCourse] === 0) {
                queue.push(nextCourse);
            }
        }
    }

    return res.length === numCourses ? res : [];
};