const readLine = require("readline-sync");
const num = readLine.question("Introduce el radio: ");
let value = parseInt(num)

function circleArea(r) {
    return Math.PI * r * r;
}


console.log(circleArea(value));