let input = [
    '1975',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let year = Number(gets());
let zodiacSign;

if (year % 12 === 8) {
    zodiacSign = "Dragon";
}

if (year % 12 === 9) {
    zodiacSign = "Snake";
}

if (year % 12 === 10) {
    zodiacSign = "Horse";
}
if (year % 12 === 11) {
    zodiacSign = "Sheep";
}
if (year % 12 === 0) {
    zodiacSign = "Monkey";
}

if (year % 12 === 1) {
    zodiacSign = "Rooster";
}

if (year % 12 === 2) {
    zodiacSign = "Dog";
}

if (year % 12 === 3) {
    zodiacSign = "Pig";
}

if (year % 12 === 4) {
    zodiacSign = "Rat";
}

if (year % 12 === 5) {
    zodiacSign = "Ox";
}

if (year % 12 === 6) {
    zodiacSign = "Tiger";
}

if (year % 12 === 7) {
    zodiacSign = "Hare";
}

print(zodiacSign);