let input = [
    '-1',
    '-10',
    '0',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let numOne = Number(gets());
let numTwo = Number(gets());
let numThree = Number(gets());

let biggest = Math.max(numOne, numTwo, numThree);

print(biggest);