let input = [
    '100', 
];
 
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let depositedSum = Number(gets());

let interestPercetage = 0.05;

let firstYearCalc = (depositedSum * interestPercetage) + depositedSum;
let secondYearCalc = (firstYearCalc * interestPercetage) + firstYearCalc;
let thirdYearCalc = (secondYearCalc * interestPercetage) + secondYearCalc;

print(firstYearCalc.toFixed(2));
print(secondYearCalc.toFixed(2));
print(thirdYearCalc.toFixed(2));