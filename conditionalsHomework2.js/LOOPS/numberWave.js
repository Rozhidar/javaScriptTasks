let input = [
    '5',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const waveNumber = Number(gets());

let space = '';

for (let i = 1; i < waveNumber + 1; i++){
    space += i + ' ';
}

for (let i = waveNumber - 1; i >= 1; i--){
    space += i + ' ';
}

print(space);