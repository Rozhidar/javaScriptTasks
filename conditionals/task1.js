let input = [
    '4', 
];
 
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let humanYearsInput = Number(gets());

let dogYears = 0;
const firstDogYear = 10;
const firstTwoDogYears = 20;

if (humanYearsInput === 2) {
    print(firstTwoDogYears);

} else if (humanYearsInput === 1) {
    print(firstDogYear);

} else if (humanYearsInput > 2) {
    dogYearsCalc = humanYearsInput - 2;
    dogYears = (dogYearsCalc * 4) + firstTwoDogYears;
    print(dogYears);

} 