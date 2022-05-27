//chiedo all utente di inserire una parola
const scelta = prompt("Inserisci una parola");

//creo una funzione per capire se la parola inserita è palindroma
function checkPalindrome(scelta) {
    //splitto le lettere della parola scelta
    const arrayScelta = scelta.split('');
    //uso reverse sulla parola scelta
    const reverseArrayScelta = arrayScelta.reverse();
    //converto l arrey in stringa
    const reverseString = reverseArrayScelta.join ('');


    if(scelta === reverseString) {
        console.log("La parola scelta è palindroma");

    }   else {
        console.log("La parola scelta non è palindroma");
    }

}

checkPalindrome(scelta);



