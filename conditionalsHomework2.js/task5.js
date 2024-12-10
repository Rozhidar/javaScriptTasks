let input = [
    '3',
    '3',
    '3',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let firstNumber = Number(gets());
let secondNumber = Number(gets());
let thirdNumber = Number(gets());

let one;
let two;
let three;

if (firstNumber >= secondNumber) { 
    if (firstNumber >= thirdNumber) { 
        one = firstNumber; 

        if (secondNumber >= thirdNumber) { 
            two = secondNumber; 
            three = thirdNumber; 
        } else {
            two = thirdNumber; 
            three = secondNumber; 
        }

    } else {
        one = thirdNumber;
        two = firstNumber;
        three = secondNumber;
    }


    } else {

        if (secondNumber >= thirdNumber) {
            one = secondNumber;
            if (firstNumber >= thirdNumber) {
                two = firstNumber;
                three = thirdNumber;
            } else {
                two = thirdNumber;
                three = firstNumber;
            }
        } else { 
            one = thirdNumber; 
            two = secondNumber; 
            three = firstNumber; 
        }
    }


    print(`${one} ${two} ${three}`);