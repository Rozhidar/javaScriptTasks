let input = [
    'real',
    '-2.5',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let typeOfInput = gets();
let valueOfVariable = gets();

if (typeOfInput === 'integer') {
    valueOfVariable = Number(valueOfVariable);
    print(valueOfVariable + 1);

} else if (typeOfInput === 'real') {
    valueOfVariable = Number(valueOfVariable);
    result = valueOfVariable + 1;
    print(result.toFixed(2));

}




else if (typeOfInput === 'text') {
    print(`${valueOfVariable}*`);

}