let input = [
    '4',
    '1 2 3 2 1',
    '2 1',
    '1 2 2 1',
    '4',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const N = Number(gets());


for (let i = 0; i < N; i++) {
    let currentNum = gets().split(' ').map(Number);

    let arr = currentNum.length;

    let isSymmetric = 'Yes';

    for (let j = 0; j < Math.floor(currentNum.length / 2); j++) {

        if (currentNum[j] !== currentNum[arr - (j + 1)]) {
            isSymmetric = 'No';
        }

    }

    print(isSymmetric);
}