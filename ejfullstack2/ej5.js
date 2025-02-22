const readLine = require("readline-sync");
const input = readLine.question("Introduce una frase: ");
const str = input;
let counter = 0;
for (let i = 0; i < str.length; i++) {
    if (str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u') {
        counter++;
    }
}

console.log(`el número de vocales es ${counter}`);