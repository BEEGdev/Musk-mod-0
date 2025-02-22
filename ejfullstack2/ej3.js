const readLine = require("readline-sync");
const input = readLine.question("Introduce un número: ");
const num = parseInt(input);

let result = 1;
for (let i = 1; i <= num; i++) {
    result *= i;
}

console.log(result);