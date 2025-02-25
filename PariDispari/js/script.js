
// Richiesta dati
const pariDispariUser = prompt("Scrivi pari o dispari");
const numeroUserStr = prompt("Inserisci un numero da 1 a 6");
// Elaborazione numero computer
const numeroComputer = getRndInteger(1, 6);
// Trasformazione in numero
const numeroUser = parseInt(numeroUserStr);

// Esecuzione funzione
pariDispari(numeroUser, numeroComputer);


// Funzione random
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

// Funzione paridispari
function pariDispari (nUtente, nComputer){
    let message;
    const sum = nComputer + nUtente;
    if (sum % 2 === 0) {
        result = "pari"
    } else {
        result = "dispari"
    }

    if (pariDispariUser === result){
        message = "Hai vinto"
    } else {
        message = "Hai perso"
    }

    console.log(`Il numro del computer è ${nComputer}, il tuo numero è ${nUtente}, la somma risulta ${result} e quindi ${message}`);
    return message;
    
}  