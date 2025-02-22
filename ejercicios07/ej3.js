const readLine = require("readline-sync");
const num = readLine.question("Introduce el radio: ");
let value = parseInt(num)

function paintValues(r) {
    let lenght = 2 * Math.PI * r;
    let area = Math.PI * r * r;
    console.log(`La circunferencia es ${lenght}`);
    console.log(`El área es ${area}`);
}

paintValues(value);