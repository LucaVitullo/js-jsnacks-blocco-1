/* In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa. */


const invitati = ["luca","mauro","giorgio","paolo"];

let askName = prompt("Qual'è il tuo nome?");

let validName = false;

for (let i = 0; i < invitati.length; i++){

    if(askName === invitati[i]){
        console.log("nome Presente nella lista degli invitati");
        validName = true;
    }
}
if(validName === false){
    console.log("nome non presente nella lista degli invitati");
}