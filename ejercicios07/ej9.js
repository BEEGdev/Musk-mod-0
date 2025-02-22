const readLine = require("readline-sync");
const num = readLine.question("Introduce un número: ");
let value = parseInt(num);

function createMatrix(value) {
    let matrix = [];
    for (let i = 0; i < value; i++) {
        let arr = [];
        for (let k = 0; k < value; k++) {
            arr.push(k*i);
        }
        matrix.push(arr);
    }
    console.log(matrix);
}

createMatrix(value);