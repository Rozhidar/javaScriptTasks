let input = [
    '1020340567.89',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let n = gets();

while (n.length > 1) {
    sum = 0;

    for (let i = 0; i < n.length; i++) {
        if (n[i] >= '0' && n[i] <= '9') {
            sum += Number(n[i]);

        }
    }

    n = sum.toString();
}

print(n);