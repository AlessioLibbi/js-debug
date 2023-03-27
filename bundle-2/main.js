/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/


// ESERCIZIO 1
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// 1- questo era infame

// ESERCIZIO 2
function addIfEven(num = 16) {
    if (num % 2 === 0) {
        return num + 5;
    }
    return num;
}
console.log(addIfEven());

// 1- ti torna se pari il numero +5 se dispari solo il numero
// 2- l errore era l uguaglianza e la funzione senza alcun tipo di valore

// // ESERCIZIO 3
function loopToFive() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
    }
}
loopToFive()

// 1- ti fa un ciclo finche non i e uguale a 5
// 2- l eroore stava nella punteggiatura del ciclo e che la funzione non fosse richiamata fuori


// // ESERCIZIO 4 (suggerimento: ci sono 8 errori)
function displayEvenNumbers() {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    let evenNumbers = [];
    for (let i = 0; i <= numbers.length - 1; i++) {
        if (numbers[i] % 2 === 0) {
            evenNumbers.push(numbers[i]);
        }
    }
    console.log(evenNumbers);
    return evenNumbers;
}
displayEvenNumbers(); // [2,4,6,8]
console.log(displayEvenNumbers());