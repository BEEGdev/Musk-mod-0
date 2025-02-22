const readLine = require("readline-sync"); 
const num = readLine.question("Introduce el radio: "); 
let value = parseInt(num)


function circleLenght(r){
    return 2 * Math.PI * r;
}


console.log(circleLenght(value));