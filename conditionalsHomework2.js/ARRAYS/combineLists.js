let input = [
    '2,3,1',
    '5,2,3',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let firstArr = gets().split(',').map(Number);
let secondArr = gets().split(',').map(Number);

let generalList = [];

for (let i = 0; i < firstArr.length; i++) {
    generalList.push(firstArr[i]);
    generalList.push(secondArr[i]);

}

print(generalList.join(','));