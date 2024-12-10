let input = [
    '2346', 
];
 
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let fourDigitNumber = Number(gets());

let separateNumbers = String(fourDigitNumber).split('').map(Number);

let firstDigitNum = separateNumbers[0];
let secondDigitNum = separateNumbers[1];
let thirdDigitNum = separateNumbers[2];
let fourthDigitNum = separateNumbers[3];

print(firstDigitNum + secondDigitNum + thirdDigitNum + fourthDigitNum);
