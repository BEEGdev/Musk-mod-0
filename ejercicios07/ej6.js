const readLine = require("readline-sync");
const num = readLine.question("Introduce un número: ");
let value = parseInt(num);

function createMatrix(value) {
    let matrix = [];
    let arr = [];
    let lastValue;
    for (let i = 0; i < value; i++) {
        arr = []
        for (let k = 1; k <= value; k++) {
            if (i==0){
                lastValue=k;
                arr.push(k);
            }
            else{
                lastValue+=1;
                arr.push(lastValue);
            }
        }
    matrix.push(arr);
    }
    console.log(matrix);
}

createMatrix(value);