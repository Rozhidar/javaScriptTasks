let input = [
    '4,1,2',
    '1,3,4,2',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const firstArr = gets().split(',').map(Number);
const secondArr = gets().split(',').map(Number);

let result = '';

for (let i = 0; i < firstArr.length; i++) {
    let start = secondArr.indexOf(firstArr[i]);

    for (let j = start; j <= secondArr.length; j++) {

        if (j === secondArr.length) {
            result += '-1,';
            break;

        } else if (secondArr[j] > firstArr[i]) {
            result += `${secondArr[j]},`;
            break;

        }
    }
}

print(result.slice(0, result.length - 1));