let input = [
    'LLRD',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const inputData = gets().split('');

let horizontalMovement = 0;
let verticalMovement = 0;

let result = [];

for (let i = 0; i < inputData.length; i++) {

    if (inputData[i] == 'R') horizontalMovement++;
    if (inputData[i] == 'L') horizontalMovement--;
    if (inputData[i] == 'U') verticalMovement++;
    if (inputData[i] == 'D') verticalMovement--;

}

result.push(horizontalMovement);
result.push(verticalMovement);

print(`(${result.join(', ')})`);
