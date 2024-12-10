let input = [
    '4',
    '5',
    '7',
    '3',
    '6',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let limit = Number(gets());
let greatestNum = -Infinity;

for (let i = 1; i <= limit; i++) {
    let current = Number(gets());
    if (current > greatestNum) {
        greatestNum = current;
    }
}

console.log(greatestNum);