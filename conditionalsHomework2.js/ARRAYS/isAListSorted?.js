let input = [
    '3',
    '1,2,3,4,5',
    '1,2,8,9,9',
    '1,2,2,3,2',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const N = Number(gets());

for (let i = 0; i < N; i++) {
    let numsList = gets().split(',');

    let nums = new Array(numsList.length);

    for (let j = 0; j < numsList.length; j++) {
        nums[j] = Number(numsList[j]);

    }

    let isSorted = true;

    for (let j = 0; j < nums.length - 1; j++) {
        if (nums[j] > nums[j + 1]) {
            isSorted = false;
            break;
        }
    }

    print(isSorted);
}