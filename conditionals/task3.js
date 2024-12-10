let input = [
    '1',
];
 
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let score = Number(gets());
let result = 0;

if (score >= 1 && score <= 3) {
    result = score * 10;
    print(result);

} else if (score > 3 && score <= 6){
    result = score * 100;
    print(result);

} else if (score > 6 && score <= 9) {
    result = score * 1000;
    print(result);

} else {
    print('invalid score');

}