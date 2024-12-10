let input = [
    '0,1,-1',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const sourceArr = gets().split(',').map(Number);

const arrNegativeNums = [];
const arrZeros = [];
const arrPositiveNums = [];

for (let i = 0; i < sourceArr.length; i++) {

    if (sourceArr[i] < 0) {
        arrNegativeNums.push(sourceArr[i]);
    }

    if (sourceArr[i] === 0) {
        arrZeros.push(sourceArr[i]);
    }

    if (sourceArr[i] > 0) {
        arrPositiveNums.push(sourceArr[i]);
    }
}

const strangeArr = arrNegativeNums.concat(arrZeros).concat(arrPositiveNums);

print(strangeArr);
