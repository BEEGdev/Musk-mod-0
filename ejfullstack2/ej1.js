const readLine = require("readline-sync");
const input = readLine.question("Introduce un número: ");
const num = parseInt(input);
let isPositive = ''; //sé que es nomeclatura boolean pero no quiero complicarme
let isEven = '';


if (isNaN(num)) {
    console.log("No es un número");
} else {
    num < 0 ? isPositive = 'negativo' : isPositive = 'positivo';
    (num % 2) === 0 ? isEven = 'par' : isEven = 'impar';

    console.log(`El número es ${isPositive} y ${isEven}`);
} 