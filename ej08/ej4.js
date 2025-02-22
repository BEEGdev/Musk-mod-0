const readLine = require("readline-sync"); 
const str1 = readLine.question("Introduce el texto: ");
const str2 = readLine.question("Introduce el texto: ");

function checkAnagram(str1,str2){

    if (str1.length !== str2.length) return false;

    let charMap = new Map();

    for (const char of str1) {
        charMap.set(char, (charMap.get(char) || 0) + 1);
    }

    for (const char of str2) {
        if (!charMap.has(char)) return false; 
        charMap.set(char, charMap.get(char) - 1);
        if (charMap.get(char) === 0) charMap.delete(char); 
    }

    return charMap.size === 0 ? true:false;
}

checkAnagram(str1,str2) ? console.log('Son anagramas') : console.log('No son anagramas');