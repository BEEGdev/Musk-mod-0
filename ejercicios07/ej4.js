const readLine = require("readline-sync");
const str = readLine.question("Introduce los números: ");
let arr = str.split(',');

function handleArray(arr){
    let sum=0;
    for (let i in arr){
        sum += parseInt(arr[i]);
    }
    console.log(`La suma es ${sum}`);
    console.log(`La media aritmética es ${sum/arr.length}`);
}

handleArray(arr);