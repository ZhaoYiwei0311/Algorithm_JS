/**
 * @param {string} startGene
 * @param {string} endGene
 * @param {string[]} bank
 * @return {number}
 */
var minMutation = function(startGene, endGene, bank) {
    const queue = [];
    const set = new Set();
    for (const validGene of bank) {
        set.add(validGene);
    }
    queue.push([startGene, 0]);
    while (queue.length > 0) {
        let cur = queue.shift();
        let curGene = cur[0];
        let curStep = cur[1];
        if (curGene === endGene) {
            return curStep;
        }
        for (let i = 0; i < curGene.length; i++) {
            for (const ch of "ACGT") {
                let newGene = curGene.slice(0, i) + ch + curGene.slice(i + 1);
                if (set.has(newGene)) {
                    queue.push([newGene, cur[1] + 1]);
                    set.delete(newGene);
                }
            }
        }
    }
    return -1;
};

let startGene = "AACCGGTT";
let endGene = "AACCGGTA";
let bank = ["AACCGGTA"];

let number = minMutation(startGene, endGene, bank);
console.log(number);