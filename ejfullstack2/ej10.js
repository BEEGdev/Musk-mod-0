const readLine = require("readline-sync");
const randomNumber = Math.floor(Math.random() * 10) + 1;
let counter=0;
console.log('Adivina el número del 1 al 10')

function guess(){
    let input = readLine.question("Adivina: ");
    let num = parseInt(input);
    counter++
    return num;
}

while(guess()!==randomNumber){
    console.log(`Fallaste, intentos: ${counter}`);
}

console.log(`Acertaste, has necesitado ${counter} intentos`)