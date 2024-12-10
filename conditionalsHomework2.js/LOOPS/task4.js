let input = [
    '3',
    '2',
    '-1',
    '4',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let n = Number(gets());

let sum = 0;
let minValue = Infinity;
let maxValue = -Infinity;

for (let i = 0; i < n; i++) {
     let currentNum = Number(gets());
     sum += currentNum;

    if (currentNum < minValue) minValue = currentNum;
    if (currentNum > maxValue) maxValue = currentNum;
    
}

print(`min=${minValue.toFixed(2)}`);
print(`max=${maxValue.toFixed(2)}`);
print(`sum=${sum.toFixed(2)}`);
print(`avg=${(sum / n).toFixed(2)}`);