let input = [
    '4', 
    '3',
    '11',
    '40',
];
 
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let days = Number(gets());
let hours = Number(gets());
let minutes = Number(gets());
let seconds = Number(gets());

let daysCalc = days * 24 * 60 * 60;
let hoursCalc = hours * 60 * 60;
let minutesCalc = minutes * 60;

let calculationOfSeconds = daysCalc + hoursCalc + minutesCalc + seconds;

print(calculationOfSeconds);