const readLine = require("readline-sync"); 
const str = readLine.question("Introduce la secuencia de paréntesis, corchetes y llaves: ");

function isBalanced(str) {
    let stack = [];
    const pairs = { ')': '(', ']': '[', '}': '{' };

    for (let char of str) {
        if (char === '(' || char === '[' || char === '{') {
            stack.push(char);
        } else if (char === ')' || char === ']' || char === '}') {
            if (stack.length === 0 || stack.pop() !== pairs[char]) {
                return false;
            }
        }
    }

    return stack.length === 0; 
}

isBalanced(str) ? console.log('Secuencia correcta') : console.log('Secuencia incorrecta');