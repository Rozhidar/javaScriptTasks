let input = [
    '0,1,-1',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const sourceArr = gets().split(',').map(Number);

let sumOfNums = 0;

for (let i = 0; i < sourceArr.length; i++) {
    sumOfNums += sourceArr[i];
}

let average = sumOfNums / sourceArr.length;

print(`avg: ${average.toFixed(2)}`);

const belowNums = [];
const aboveNums = [];

for (let i = 0; i < sourceArr.length; i++) {
    if (sourceArr[i] < average) {
        belowNums.push(sourceArr[i]);
    }

    if (sourceArr[i] > average) {
        aboveNums.push(sourceArr[i]);
    }
}

print(`below: ${belowNums.join(',')}`);
print(`above: ${aboveNums.join(',')}`);