let input = [
    '10', 
    '10',
];
 
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let halfLitreCount = Number(gets());
let oneLitreCount = Number(gets());

let halfLitreBottleDeposit = 0.1;
let oneLitreBottleDeposit = 0.25;

let halfLitreBottleCalc = halfLitreCount * halfLitreBottleDeposit;
let oneLitreBottleCalc = oneLitreCount * oneLitreBottleDeposit;

let totalSum = halfLitreBottleCalc + oneLitreBottleCalc;

print(totalSum.toFixed(2));