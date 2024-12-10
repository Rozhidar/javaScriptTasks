let input = [
    '0,0,0,5,0,3,2,3',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const N = gets().split(',').map(Number);

const biggerThanZero = [];
const zeros = [];

for (let i = 0; i < N.length; i++) {

    if (N[i] > 0 || N[i] < 0) {
        biggerThanZero.push(N[i]);

    } else if (N[i] === 0) {
        zeros.push(N[i]);

    }

}

let result = biggerThanZero.concat(zeros);

print(result);
