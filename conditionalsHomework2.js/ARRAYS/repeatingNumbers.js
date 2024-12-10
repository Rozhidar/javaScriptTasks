let input = [
    '4',
    '1',
    '3',
    '3',
    '7',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const lines = Number(gets());

let count = new Array(10).fill(0);

let maxValue = 0;

for (let i = 0; i < lines; i++) {
    let currentNum = parseInt(gets());

    count[currentNum - 1]++;

    if (count[currentNum - 1] > maxValue) maxValue = count[currentNum - 1];

}

for (let i = 0; i <= 10; i++) {

    if (count[i - 1] === maxValue) {
        print(i);
        break;
    }

}