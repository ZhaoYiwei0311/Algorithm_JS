import {MaxPriorityQueue, MinPriorityQueue} from "@datastructures-js/priority-queue";

/**
 * @param {number} k
 * @param {number} w
 * @param {number[]} profits
 * @param {number[]} capital
 * @return {number}
 */
var findMaximizedCapital = function(k, w, profits, capital) {
    const projects = [];
    for (let i = 0; i < profits.length; i++) {
        projects.push([capital[i], profits[i]])
    }
    projects.sort((a, b) => a[0] - b[0]);
    const pq = new MaxPriorityQueue();
    let i = 0;
    while (k-- > 0) {
        while (i < profits.length && projects[i][0] <= w) {
            pq.enqueue(projects[i++][1]);
            console.log(pq.front())
        }
        if (pq.isEmpty()) {
            break;
        }
        w += pq.dequeue();
    }
    return w;
};

let k = 2;
let w = 0;
let profits = [1, 2, 3];
let capital = [0, 1, 1];

console.log(findMaximizedCapital(k, w, profits, capital));