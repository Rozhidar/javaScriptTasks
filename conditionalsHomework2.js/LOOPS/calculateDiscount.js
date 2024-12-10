let input = [
    '2',
    '50',
    '40',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let n = Number(gets());

let result = 0;

for (let i = 0; i < n; i++) {
    let currentPrice = Number(gets());

    result = currentPrice * 0.35;
    print(result.toFixed(2));
}

