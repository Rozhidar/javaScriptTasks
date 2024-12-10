let input = [
    '28',
    '3',
    'coffee',
    'tea',
    'pineapple',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const targetNumber = Number(gets());
const numberOfWords = Number(gets());

let distanceSum = 0;

for (let i = 0; i < numberOfWords; i++) {
    const word = gets();

    let score = 0;
    for (let j = 0; j < word.length; j++) {
        score += word.charCodeAt(j) - 96;

    }

    let distance = Math.abs(targetNumber - score);
    distanceSum += distance;

    print(`${word} ${distance}`);

}

const averageDistance = distanceSum / numberOfWords;
print(averageDistance.toFixed(2));