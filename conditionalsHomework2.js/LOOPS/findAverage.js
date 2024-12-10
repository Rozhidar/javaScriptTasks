let input = [
    '3',
    '2.5',
    '1.25',
    '3',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let n = Number(gets());

let sum = 0;
let result = 0;

for (let i = 0; i < n; i++){
    let currentNum = Number(gets());

    sum += currentNum;
    result = sum / n;

}

print(result.toFixed(2));