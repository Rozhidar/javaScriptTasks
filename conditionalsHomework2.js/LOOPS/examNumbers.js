let input = [
    '300',
    '400',
    '4',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const x = parseInt(gets());
const y = parseInt(gets());
const t = parseInt(gets());

for (let i = x; i <= y; i++) {
    const digit1 = Math.floor(i / 100);
    const digit2 = Math.floor((i % 100) / 10);
    const digit3 = i % 10;

    let sum = digit1 + digit2 + digit3;

    if (sum === t) print(i);
}
