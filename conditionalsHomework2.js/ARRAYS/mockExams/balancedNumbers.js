let input = [
    '275',
    '693',
    '110',
    '742',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let result = 0;

for (let i = 0; i <= 1000; i++) {
    let num = +gets();
    let number = num.toString().split('').map(Number);

    if (number[0] + number[2] === number[1]) {
        result += num;

    } else {
        break;
    }
}

print(result);