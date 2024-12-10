let input = [
    '4',
    'pizza',
    'macaroni',
    'kiufte',
    'banica',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let bestFood = '';
let bestRatio = Infinity;
let bestCount = 0;

const n = parseInt(gets());

for (let i = 0; i < n; i++) {
    const food = gets();

    let count = 0;
    const vowels = 'aouei'

    for (let j = 0; j < food.length; j++) {
        if (vowels.includes(food[j])) {
            count++;
        }
    }

    const letters = food.length;
    const ratio = count / letters;

    if (ratio < bestRatio || (ratio === bestRatio && count > bestCount)
        || (ratio === bestRatio && count === bestCount && food.length > bestFood.length)) {

        bestFood = food;
        bestRatio = ratio;
        bestCount = count;

    }
}

print(`${bestFood} ${bestCount}/${bestFood.length}`);