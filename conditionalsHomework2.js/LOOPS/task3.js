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

for (let i = 0; i < n; i++) {
    currentValue = Number(gets());
    sum += currentValue;
}

let average = sum / n;
print(average.toFixed(2));
