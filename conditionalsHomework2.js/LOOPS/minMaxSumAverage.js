let input = [
    '3',
    '2',
    '5',
    '1',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let n = Number(gets());

let minNum = Infinity;
let maxNum = -Infinity;
let sum = 0;
let averageNum = 0;

for (let i = 0; i < n; i++){
    let currentNumber = Number(gets());

    if (currentNumber > maxNum){
        maxNum = currentNumber;
    }

    if (currentNumber < minNum){
        minNum = currentNumber;
    }

    sum += currentNumber;
    averageNum = sum / n;
}

print(`min=${minNum.toFixed(2)}`);
print(`max=${maxNum.toFixed(2)}`);
print(`sum=${sum.toFixed(2)}`);
print(`avg=${averageNum.toFixed(2)}`);