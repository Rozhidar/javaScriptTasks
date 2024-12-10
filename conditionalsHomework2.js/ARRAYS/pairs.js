let input = [
    '6',
    '1 2 3 4 3 6 5 8 3 9',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const sumResult = parseInt(gets());

const arr = gets().split(' ').map(Number);

let arePairs = true;

for (let i = 0; i < arr.length; i++) {

    for (let j = i + 1; j < arr.length; j++) {

        if (arr[i] + arr[j] === sumResult) {
            print(arr[i] + ',' + arr[j]);
            arePairs = false;
        }
    }
}

if (arePairs) {
    print('no pairs');

}