/*Crea un array vuoto. Chiedi per 6 volte all’utente di inserire un numero, se è dispari inseriscilo nell’array.*/

let arrayEven = [];

for(i=0; i< 6; i++){
    let number;
    while(isNaN(number)){
        number = parseInt(prompt(`${i+1}.inserisci un numero`))
    }
    if(number % 2 !== 0){
        arrayEven.push(number);
    }
}
console.log(`i numeri dispari che hai inserito sono: ${arrayEven}`);
