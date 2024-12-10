let input = [
    '101',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let inputData = gets();

let isNotNum = isNaN(inputData);

if (isNotNum === true) {
    let word = inputData.split('').reverse().join('');
    print(word);
} else {
    let number = Number(inputData);
    print(number + 1);
}


