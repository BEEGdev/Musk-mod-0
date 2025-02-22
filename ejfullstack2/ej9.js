const readLine = require("readline-sync");
let input = readLine.question("Introduce un número del 1 al 10: ");
let num = parseInt(input);

function numToString(num) {
    switch (num) {
        case 1: console.log('El número es uno')
            break;
        case 2: console.log('El número es dos')
            break;
        case 3: console.log('El número es tres')
            break;
        case 4: console.log('El número es cuatro')
            break;
        case 5: console.log('El número es cinco')
            break;
        case 6: console.log('El número es seis')
            break;
        case 7: console.log('El número es siete')
            break;
        case 8: console.log('El número es ocho')
            break;
        case 9: console.log('El número es nueve')
            break;
        case 10: console.log('El número es diez')
            break;
    }
}


while (num < 0 || num > 10 || isNaN(num)) {
    input = readLine.question("No válido Introduce un número del 1 al 10: ");
    num = parseInt(input);
}

numToString(num);


