const readLine = require("readline-sync");
const num = parseInt(readLine.question("Introduce un número: "));

function createMatrix(size) {
    let matrix = [];
    let lastValue = 1;

    for (let i = 0; i < size; i++) {
        let row = [];
        for (let j = 0; j < size; j++) {
            row.push(lastValue++);
        }
        matrix.push(row);
    }
    
    console.log(matrix);
}

createMatrix(num);