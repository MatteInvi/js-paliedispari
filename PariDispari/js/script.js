
// Richiesta dati
let pariDispariUser = prompt("Scrivi pari o dispari");
let numeroUserStr = prompt("Inserisci un numero da 1 a 6");

// Trasformazione input utente in numero
const numeroUser = parseInt(numeroUserStr);

// Elaborazione numero computer
const numeroComputer = getRndInteger(1, 6);


// Controllo dati inseriti ed esecuzione funzione
if ((pariDispariUser === "pari" || pariDispariUser === "dispari")
    && (numeroUser > 0 && numeroUser <= 6)) {
    pariDispari(numeroUser, numeroComputer);
} else {
    alert("Valori inseriti non conformi");
}



// Funzione random
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Funzione paridispari
function pariDispari(nUtente, nComputer) {
    let winLose;
    let message;
    const sum = nComputer + nUtente;
    if (sum % 2 === 0) {
        result = "pari"
    } else {
        result = "dispari"
    }

    if (pariDispariUser === result) {
        winLose = "Hai vinto"
    } else {
        winLose = "Hai perso"
    }

    message = (`Il numero del computer è ${nComputer}, il tuo numero è ${nUtente}, la somma risulta ${result} e quindi ${winLose}`);
    console.log(message);
    return message;

}  


