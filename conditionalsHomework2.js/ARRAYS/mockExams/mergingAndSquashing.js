let input = [
    '5',
    '11',
    '22',
    '11',
    '22',
    '11',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const countOfNumbers = Number(gets());

let arr = [];

for (let i = 0; i < countOfNumbers; i++) {
    let num = Number(gets());
    arr.push(num);

}

let mergedNumbers = [];
let squashedNumbers = [];

for (let i = 0; i < arr.length - 1; i++) {
    let firstNum = arr[i].toString();
    let nextNum = arr[i + 1].toString();

    let firstDigitOfFirstNum = firstNum[0];
    let secondDigitOfFirstNum = firstNum[1];
    let firstDigitOfNextNum = nextNum[0];
    let secondDigitOfNextNum = nextNum[1];

    let mergedNum = secondDigitOfFirstNum + firstDigitOfNextNum;
    mergedNumbers.push(mergedNum);

    let middleDigit = (Number(secondDigitOfFirstNum) + Number(firstDigitOfNextNum)) % 10;
    let squashedNum = Number(`${firstDigitOfFirstNum}${middleDigit}${secondDigitOfNextNum}`);
    squashedNumbers.push(squashedNum);

}

print(mergedNumbers.join(' '));
print(squashedNumbers.join(' '));