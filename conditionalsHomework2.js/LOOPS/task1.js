let input = [
    '5',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let n = Number(gets());
let output = '';

for(let i = 1; i <= n; i++){
    output = output + i;

}

print(output);