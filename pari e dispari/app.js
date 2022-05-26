//chiedo all utente di scegliere tra pari e dispari
const scelta = prompt("Scegli tra pari e dispari");
//chiedo all utente di inserire un numero da 1 a 5
const numero = prompt("Inserisci un numero da 1 a 5");

let somma = 0;
let numeroRandomPc = 0;
let risultato = 0;

//funzione per generare numero random
function numeroRandom() {
    const numeroRandomPc = (Math.floor(Math.random() * 5) + 1);
    //console.log(numeroRandomPc);
    return numeroRandomPc;
}

//funzione per sommare i due numeri generati
function sommaNumeri (numero, numeroRandomPc) {
    numeroRandomPc = numeroRandom();
    //console.log(numero);
    console.log(numeroRandomPc);
    const risultato = parseInt(numero) + parseInt(numeroRandomPc);
    console.log(risultato);
    return risultato;
}

//sommaNumeri(numero, numeroRandomPc);

//console.log(scelta);
//console.log(numero);

//stabilisco se la somma dei due numeri è pari o dispari
function isPari(risultato, risultatoPariDispari) {
    risultato = sommaNumeri(numero, numeroRandomPc);
    if (risultato % 2 === 0) {
        risultatoPariDispari = "pari";
        console.log("è pari");
    } else {
        risultatoPariDispari = "dispari";
        console.log("è dispari");
    }
    console.log(risultato);
    
    return risultatoPariDispari;
}

isPari(risultato);


//stabilisco la vittoria
function vittoria(risultatoPariDispari) {
    risultatoPariDispari = isPari(risultato, risultatoPariDispari);
    if (scelta === risultatoPariDispari) {
        console.log("HAI VINTO");
    } else {
        console.log("HAI PERSO");
    }
}

vittoria();








