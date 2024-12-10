let input = [
    '2', 
];
 
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let validcardSign = gets();

if (validcardSign >= 2 && validcardSign <= 10 || validcardSign === 'J' || validcardSign === 'Q'
    || validcardSign === 'K' || validcardSign === 'A') {

        print('yes');
    
    } else {

        print('no');

    }

