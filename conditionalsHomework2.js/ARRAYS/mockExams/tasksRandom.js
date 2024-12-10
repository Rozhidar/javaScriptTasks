let input = [
    'He is no spring chicken anymore',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let sentence = gets().split(' ');

let newSentence = [];

for (let i = 0; i < sentence.length; i++) {
    let lengthOfWord = sentence[i].length;
    let ratio = lengthOfWord % 2 === 0;

    if (sentence[i].startsWith('a') || sentence[i].startsWith('e')
        || sentence[i].startsWith('i') || sentence[i].startsWith('o') || sentence[i].startsWith('u')
        || sentence[i].startsWith('A') || sentence[i].startsWith('E') || sentence[i].startsWith('I')
        || sentence[i].startsWith('O') || sentence[i].startsWith('U')) {

        let firstSymbol = sentence[i][0];
        let removedFirstLetter = sentence[i].slice(1);

        if (ratio) {
            let newWord = removedFirstLetter + firstSymbol + 'che' + 'e';
            newSentence.push(newWord);
        } else {
            let newWord = removedFirstLetter + firstSymbol + 'che';
            newSentence.push(newWord);
        }

    } else {

        if (ratio) {

            let word = sentence[i] + 'che' + 'e';
            newSentence.push(word);

        } else {
            let word = sentence[i] + 'che';
            newSentence.push(word);

        }

    }

}



print(newSentence.join(' '));