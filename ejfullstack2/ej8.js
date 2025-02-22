const readLine = require("readline-sync");
const input1 = readLine.question("Introduce altura: ");
const height = parseInt(input1);
const input2 = readLine.question("Introduce longitud: ");
const length = parseInt(input2);


for (let i = 1; i <= height; i++) {

    if (i === 1 || i === height) {
        console.log('*'.repeat(length));
    }
    else {
        console.log('*' + ' '.repeat(length - 2) + '*');
    }
}
