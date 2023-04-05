//prompt, messaggio per l'utente
let nomeUtente = prompt("inserisci il tuo Nome");
let cognomeUtente = prompt("inserisci il tuo Cognome");
let colorePreferito = prompt("qual'è il tuo colore preferito?") 

// variabile data
let data = 2023;

// password 
let password = nomeUtente + cognomeUtente + colorePreferito + data;

document.write (password)


// modifica elementi in js

document.querySelector ("h1").innerText = "Ciao Brutti"
document.getElementById ("paragrafo").innerHTML = "buon natale"