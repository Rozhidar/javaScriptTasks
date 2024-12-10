let input = [
    '1:55 PM',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let inputTime = gets();

let separator = inputTime.indexOf(':');
let hour = Number(inputTime.slice(0, separator));
let minutes = Number(inputTime.slice(separator + 1, 5));
let designator = inputTime.slice(-2);

if ((hour >= 1 && hour <= 11 && minutes <= 59 && designator === 'PM') || (hour === 12 || hour === 1 || hour === 2) && minutes <= 59 && designator === 'AM') {
    print('beer time');

} else if ((hour >= 3 && hour <= 11 && minutes <= 59 && designator === 'AM') || (hour === 12 && minutes <= 59 && designator === 'PM')) {
    print('non-beer time');

} else if (isNaN(hour) || hour > 12 || minutes > 59 || (designator !== "AM" && designator !== "PM")) {
    print('invalid time');

}
    



