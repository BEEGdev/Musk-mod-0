const readLine = require("readline-sync");
const str = readLine.question("Introduce una frase: ");

function isPalindrome(str) {
    let arrayStr = str.toLowerCase().split(' ');
    let processedStr = arrayStr.join('');
    let reversedStr = processedStr.split('').reverse();
    let isPalindrome = true;
    for (let i = 0; i < processedStr.length; i++) {
        if (processedStr[i] != reversedStr[i]) {
            isPalindrome = false;
            break;
        }
    }
    isPalindrome ? console.log('Es palíndromo') : console.log('No es palíndromo');
}

isPalindrome(str);
