let input = [
    '5',
    '4 3 2 5 2',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let n = Number(gets());

let inputNumbers = gets();
let realNums = inputNumbers.split(' ').map(Number);

let odds = 1;
let evens = 1;

for (let i = 0; i < realNums.length; i++) {
    const index = i;
    const number = realNums[i];

    if (index % 2 === 0) {
        odds *= number;

    } else if (index % 2 !== 0) {
        evens *= number;

    }
}

if (evens === odds) {
    print(`yes ${evens}`);
} else if (evens !== odds) {
    print(`no ${odds} ${evens}`);
}