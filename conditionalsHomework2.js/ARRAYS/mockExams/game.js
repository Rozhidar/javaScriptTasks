let input = [
    '185',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const inputNum = gets().split('').map(Number);

let result1 = inputNum[0] + inputNum[1] + inputNum[2];
let result2 = inputNum[0] * inputNum[1] + inputNum[2];
let result3 = inputNum[0] + inputNum[1] * inputNum[2];
let result4 = inputNum[0] * inputNum[1] * inputNum[2];

let maxNumber = Math.max(result1, result2, result3, result4);
print(maxNumber);





