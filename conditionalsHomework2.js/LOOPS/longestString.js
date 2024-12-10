let input = [
    'pizza',
    'macaroni',
    'kiufte',
    'banica',
    'END',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let foodType = gets();

let longestString = '';

while (foodType !== 'END') {
    if (foodType.length >= longestString.length) {
        longestString = foodType;
    }
    foodType = gets();
}

print(longestString);