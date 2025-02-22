const readLine = require("readline-sync"); 
const str = readLine.question("Introduce el texto: ");

function charFreq(str){
    let freqMap = new Map;
    
    for (let i=0; i<str.length;i++){
        if (freqMap.has(str[i])) {
            freqMap.set(str[i], freqMap.get(str[i]) + 1); 
        } else {
            freqMap.set(str[i], 1); 
        }
    }
    console.log(freqMap);
}

charFreq(str);