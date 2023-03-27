/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/


// ESERCIZIO 1
// const myAge = 19;
// function checkAge() {
//     let message = '';

//     if (myAge < 18) {
//         message = `Sei troppo giovane! Hai ${myAge} anni!`;
//     } else {
//         message = 'Hai più di 18 anni!';
//     }
//     return message
// }
// checkAge(myAge);
// console.log(checkAge(myAge));

// 1- Controlla se sei maggiorenne o minorenne 
// 2-3- l errore di sintassi stava nella constante message che dovendo variare deve esere let // myAge deve essere argomento della funzione // e la costante deve essere esterna 


// ESERCIZIO 2
// function printColorsNumber() {
//     const colors = ['blue', 'red', 'yellow', 'green', 'black'];
//     console.log(`Nella mia palette ci sono ${colors.length} colori!`);
// }
// printColorsNumber();

// 1- Ti dice quanti colori hai
// 2- L errore sta nella scrittura di length


// ESERCIZIO 3
function addNumbers() {
    const userNumber = parseInt(prompt('Inserisci un numero'));
    const total = userNumber + 12;

    console.log(`Il risultato finale è ${total}`);
}
addNumbers();

// 1-Somma due numeri uno dell utente e uno fisso
// 2-3- L errore sto nel parseInt mancante al prompt che trasforma l imput in numero codi da poter eseguire una somma e non una concatenazione


// ESERCIZIO 4
function checkAccess() {
    const addresses = [
        'mymail@mail.com',
        'yourmail@mail.com',
        'hermail@mail.com',
        'hismail@mail.com',
    ];
    const userEmail = prompt('Inserisci il tuo indirizzo email');

    let grantAccess = false;

    if (addresses.includes(userEmail)) {
        grantAccess = true;
    }

    if (grantAccess === true) {
        console.log('Accesso consentito!');
    } else {
        console.log('Accesso negato!');
    }
}
checkAccess();

// 1- Controlla l accesso delle mail 
// 2-3- L errore stava nella sintassi dei valori booleani messi sotto forma di stringa
