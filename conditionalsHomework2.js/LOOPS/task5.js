let input = [
    '2',
    '50',
    '40',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let numberOfItems = Number(gets());

for (let i = 0; i < numberOfItems; i++){
    let eachItem = Number(gets());

    eachItem = eachItem * 0.35;
    print(eachItem.toFixed(2));
}
