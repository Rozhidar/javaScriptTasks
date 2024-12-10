let input = [
    '3',
    '1',
    '1',
    '7',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const n = parseInt(gets());

let sumOfNumbers = 0;
let words = '';

for (let i = 0; i < n; i++) {
    let item = gets();

    let checkWordOrNumber = isNaN(item);
    if (checkWordOrNumber === false) {

        sumOfNumbers += Number(item);

    } else {
        words += '-' + item;

    }

}

if (words === '') {
    print('no words');
} else {
    print(words.slice(1));
}
print(sumOfNumbers);
