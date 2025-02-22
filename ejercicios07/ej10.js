const readLine = require("readline-sync");

let initialMatrix = [['a', 'b', 'c'],['d', 'e', 'f']];

function transposeMatrix(initialMatrix) {
    let transposed = [];

    for (let i = 0; i < initialMatrix[0].length; i++) { 

        let arr = [];

        for (let k = 0; k < initialMatrix.length; k++) { 
            arr.push(initialMatrix[k][i]); 
        }

        transposed.push(arr);
    }

    console.log(transposed);
}

transposeMatrix(initialMatrix);
