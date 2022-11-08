


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
    
    
    let nomeTicket = document.getElementById("nomeTicket")
    nomeTicket.innerHTML = `${nome}`
    let kmTicket = document.getElementById("kmTicket")
    kmTicket.innerHTML = `${km}`
    let prezzoTicket = document.getElementById("prezzoTicket")
    prezzoTicket.innerHTML = `${prezzoBiglietto.toFixed(2)}€`
    
})

reset.addEventListener('click',
function () {
    nomeForm.value = null;
    kmForm.value = null;
    etaForm.value = 4;
    
})












