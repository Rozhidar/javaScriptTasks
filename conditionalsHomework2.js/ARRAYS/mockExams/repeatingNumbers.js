let input = [
    '4',
    '1',
    '3',
    '3',
    '7',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const n = parseInt(gets());

let repeatedNum = new Array(10).fill(0);

let maximalValue = 0;

for (let i = 0; i < n; i++) {
    let number = parseInt(gets());

    repeatedNum[number - 1]++;

    if (repeatedNum[number - 1] > maximalValue) maximalValue = repeatedNum[number - 1];

}

for (let i = 0; i <= 10; i++) {
    if (repeatedNum[i - 1] === maximalValue) {
        print(i);
        break;
    }

}