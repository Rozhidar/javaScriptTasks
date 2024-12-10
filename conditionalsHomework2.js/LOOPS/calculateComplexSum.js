let input = [
    '3',
    '2',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let N = Number(gets());
let X = Number(gets());

let result = 1;
let latestFactorial = 1;

for (let i = 1; i <= N; i++){
    latestFactorial *= i;
    result += latestFactorial / Math.pow(X, i);
}

print(result.toFixed(5));