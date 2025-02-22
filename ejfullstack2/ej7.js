const readLine = require("readline-sync");
const input = readLine.question("Introduce un número: ");
const num = parseInt(input);
let lastValue;

for (let i = 1; i <= num; i++) {
    let asterisks = 0;
    i === 1 ? asterisks = 1 : asterisks = lastValue+2
    lastValue = asterisks;
    console.log(' '.repeat(num-i) +'*'.repeat(asterisks));
}