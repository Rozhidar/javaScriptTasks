let input = [
    '3',
    '1',
    '8',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let smallBottles = Number(gets());
let bigBottles = Number(gets());
let truckCapacity = Number(gets());

let maximalBigBottles = Math.floor(truckCapacity / 5);

if (maximalBigBottles > bigBottles) maximalBigBottles = bigBottles;

let remainingSpace = truckCapacity - (maximalBigBottles * 5);

if (remainingSpace > smallBottles) {
    print(-1);

} else {
    print(remainingSpace);

}