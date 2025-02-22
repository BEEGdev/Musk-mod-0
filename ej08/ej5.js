const readLine = require("readline-sync"); 
const str = readLine.question("Introduce el texto: ");

function reverseWord(str){
    let stack = str.split(''); //sé que tendria que hacer push con un bucle para simular un stack, pero esto da el mismo resultado
    let reversed='';

    while (stack.length > 0) {
        reversed += stack.pop();  
    }
    console.log(reversed);
}

reverseWord(str);