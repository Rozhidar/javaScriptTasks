let input = [
    '0 15 30',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const degreesInCelsius = gets().split(' ').map(Number);

let degreesToFahrenheit = 0;

for (let i = 0; i < degreesInCelsius.length; i++) {
    degreesToFahrenheit = degreesInCelsius[i] * 1.8 + 32;

    print(degreesToFahrenheit);

}