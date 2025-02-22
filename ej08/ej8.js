const readLine = require("readline-sync"); 
const input = readLine.question("Introduce el texto: "); 
num = parseInt(input);

function isPrime (num) {
    for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
        if (num % i === 0) return false;
    }
    return num > 1;
}

isPrime(num) ? console.log(num + ' Es primo'):console.log(num +' No es primo');