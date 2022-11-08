


// Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.

var invia = document.getElementById("invia");
var nomeForm = document.getElementById("nome");
var kmForm = document.getElementById("km");
var etaForm = document.getElementById("eta")
var reset = document.getElementById("reset")
const tariffa = 0.21;

invia.addEventListener('click',
function () {
    var nome = nomeForm.value;
    var km = kmForm.value;
    var eta = etaForm.value;
    let prezzoBiglietto = km * tariffa;
    if (eta == 1){ 
        prezzoBiglietto = prezzoBiglietto * 0.8
    
    }
    if (eta == 2){ 
        prezzoBiglietto = prezzoBiglietto * 0.6;
    
    }
    
    
    console.log(prezzoBiglietto + nome + km + eta);
    
})

reset.addEventListener('click',
function () {
    nomeForm.value = null;
    kmForm.value = null;
    etaForm.value = 4;
    
})









// // L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
// let risultato = prezzoBiglietto.toFixed(2);


// // BONUS possibili:
// // elaborazione dell’output come detto, più articolata del semplice prezzo;
// document.getElementById("title").innerHTML = `In base alla tua età (${eta}) e ai kilometri da percorrere (${km})
// Il tuo biglietto costerà: = ${risultato}€. `

// // interfaccia un pò eleaorata con CSS.


