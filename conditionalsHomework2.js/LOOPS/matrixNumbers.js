let input = [
    '3',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let N = Number(gets());

let space = '';

for (let i = 1; i <= N; i++){

    for (let j = i; j < N + i; j++){
        space += j + ' ';
    }

    print(space);
    space = '';
}
