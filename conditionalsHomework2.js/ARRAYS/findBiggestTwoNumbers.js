let input = [
    '8 2 1 3 11 8 9 11 2 5',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const arr = gets().split(' ').map(Number);

let biggestNumber = -Infinity;
let secondBiggestNumber = -Infinity;

let biggestNumberPosition = -1;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > biggestNumber) {
        biggestNumber = arr[i];
        biggestNumberPosition = i;
    }
}

for (let i = 0; i < arr.length; i++) {
    if (i === biggestNumberPosition) continue;

    if (arr[i] > secondBiggestNumber) {
        secondBiggestNumber = arr[i];
    }
}

print(`${biggestNumber} ${secondBiggestNumber}`);