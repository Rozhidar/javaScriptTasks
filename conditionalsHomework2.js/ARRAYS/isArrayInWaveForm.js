let input = [
    '22 34 12 523 122 4444 123',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const arr = gets().split(' ').map(Number);

let firstNumber = 0;
let secondNumber = 1;
let thirdNumber = 2;

let isWave = 'yes';

for (let i = 0; i < arr.length; i++) {
    if ((arr[firstNumber] >= arr[secondNumber] && arr[secondNumber] >= arr[thirdNumber])
        || (arr[firstNumber] <= arr[secondNumber] && arr[secondNumber] <= arr[thirdNumber])) {

        isWave = 'no';

    }

    firstNumber++;
    secondNumber++;
    thirdNumber++;

}

print(isWave);