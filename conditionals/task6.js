let input = [
    'June',
    '24',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let month = gets();
let date = Number(gets());

switch (month) {
    case 'March':
        if (date >= 20 && date <= 31) {
            print('Spring'); break;

        } else if (date >= 1 && date <= 19) {
            print('Winter'); break;
        }

    case 'April':
        if (date >= 1 && date <= 31) {
            print('Spring'); break;
        }

    case 'May':
        if (date >= 1 && date <= 31) {
            print('Spring'); break;
        }

    case 'June':
        if (date >= 1 && date <= 20) {
            print('Spring'); break;

        } else if (date >= 21 && date <= 31) {
            print('Summer'); break;
        }

    case 'July':
        if (date >= 1 && date <= 31) {
            print('Summer'); break;
        }

    case 'August':
        if (date >= 1 && date <= 31) {
            print('Summer'); break;
        }

    case 'September':
        if (date >= 1 && date <= 21) {
            print('Summer'); break;

        } else if (date >= 22 && date <= 31) {
            print('Autumn'); break;
        }

    case 'October':
        if (date >= 1 && date <= 31) {
            print('Autumn'); break;
        }

    case 'November':
        if (date >= 1 && date <= 31) {
            print('Autumn'); break;
        }

    case 'December':
        if (date >= 1 && date <= 20) {
            print('Autumn'); break;

        } else if (date >= 21 && date <= 31) {
            print('Winter'); break;
        }

    case 'January':
        if (date >= 1 && date <= 31) {
            print('Winter'); break;
        }

    case 'February':
        if (date >= 1 && date <= 31) {
            print('Winter'); break;
        }


}