// let number = 37;
// let divisor = 2;
// let maxDivisor = Math.round(Math.sqrt(number));
// let isPrime = true;

// while (isPrime && (divisor < maxDivisor)) {
//   if (number % divisor === 0) {
//     isPrime = false;
//   }
//   divisor++;
// }

// console.log(`${number} is prime = ${isPrime}`);



// What is a prime number? 
// https://www.youtube.com/watch?v=mIStB5X4U8M

// let n = 7;
// let m = 17;

// for (let i = n; i <= m; i++) {
//   let isPrime = true;
//   let maxDivisor = Math.round(Math.sqrt(i));

//   for (let j = 2; j <= maxDivisor; j++) {
//     if (i % j === 0) {
//       isPrime = false;
//       break;
//     }
//   }

//   if (isPrime) {
//     console.log(`${i} is a prime number`);
//   }
// }

// let num = 123;

// let j = Math.floor(num / 100);
// let k = Math.floor((num % 100) / 10);
// let l = num % 10;

// console.log(j);
// console.log(k);
// console.log(l);


// let g = 'string';
// let j = g.split('').reverse().join('');
// console.log(j);


// let m = 'dfg';
// let l = isNaN(m);
// console.log(l);

// const food = ['dog', 'apple', 'cat', 'sea'];
// food[0] = 'wolf';
// food.push('puppy');
// console.log(food.indexOf('wolf'));
// console.log(food);

// const l = ['e', 'f', 'h', 'd'];
// l.unshift('p');
// console.log(l);

// const k = [1, 2, 3, 4];
// k.pop();
// console.log(k);

// const j = ['p', 'l', 'p'];
// const removed = j.pop();
// console.log(removed);

// const r = [5, 7, 99, 11];
// r.shift();
// console.log(r);

// let word = 'bob';
// let convert = word.charCodeAt(0) - 96;
// console.log(convert);

// let input = [
//     '28',
//     '3',
//     'coffee',
//     'tea',
//     'pineapple',
// ];

// let print = this.print || console.log;
// let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

// const targetNum = Number(gets());
// const countOfwords = Number(gets());

// let totalDistance = 0;

// for (let i = 0; i < countOfwords; i++) {
//     let word = gets();

//     let sum = 0;
//     for (let j = 0; j < word.length; j++) {
//         let numberOfLetterInTable = word.charCodeAt(j) - 96;
//         sum += numberOfLetterInTable;
//     }

//     let distance = Math.abs(targetNum - sum);
//     print(`${word} ${distance}`);
//     totalDistance += distance;
// }

// const averageDistance = totalDistance / countOfwords;
// print(averageDistance.toFixed(2));



// let k = [1, 2, 3, 4];

// let arr = k.slice(0, 2);

// console.log(arr);


// var arr = ["apple", "orange", "banana"];
// arr.splice(1,1);
// console.log(arr);

// const arr = ['h', 'i', 'l'];
// let n = arr.indexOf('l');
// console.log(n);

// const arr = [1, 8, 9, 0];
// console.log(arr[-1]); // it is not on the list of items!

// const arr = [1, 2, 3, 4, 5];
// let d = arr.splice();
// console.log(arr);


// const arr = [4, 5, 9, 11];

// arr.sort((a, b) => b - a);

// console.log(arr);

//////////////////////////////////




// let input = [
//     '2, 3, 1, 5, 6',
// ];

// let print = this.print || console.log;
// let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

// const arr = gets().split(', ').map(Number);

// arr.sort((a, b) => b - a);

// print(arr);

/////////////////////////////////////////////////////////////////


// const arr = [9, 8, 4, 0];

// let currentItem = 2;

// let res = arr[currentItem];

// console.log(res);

/////////////////////////////////////////////////////////////////////

// const arr = [0, 4, 9, 0];

// let l = [];

// for (let i = 0; i < arr.length; i++) {
//     l.push(arr[i]);
// }

// console.log(l);

//////////////////////////////////////////////////////////////

// let count = new Array(10).fill(0);

// console.log(count);

//////////////////////////////////

// const g = [7, 9, 0, 21, 94];
// g.sort();
// console.log(g);

/////////////////////////////

// let i = 9867.99;
// let rounded = Math.round(i);
// console.log(rounded);

////////////////////////////////////////////

// const num = 10; 

// let nonPrimes = [];
// let primes = [];

// for (let i = 1; i <= num; i++){
//     for (let j = 2; j <= num; j++){
//         if (j % i === 0 && j !== i  && i !== 1) {
//             if (!nonPrimes.includes(j)){
//                 nonPrimes.push(j);

//             } 
//         }
//     }
// }

// console.log(nonPrimes);

//////////////////////////////////////////////


// let arr = ['a', 'c', 'd', 'b', 'e'];
// arr.sort();
// console.log(arr);

///////////////////////////////////////////

// let arr = [0, 9, 8, 9];

// let isExistant = arr.indexOf(8) !== -1;
// console.log(isExistant);

//////////////////////////////////////////////////

// let g = 9;

// console.log(Number.isNaN(g));

//////////////////////////////

///////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////

// set1 = new Set();
// set1.add(33);
// console.log(set1);

//////////////////////////////////


//////////////////////////////////////////////////////////////////////

// let f = 'cigars';
// let some = `Let's say no to ${f}`;
// console.log(some);

////////////////////////////////////////

// function toUpper(string) {
//     return string.toUpperCase();
// }

// const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

// const catsToUpper = cats.map(toUpper);

// console.log(catsToUpper);

/////////////////////////////////////////////////////////////

// function firstLetter(cat) {
//     return cat.startsWith('L');

// }

// const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

// const filtered = cats.filter(firstLetter);

// console.log(filtered);

//////////////////////////////////////////////////////////

// let num = 10;
// let result;

// result = num === 10 ? console.log('yes') : console.log('no');

///////////////////////////////////////////////

/*
splice
for of
filter
split
join
toSring
array.from
str.substring

*/ 
////////////////////////////////////////////////////

// let arr = [0, 1, 2, 3];
// arr.reverse();
// console.log(arr);

//////////////////////////////////////////////////////

// SORT NUMBERS:

// const numbers = [3, 1, 4, 1, 5];
// const sorted = numbers.sort((a, b) => a - b); // or b - a!
// // numbers and sorted are both [1, 1, 3, 4, 5]
// sorted[0] = 10;
// console.log(numbers[0]); // 10

///////////////////////////////////////////////

// check if it is number:

// if (Number.isNaN(Number(variable)))

//////////////////////////////////////////////////

// let word = 'adjdjod';

// if (word.startsWith('a')) {
//     console.log('yes');
    
// }

///////////////////////////////////////////////////


