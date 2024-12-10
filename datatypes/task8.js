let input = [
    '2', 
    '5',
    '-3',
];
 
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let a = Number(gets());
let b = Number(gets());
let c = Number(gets());

let discriminent = Math.pow(b, 2) - 4 * a * c;

    root1 = (-b - Math.sqrt(discriminent)) / (2 * a);
    root2 = (-b + Math.sqrt(discriminent)) / (2 * a);

    print(`x1=${root1.toFixed(1)}`);
    print(`x2=${root2.toFixed(1)}`);

