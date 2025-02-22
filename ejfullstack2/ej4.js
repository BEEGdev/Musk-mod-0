const readLine = require("readline-sync");
const input = readLine.question("Introduce un número: ");
const num = parseInt(input);

for (let i = 1; i < 11; i++) {
    let result = num * i;
    console.log(`${num} x ${i} = ${result}`);
}