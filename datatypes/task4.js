let input = [
    '1', 
    '2',
    '3',
    '4',
    '5',
];
 
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let firstNumber = Number(gets());
let secondNumber = Number(gets());
let thirdNumber = Number(gets());
let forthNumber = Number(gets());
let fifthNumber = Number(gets());

let sumOfNumbers = firstNumber + secondNumber + thirdNumber + forthNumber + fifthNumber;

print(sumOfNumbers);