let input = [
    '2',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let n = Number(gets());

let space = '';

for(let i = 1; i <= n; i++){
    for (let j = i; j < n + i; j++){
        space += j + ' ';

    }

    print(space);
    space = '';
    
}