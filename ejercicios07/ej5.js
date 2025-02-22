const readLine = require("readline-sync");
const str = readLine.question("Introduce una lista de elementos: ");
let array = str.split(',');

function handleArray(array) {
    let seen = new Set();
    let duplicates = new Set();

    for (let item of array) {
        if (seen.has(item)) {
            duplicates.add(item);
        } else {
            seen.add(item);
        }
    }

    console.log([...duplicates]);
}

handleArray(array);