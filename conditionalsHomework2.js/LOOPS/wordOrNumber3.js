let input = [
    '3',
    '1',
    '1',
    '7',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const n = Number(gets());

let words = "";
let numbers = 0;
let prevTypeIsNumber = false;
 
for (let i = 0; i < n; i++) {
    const input = gets();
 
    let isNumber = true;
 
    for (const char of input) {
        if (input.indexOf(char) === 0 && char === "-") {
            continue;
        }
        if (char === ".") {
            continue;
        }
        if (char < "0" || char > "9") {
            isNumber = false;
            break;
        }
    }
 
    if (isNumber) {
        if (prevTypeIsNumber) {
            const current = parseFloat(input);
            numbers += current;
        } else {

            if (words !== '') {
                console.log(words);
                words = '';
            }
            const current = parseFloat(input);
            numbers = current;
        }

        prevTypeIsNumber = true;
    } else {
        if (prevTypeIsNumber) {
            console.log(numbers);
            numbers = 0;
        }
        if (words !== '') {
            words += '-' + input;
        } else {
            words += input;
        }

        prevTypeIsNumber = false;
    }
}
 
if (prevTypeIsNumber) {
    console.log(numbers);
} else if (words !== '') {
    console.log(words);
}