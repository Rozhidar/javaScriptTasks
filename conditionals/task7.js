let input = [
    '100',
    '20',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let countOfTextMessages = Number(gets());
let countOfMinutes = Number(gets());

let calcAdditionalMessages = 0;
let calcAdditionalMinutes = 0;
let calcAdditionalTaxes = 0;

let additionalMessagesPrice = 0;
let additionalMinutesPrice = 0;

let bill = 0;
let taxForMessagesCalc = 0;
let taxForMinutesCalc = 0;


if (countOfTextMessages <= 20 && countOfMinutes <= 60) {

    calcAdditionalMessages = 0;
    calcAdditionalMinutes = 0;
    calcAdditionalTaxes = 0;
    additionalMessagesPrice = 0;
    additionalMinutesPrice = 0;
    bill = 12;

} else if (countOfTextMessages > 20 && countOfMinutes > 60) {

    calcAdditionalMessages = countOfTextMessages - 20;
    additionalMessagesPrice = calcAdditionalMessages * 0.06;
    taxForMessagesCalc = additionalMessagesPrice * 0.20;

    calcAdditionalMinutes = countOfMinutes - 60;
    additionalMinutesPrice = calcAdditionalMinutes * 0.10;
    taxForMinutesCalc = additionalMinutesPrice * 0.20;

    calcAdditionalTaxes = taxForMessagesCalc + taxForMinutesCalc;

    bill = 12 + additionalMessagesPrice + additionalMinutesPrice + calcAdditionalTaxes;

} else if (countOfTextMessages <= 20 && countOfMinutes > 60) {

    calcAdditionalMessages = 0;
    additionalMessagesPrice = 0;

    calcAdditionalMinutes = countOfMinutes - 60;
    additionalMinutesPrice = calcAdditionalMinutes * 0.10;
    taxForMinutesCalc = additionalMinutesPrice * 0.20;

    calcAdditionalTaxes = taxForMessagesCalc + taxForMinutesCalc;

    bill = 12 + additionalMessagesPrice + additionalMinutesPrice + calcAdditionalTaxes;

} else if (countOfTextMessages > 20 && countOfMinutes <= 60) {

    calcAdditionalMessages = countOfTextMessages - 20;
    additionalMessagesPrice = calcAdditionalMessages * 0.06;
    taxForMessagesCalc = additionalMessagesPrice * 0.20;

    calcAdditionalMinutes = 0;
    additionalMinutesPrice = 0;

    calcAdditionalTaxes = taxForMessagesCalc + taxForMinutesCalc;

    bill = 12 + additionalMessagesPrice + additionalMinutesPrice + calcAdditionalTaxes;

}

print(`${calcAdditionalMessages} additional messages for ${additionalMessagesPrice.toFixed(2)} levas`);
print(`${calcAdditionalMinutes} additional minutes for ${additionalMinutesPrice.toFixed(2)} levas`);
print(`${calcAdditionalTaxes.toFixed(2)} additional taxes`);
print(`${bill.toFixed(2)} total bill`);