/*
Palindroma
    Chiedere all’utente di inserire una parola
    Creare una funzione per capire se la parola inserita è palindroma
Pari e Dispari
    L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
    Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
    Sommiamo i due numeri
    Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
    Dichiariamo chi ha vinto.
*/ 

// Creo una funzione che mi determini se una parola è di tipo palindroma o meno
function palindrome(word){

    // Dichiaro due array, oldWord acquisirà la parola in input convertita in array,
    // mentre newWord conterrà la nuova parola in formato array (ovvero ogni carattere sarà posizionato ad ogni indice)
    const oldWord = word.split("");
    const newWord = [];

    // Ciclo for che permette di rovesciare una parola per determinare successivamente se la parola è palindroma
    for(let i = 0; i < oldWord.length; i++){
        newWord[i] = oldWord[(oldWord.length - 1) - i]
    }

    console.log(newWord.join(""));

    
}

palindrome("ciao");