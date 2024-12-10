let input = [
    'own',
    'owned',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const firstString = gets().split('');
const secondString = gets().split('');

let result = '';
let areEqual = true;

for (let i = 0; i < Math.max(firstString.length, secondString.length); i++) {

    if (firstString[i] === secondString[i]) {
        continue;
    }

    if (!firstString[i]) {
        areEqual = false;
        result = 'first';
        break;
    }

    if (!secondString[i]) {
        areEqual = false;
        result = 'second';
        break;
    }

    if (firstString[i] < secondString[i]) {
        areEqual = false;
        result = 'first';
        break;
    }

    if (firstString[i] > secondString[i]) {
        areEqual = false;
        result = 'second';
        break;
    }

}

if (areEqual) result = 'equal';

print(result);