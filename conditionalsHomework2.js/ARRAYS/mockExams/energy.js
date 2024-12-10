let input = [
    '3621',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const arr = gets().split('').map(Number);


let odds = 0;
let evens = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        evens += arr[i];

    } else {
        odds += arr[i];

    }
}

if (evens > odds) print(`${evens} energy drinks`);
if (evens < odds) print(`${odds} cups of coffee`);
if (evens == odds) print(`${evens} of both`);