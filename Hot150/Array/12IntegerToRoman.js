/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    let ans = "";
    ans += thousands[Math.floor(num / 1000)];
    num %= 1000;
    ans += hundreds[Math.floor(num / 100)];
    num %= 100;
    ans += tens[Math.floor(num / 10)];
    num %= 10;
    ans += singles[num];
    return ans;
};

const thousands = ['', 'M', 'MM', 'MMM'];
const hundreds = ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'];
const tens = ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'];
const singles = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];

let num = 1994;
console.log(intToRoman(num))