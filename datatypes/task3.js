let input = [
    '5', 
    '11',
];
 
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let firstNum = Number(gets());
let secondNum = Number(gets());

let bigger = Math.max(firstNum, secondNum);

print(bigger);
