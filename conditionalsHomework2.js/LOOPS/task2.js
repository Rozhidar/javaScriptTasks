let input = [
    '10',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let positiveInteger = Number(gets());
let result = '';

for (let i = 1; i <= positiveInteger; i++) {
    
    if (i % 3 === 0 || i % 7 === 0) {
        continue;
    }
    result += i + ' ';

}

print(result);
