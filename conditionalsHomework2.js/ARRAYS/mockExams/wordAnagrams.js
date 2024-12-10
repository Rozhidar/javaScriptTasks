let input = [
    'anagram',
    '6',
    'gramana',
    'aaagrnm',
    'anagra',
    'margana',
    'abc',
    'xy',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let w = gets().toLocaleLowerCase().split('').sort().join('');

const numberOfWords = Number(gets());

for (let i = 0; i < numberOfWords; i++) {
    let word = gets().toLowerCase().split('').sort().join('');

    if (word === w) {
        print('Yes');

    } else {
        print('No');

    }
}

