/*Chiedi un numero di 4 cifre all’utente e calcola la somma di tutte le cifre che compongono il numero. (questo potrebbe richiedere un minimo di ricerca)*/

let numero = prompt("inserisci 4 numeri").split('');
let somma = 0;
console.log(numero);

for ( let i = 0; i < numero.length; i++){

    somma += parseInt(numero[i]);

}

console.log(`la somma dei numeri inseriti è ${somma}`);