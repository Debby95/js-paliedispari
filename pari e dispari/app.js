//chiedo all utente di scegliere tra pari e dispari
const scelta = prompt("Scegli tra pari e dispari");
//chiedo all utente di inserire un numero da 1 a 5
const numero = prompt("Inserisci un numero da 1 a 5");

let numeroRandomPc = Math.random();

function generoNumeroRandom() {
    for (let i = 0; i <= 5; i++){
        numeroRandomPc = Math.floor(numeroRandomPc * 5);
    }
}

console.log(scelta);
console.log(numero);
console.log(numeroRandomPc);
