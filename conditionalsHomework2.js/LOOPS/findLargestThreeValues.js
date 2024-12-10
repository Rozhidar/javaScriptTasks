let input = [
    '3',
    '3',
    '100',
    '2',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let numbersCount = Number(gets());

let largestNum = -500;
let secondLargestNum = -500;
let thirdLargestNum = -500;

for (let i = 0; i < numbersCount; i++) {
    let currentNumber = Number(gets());

    if (currentNumber >= largestNum) {
        thirdLargestNum = secondLargestNum;
        secondLargestNum = largestNum;
        largestNum = currentNumber;

    } else if (currentNumber > secondLargestNum && currentNumber < largestNum) {
        thirdLargestNum = secondLargestNum;
        secondLargestNum = currentNumber;

    } else if (currentNumber > thirdLargestNum && currentNumber < secondLargestNum){
        thirdLargestNum = currentNumber;

    }

}

print(`${largestNum}, ${secondLargestNum} and ${thirdLargestNum}`);