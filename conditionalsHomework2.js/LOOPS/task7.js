let input = [
    '3',
    '2',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let N = Number(gets());
let X = Number(gets());

sum = 1;
let currentFactorial = 1;

for (let i = 1; i <= N; i++){
    currentFactorial *= i;
    sum += currentFactorial / Math.pow(X, i);
}

print(sum.toFixed(5));

