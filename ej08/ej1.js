const readLine = require("readline-sync"); 
const string = readLine.question("Introduce el texto: "); 

function checkDuplicates(string) {
    let array= string.split(' ');
    let seen = new Set();
    let duplicates = new Set();

    for (let item of array) {
        if (seen.has(item)) {
            duplicates.add(item);
        } else {
            seen.add(item);
        }
    }

    console.log('se repiten las siguientes palabras:' + [...duplicates].join(','));
}

checkDuplicates(string);
