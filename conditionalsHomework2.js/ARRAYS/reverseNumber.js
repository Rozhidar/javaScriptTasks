let input = [
    '123.45',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const inputNumber = gets().split('');

const arrOfNums = [];

for (let i = 0; i < inputNumber.length; i++){
    arrOfNums.push(inputNumber[i]);
}

const reversed = arrOfNums.reverse();
print(reversed.join(''));