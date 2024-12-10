let input = [
    '10',
    '2',
    '3',
    '-6',
    '-1',
    '2',
    '-1',
    '6',
    '4',
    '-8',
    '8',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const number = Number(gets());

const arr = [];

let currentSum = 0;
let maximalSum = 0;

for (let i = 0; i < number; i++) {
    let currentNum = Number(gets());
    arr.push(currentNum);

}

for (let i = 0; i < arr.length; i++) {

    currentSum += arr[i];

    if (currentSum > maximalSum) maximalSum = currentSum;

    if (currentSum < 0) currentSum = 0;
}

print(maximalSum);