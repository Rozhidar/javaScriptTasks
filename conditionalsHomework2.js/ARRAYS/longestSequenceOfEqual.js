let input = [
    '10',
    '2',
    '1',
    '1',
    '2',
    '3',
    '3',
    '2',
    '2',
    '2',
    '1',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const N = Number(gets());

const arr = [];

for (let i = 0; i < N; i++) {
    let currentNum = Number(gets());
    arr.push(currentNum);

}

let longestSequence = 1;
let currentSequence = 1;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1 ]) {
        currentSequence++;

    } else {
        if (currentSequence > longestSequence) {
            longestSequence = currentSequence;

        }

        currentSequence = 1;
    }

}

print(longestSequence);