let input = [
    '10',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const n = Number(gets());

let result = '';
let nonPrimes = [];

for (let divisor = 1; divisor <= n; divisor++) {

    for (let number = 2; number <= n; number++) {

        if ((number % divisor === 0) && (number !== divisor) && (divisor !== 1)) {

            if (!nonPrimes.includes(number)) {
                nonPrimes.push(number);
            }
        }

    }

    if (!nonPrimes.includes(divisor)) {
        result += '1';
        print(result);

    } else {
        result += '0';

    }

}

