let input = [
    '4',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let cardSign = gets();

const cards = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

let check = cards.includes(cardSign);

if (check === true) {
    for (const card of cards){
        print(`${card} of spades, ${card} of clubs, ${card} of hearts, ${card} of diamonds`);

        if (card === cardSign) break;
    }
}



