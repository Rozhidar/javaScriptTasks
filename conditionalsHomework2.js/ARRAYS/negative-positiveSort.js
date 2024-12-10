let input = [
    '7 2 -2 0 -5 4 5 -3 1',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const arr = gets().split(' ').map(Number);

const negativeNumbers = [];
const positiveNumbers = [];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
        negativeNumbers.push(arr[i]);

    } else if (arr[i] >= 0) {
        positiveNumbers.push(arr[i]);

    }
}

const mergedArr = negativeNumbers.concat(positiveNumbers);
let result = mergedArr.join(' ');

print(result);