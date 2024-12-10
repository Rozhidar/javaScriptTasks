let input = [
    '4',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let limitCard = gets();

const deckOfCards = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

for (const card of deckOfCards) {
    if (card === limitCard) {
        print(`${card} of spades, ${card} of clubs, ${card} of hearts, ${card} of diamonds`);
        break;
    }
    print(`${card} of spades, ${card} of clubs, ${card} of hearts, ${card} of diamonds`);


}



