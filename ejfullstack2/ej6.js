const readLine = require("readline-sync");
const input = readLine.question("Introduce un número: ");
const year = parseInt(input);

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log(`${year} es bisiesto`);
}
else {
    console.log(`${year} no es bisiesto`);
}