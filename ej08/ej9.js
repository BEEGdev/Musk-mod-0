const readLine = require("readline-sync"); 
const str = readLine.question("Introduce el texto: ");

function isBalanced(str) {
    let arr = [];

    for (let char of str) {
        if (char === '(') {
            arr.push(char);
        } else if (char === ')') {
            if (arr.length === 0) {
                return false; 
            }
            arr.pop();
        }
    }

    return arr.length === 0; 
}

isBalanced(str) ? console.log('Está balanceado') : console.log('No está balanceado');