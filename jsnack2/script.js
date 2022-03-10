/*Crea un array vuoto. Chiedi per 6 volte all’utente di inserire un numero, se è dispari inseriscilo nell’array.*/


let arrayShots = [];

for(i=0; i< 6; i++){
    let number = parseInt(prompt("inserisci un numero"))

    if(number % 2 == 0){
        console.log("hai inserito numero pari");
    }
    else if(isNaN(number)){
        alert("inserisci un numero");
    }
    else{
        console.log(`hai inserito un numero dispari ${number}`)
        arrayShots.push(number);
        console.log(arrayShots);
    }
}
