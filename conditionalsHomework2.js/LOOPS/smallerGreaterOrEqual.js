let input = [
    '4',
    '-1',
    '4',
    '4',
    '4',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const N = Number(gets());

let firstNumber = Number(gets());
let sign = '';
let output = firstNumber;

for (let i = 1; i < N; i++){
    let currentNumber = Number(gets());
    
    if (firstNumber < currentNumber){
        sign = '<';
    } else if ( firstNumber > currentNumber){
        sign = '>';
    } else if (firstNumber === currentNumber){
        sign = '=';
    }
    
    output += sign + currentNumber;
    firstNumber = currentNumber;

    
}

print(output);