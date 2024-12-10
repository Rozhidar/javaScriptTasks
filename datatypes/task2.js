let input = [
    '3', 
];
 
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let integerNumber = Number(gets());

let result = integerNumber * (integerNumber +1) / 2;

print(result);