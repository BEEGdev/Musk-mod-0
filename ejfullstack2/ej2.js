const readLine = require("readline-sync");
let nums = [];
let isPair = false;

const input1 = readLine.question("Introduce un número: ");
const num1 = parseInt(input1);

nums.push(num1);

const input2 = readLine.question("Introduce otro número: ");
const num2 = parseInt(input2);

nums.push(num2);

const input3 = readLine.question("Introduce otro número: ");
const num3 = parseInt(input3);

nums.push(num3);

for (i in nums) {
    (nums[i] % 2) === 0 ? isPair = true : isPair = false;
    if (isPair == true) {
        console.log('Hay al menos un número par');
        break;
    }
}

if (!isPair) console.log('No hay ningún par');