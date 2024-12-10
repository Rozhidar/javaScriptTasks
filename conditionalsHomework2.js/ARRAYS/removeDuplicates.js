let input = [
    'c,c,a,b,a,a,b,c',

];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const arr = gets().split(',');

const newArr = [];

for (let i = 0; i < arr.length; i++) {

    if (newArr.indexOf(arr[i]) === -1) {
        newArr.push(arr[i]);
    }
}

print(newArr.join(','));