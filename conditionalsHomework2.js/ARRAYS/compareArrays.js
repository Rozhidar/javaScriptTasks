let input = [
    '3',
    '1',
    '2',
    '3',
    '1',
    '2',
    '3',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const n = parseInt(gets());

let firstArr = [];
let secondArr = [];

for (let i = 0; i < n; i++) {
    let firstNums = Number(gets());
    firstArr.push(firstNums);
}

for (let i = 0; i < n; i++) {
    let secondNums = Number(gets());
    secondArr.push(secondNums);
}

let areEqual = true;

for (let i = 0; i < n; i++) {
    if (firstArr[i] !== secondArr[i]) {
        areEqual = false;
    }
}

if (areEqual) {
    print('equal');
} else {
    print('not equal');
}