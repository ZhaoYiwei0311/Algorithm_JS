/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    // The point is to find the worst case and start from there
    let ans = 0;
    let fuel = 0;
    let minFuel = 0;
    for (let i = 0; i < gas.length; i++) {
        fuel += gas[i] - cost[i];
        if (fuel < minFuel) {
            minFuel = fuel;
            ans = i + 1;
        }
    }

    return fuel < 0 ? -1 : ans;
};