let input = [
    '2', 
    '4',
];
 
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let A = Number(gets());
let B = Number(gets());

if (A > B) {
    [A, B] = [B, A];
    print(`${A} ${B}`);
} else {
    print(`${A} ${B}`);
}