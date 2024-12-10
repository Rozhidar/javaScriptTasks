let input = [
    '2',
    '5',
    '-2',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let firstNumber = Number(gets());
let secondNumber = Number(gets());
let thirdNumber = Number(gets());

let sign;

if (firstNumber === 0 || secondNumber === 0 || thirdNumber === 0) { 
    sign = '0';
} else if (firstNumber > 0 && secondNumber > 0 && thirdNumber > 0) { 
    sign = '+';
} else if (firstNumber > 0 && secondNumber > 0 && thirdNumber < 0) { 
    sign = '-';
} else if (firstNumber > 0 && secondNumber < 0 && thirdNumber > 0) { 
    sign = '-';
} else if (firstNumber > 0 && secondNumber < 0 && thirdNumber < 0) { 
    sign = '+';
} else if (firstNumber < 0 && secondNumber > 0 && thirdNumber > 0) { 
    sign = '-';
} else if (firstNumber < 0 && secondNumber > 0 && thirdNumber < 0) { 
    sign = '+';
} else if (firstNumber < 0 && secondNumber < 0 && thirdNumber > 0) { 
    sign = '+';
} else if (firstNumber < 0 && secondNumber < 0 && thirdNumber < 0) { 
    sign = '-';
}
 
print(sign);