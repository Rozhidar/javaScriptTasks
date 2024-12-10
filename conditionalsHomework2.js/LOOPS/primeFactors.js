let input = [
    '100',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let n = Number(gets());

let divisor = 2;

while (n > 1) {
    if (n % divisor === 0) {
        print(divisor);
        n /= divisor;
    } else if (n % divisor !== 0) {
        divisor += 1;
    }

}