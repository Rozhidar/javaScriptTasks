let input = [
    '2, 3, 1, 5, 6',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const inputNumbers = gets().split(', ').map(Number);

let length = inputNumbers.length;

for (let i = 0; i < length; i++) {

    for (let j = i + 1; j < length; j++) {
        let previous = inputNumbers[i];
        let next = inputNumbers[j];

        if (next > previous) {
            let current = inputNumbers[j];
            inputNumbers[j] = inputNumbers[i];
            inputNumbers[i] = current;
        }
    }
}

let sortedNums = inputNumbers.join(', ');

print(sortedNums);

