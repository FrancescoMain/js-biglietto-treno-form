


var invia = document.getElementById("invia");
var nomeForm = document.getElementById("nome");
var kmForm = document.getElementById("km");
var etaForm = document.getElementById("eta")
var reset = document.getElementById("reset")
var partenzaForm = document.getElementById("partenza")
var arrivoForm = document.getElementById("arrivo")
var dataForm = document.getElementById("data")
const tariffa = 0.21;
var sconto=document.getElementById("sconto")
invia.addEventListener('click',
function () {
    var nome = nomeForm.value;
    var km = kmForm.value;
    var eta = etaForm.value;
    let prezzoBiglietto = km * tariffa;
    if (eta == 1){ 
        prezzoBiglietto = prezzoBiglietto * 0.8
        sconto.innerHTML=`*Essendo minorenne hai diritto ad uno sconto del 20% che è stato gia applicato al prezzo finale`
    
    }
    if (eta == 2){ 
        prezzoBiglietto = prezzoBiglietto * 0.6;
        sconto.innerHTML=`*Essendo minorenne hai diritto ad uno sconto del 40% che è stato gia applicato al prezzo finale`
    }
    
    
    let nomeTicket = document.getElementById("nomeTicket")
    nomeTicket.innerHTML = `${nome}`
    let kmTicket = document.getElementById("kmTicket")
    kmTicket.innerHTML = `${km}`
    let prezzoTicket = document.getElementById("prezzoTicket")
    prezzoTicket.innerHTML = `${prezzoBiglietto.toFixed(2)}€`
    let partenza = partenzaForm.value
    let partenzaTicket = document.getElementById("partenzaTicket")
    partenzaTicket.innerHTML = `${partenza}`
    let arrivo = arrivoForm.value
    let arrivoTicket = document.getElementById("arrivoTicket")
    arrivoTicket.innerHTML = `${arrivo}`
    let data = dataForm.value
    let dataTicket = document.getElementById("dataTicket")
    dataTicket.innerHTML = `${data}`

    document.getElementById("treno").innerHTML = "A" +
    (Math.floor(Math.random() * 13)+1);
    document.getElementById("binario").innerHTML =
    Math.floor(Math.random() * 13);
    document.getElementById("orario").innerHTML =
    Math.floor(Math.random() * 25) + ":" + Math.floor(Math.random() * 60) ;
    
})

reset.addEventListener('click',
function () {
    nomeForm.value = null;
    kmForm.value = null;
    etaForm.value = 4;
    
})












