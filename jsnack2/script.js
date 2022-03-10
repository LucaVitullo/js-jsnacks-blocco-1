/*Crea un array vuoto. Chiedi per 6 volte all’utente di inserire un numero, se è dispari inseriscilo nell’array.*/

let arrayEven = [];

for(i=0; i< 6; i++){
    let number = parseInt(prompt("inserisci un numero"))

    if(isNaN(number)){
        alert("inserisci un numero");
    }
    if(number % 2 == 0){
        console.log("hai inserito numero pari");
    }

    else{
        console.log(`hai inserito un numero dispari ${number}`)
        arrayEven.push(number);
        console.log(arrayEven);
    }
}
