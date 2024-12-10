let input = [
    '4',
    '4',
    '4',
    '4',
    '4',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let numOne = Number(gets());
let numTwo = Number(gets());
let numThree = Number(gets());
let numFour = Number(gets());
let numFive = Number(gets());

if (numOne >= numTwo && numOne >= numThree
    && numOne >= numFour
    && numOne >= numFive) {

    print(numOne);

} else if (numTwo > numOne && numTwo > numThree
    && numTwo > numFour
    && numTwo > numFive) {

    print(numTwo);

} else if (numThree > numOne && numThree > numTwo
    && numThree > numFour
    && numThree > numFive) {

    print(numThree);

} else if (numFour > numOne && numFour > numTwo
    && numFour > numThree
    && numFour > numFive) {

    print(numFour);

} else if (numFive > numOne && numFive > numTwo
    && numFive > numThree
    && numFive > numFour) {

    print(numFive);

} 