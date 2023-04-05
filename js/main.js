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

// prove condizioni e cicli

// condizioni

if (5 <= 10) {
    console.log ("ciao")
}

if (10%2 == 0 && 2 < 10) {
    console.log ("pasqua")
}

if (70 < 200 || 1 < 0) {
    console.log ("natale")
}

if (1 < 2) {
    console.log ("ciao")
}
else {
    console.log ("buongiorno")
}

40 < 30 ? console.log ("miao") : console.log ("addio")

// cicli 

let contatore = 0;
while (contatore < 10) {
    console.log ("arrivederci")
    contatore++;
}

let misuratore = 0;
do {
    console.log ("baubau")
    misuratore++;
} while (misuratore < 10);  //almeno 1 volta

for(let i = 0; i < 10; i++) {
    console.log ("madonna")
}
