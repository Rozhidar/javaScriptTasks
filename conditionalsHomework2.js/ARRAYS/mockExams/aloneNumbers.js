let input = [
    '1, 2, 3, 2, 5, 2',
    '2',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const arr = gets().split(',').map(Number);

const targetNumber = parseInt(gets());

for (let i = 0; i < arr.length; i++) {

    if (arr[i] === targetNumber) {

        if (arr[i] !== arr[i - 1] && arr[i] !== arr[i + 1]) {

            if (arr[i - 1] < arr[i + 1]) {
                arr[i] = arr[i + 1];

            } else if (arr[i - 1] > arr[i + 1]) {
                arr[i] = arr[i - 1];

            }
        }

    }

}

print(`[${arr.join(', ')}]`);
