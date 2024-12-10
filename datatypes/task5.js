let input = [
    '1', 
    '2',
    '3',
];
 
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let firstNum = Number(gets());
let secondNum = Number(gets());
let thirdNum = Number(gets());

let greatestNum = Math.max(firstNum, secondNum, thirdNum);
let smallestNum = Math.min(firstNum, secondNum, thirdNum);

let calculation = greatestNum + smallestNum;

print(calculation);