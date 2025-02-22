const readLine = require("readline-sync"); 
let arr1 = [1,2,3,4,5];
let arr2 = [3,5];
function checkDuplicates(arr1, arr2) {
    let set1 = new Set(arr1);
    let set2 = new Set(arr2);
    let duplicates =  new Set();

    for (let item of set1) {
        if (!set2.has(item)) {
            duplicates.add(item);
        } 
    }

    console.log('La diferencia de ambos conjuntos es: ' + [...duplicates]);
}

checkDuplicates(arr1, arr2);
