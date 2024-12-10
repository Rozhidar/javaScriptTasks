let input = [
    '1,2,3,3,5',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let arr = gets().split(',').map(Number);

let missingNumber = [];

for (let i = 1; i <= arr.length; i++) {
    if (!arr.includes(i)) {
        missingNumber.push(i);
    }
}

print(missingNumber.join(','));