// Un alert espone 5 numeri casuali. Da li parte un timer di 30 secondi
// Dopo 30 secondi l’utente deve inserire un prompt alla volta i numeri che ha visto precedentemente.
// Dopo che sono stati inseriti i 5 numeri, il software dice
// quanti e quali dei numeri da indovinare sono stati individuati;

// Un alert espone 5 numeri casuali.

// creo la funzione
function randnum (){
  var arrayNumrand = [Math.floor((Math.random()*100)+1),Math.floor((Math.random()*100)+1), Math.floor((Math.random()*100)+1), Math.floor((Math.random()*100)+1), Math.floor((Math.random()*100)+1)];
  alert(arrayNumrand);
  console.log("Num PC", arrayNumrand);
}
// e la invoco
randnum ();

// Da li parte un timer di 30 secondi
var secondi=5;
var mycountdown=setInterval(countdown, 500);

function countdown(){
  secondi = secondi -1;

  console.log(secondi);

  if (secondi==0) {
  clearTimeout(mycountdown);
    // Dopo 30 secondi l’utente deve inserire un prompt alla volta i numeri che ha visto precedentemente.
    // faccio partire i prompts invocando la funzione prompts
    for (var i = 0; i < 5; i++) {
      var promptUtente = prompt ("Num? (1-100)");
      arrayNumUtente.push(promptUtente);
    }
  }
}


// creo un array vuoto dove pushero' gli imput dell utente
var arrayNumUtente = [];

console.log("Numeri UTENTE ", arrayNumUtente);

// Dopo che sono stati inseriti i 5 numeri, il software dice
// quanti e quali dei numeri da indovinare sono stati individuati;

// Devo comparare i 2 array:
// mi creo un array che chiamero' numeri azzeccati con relativo Punteggio

var azzeccato = false;
var arrayAzzeccati = [];

while (azzeccato == false) {
  if (compare(promptUtente, arrayNumrand)== true) {
    azzeccato = true;
    arrayAzzeccati.push(promptUtente);
    console.log("Trovato!");
  } else {
    console.log("NON Trovato");
  }
}
// FUNZIONE CHE SERVE A COMPARARE
  function compare (value, array){
    var found = false;
    var i = 0;
    while (found == false && i < array.length) {
      if (array[i] == value) {
        found = true;
      }
      i++
    }
    return found;
  }




// creo i prompt in una funzione
// function prompts(){
//   prompt ("Primo numero?");
//   prompt ("Secondo numero?");
//   prompt ("Terzo numero?");
//   prompt ("Quarto numero?");
//   prompt ("Quinto numero?");
// }
