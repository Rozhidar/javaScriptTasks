let input = [
    'peshoishere',
    '3',
    'eho',
    'piere',
    'telerik',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const titleArr = gets().split('');
const n = Number(gets());

