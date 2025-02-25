// VARIABILI
const wordRequest = prompt("Scrivi un parola");
// ESECUZIONE FUNZIONE
if (isNaN(wordRequest)) {
    palindroma(wordRequest);
} else {
    alert("Inserire una parola"); 
    location.reload();
}


/////////////////////////////////
/////////FUNZIONI////////////////
function palindroma(wordStr) {
    
    // Dichiarazione variabili
    const word = [];
    const wordReverse = []; 
    let message = "";
    let wordReverseStr;
   
    // Esecuzione ciclo per trasmormare in array e invertire la parola
    for (let i = 0; i < wordStr.length; i++) {
        word.push(wordStr[i]);
    }
    for (let i = wordStr.length - 1; i >= 0; i--) {
        wordReverse.push(wordStr[i]);
    }
    
    // Passaggio per invertire l'array inverso in parola
    wordReverseStr = wordReverse.join("");

    // Iterazione di verifica del risultato
    if (wordStr === wordReverseStr) {
        message = ("Questa parola è un palindromo");
    } else {
        message = ("Questa parola non è un palindromo")
    }

    // Stampa del risultato e chiusura funzione
    console.log(message);
    return message;
}
