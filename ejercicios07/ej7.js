const readLine = require("readline-sync");
const str = readLine.question("Introduce una frase: ");
let array = str.split(' ');

function createMatrix(array) {
    let matrix = [];

    while (array.length > 0) {
        let arr = [];
        for (let i = 0; i < 5; i++) {
            arr.push(array[0]);
            console.log(array[0])
            array.shift();
            if (array.length === 0) break;
        }
        matrix.push(arr);
    }

    console.log(matrix);
}

createMatrix(array);