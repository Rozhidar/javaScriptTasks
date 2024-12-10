let input = [
    '5,3,2,1',
    '2',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const arr = gets().split(',').map(Number);
let n = Number(gets());

let number = n % arr.length;

let rotated = [];

rotated = arr.slice(number).concat(arr.slice(0, number)).join(',');

print(rotated);