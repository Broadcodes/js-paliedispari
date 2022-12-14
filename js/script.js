/*
Palindroma
    Chiedere all’utente di inserire una parola
    Creare una funzione per capire se la parola inserita è palindroma
*/

// ---------------------------------------------------- PAROLA PALINDROMA ----------------------------------------------------------

// Creo una funzione che mi determini se una parola è di tipo palindroma o meno
function isPalindrome(word) {

    // Dichiaro due array, oldWord acquisirà la parola in input convertita in array,
    // mentre newWord conterrà la nuova parola in formato array (ovvero ogni carattere sarà posizionato ad ogni indice)
    const oldWord = word.split("");
    const newWord = [];

    // Ciclo for che permette di rovesciare una parola per determinare successivamente se la parola è palindroma
    for (let i = 0; i < oldWord.length; i++) {
        newWord[i] = oldWord[(oldWord.length - 1) - i]
    }

    let wordInString = newWord.join("");

    // Condizione che restituisce un valore booleano a seconda se la parola è palindroma o meno
    if (wordInString === word) {
        return true;
    } else {
        return false;
    }
}

function askWordUser() {
    const element = document.getElementById("word");
    const word = element.value;

    return word;
}

// Creo elemento nell'html
const result = document.querySelector(".result");
const element = document.createElement("p");

// Assegno un azione al pulsante
const button = document.getElementById("button-word");
button.addEventListener("click", function () {
    // Chiedo all'utente di inserire in input una parola
    let word = askWordUser();

    // Mostro a schermo il risultato della parola
    if (isPalindrome(word)) {
        element.innerHTML = `La parola inserita "${word}" risulta essere di tipo Palindroma`;
    } else {
        element.innerHTML = `La parola inserita "${word}" non risulta essere di tipo Palindroma`;
    }

    result.append(element);
});

// ---------------------------------------------------- PARI E DISPARI ----------------------------------------------------------
/* 
Pari e Dispari
    L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
    Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
    Sommiamo i due numeri
    Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
    Dichiariamo chi ha vinto.
*/

// Assegno un azione al pulsante
const buttonEvenOdd = document.getElementById("button-evenOdd");
buttonEvenOdd.addEventListener("click", function () {
    // Recupero valore inserito dall'utente
    const valueSelectEvenOrOdd = document.getElementById("evenOrOdd").value;
    const valueNumberEvenOrOdd = document.getElementById("number").value;

    // Genero numero random e assegno valore a variabile
    const valueNumber = randomNumber();
    let numSum;

    // Condizione per verificare se il valore è compreso fra 1 e 5
    if (valueNumberEvenOrOdd < 1 || valueNumberEvenOrOdd > 5) {
        alert("Hai inserito un valore che non è compreso fra 1 e 5");
    } else {
        // Sommo i numeri: numero generato random + numero inserito da utente
        numSum = sum(valueNumber, valueNumberEvenOrOdd);

        // Stabilisco se la somma dei due numeri è pari o dispari
        const resultGame = evenOrOdd(numSum);

        if (resultGame === valueSelectEvenOrOdd) {
            element.innerHTML = `Hai Vinto, la somma tra il tuo numero e quello del computer fa PARI`;
        } else {
            element.innerHTML = `Mi dispiace, ma la somma tra il tuo numero e quello del computer fa DISPARI`;
        }

        result.append(element);
    }
});

// Funzione che genera random un numero che va da 1 a 5
function randomNumber() {
    const numberRandom = Math.floor(Math.random() * 5) + 1;
    return numberRandom;
}

// Funzione che somma i due numeri
function sum(numRandom, num) {
    return numRandom + num;
}

// Funzione che stabilisce se la somma dei due numeri è pari o dispari
function evenOrOdd(sum) {
    if (sum % 2 === 0) {
        return "Pari";
    }
    return "Dispari";
}
