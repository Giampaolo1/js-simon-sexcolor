// Un alert espone 5 numeri casuali. Da li parte un timer di 30 secondi
// Dopo 30 secondi l’utente deve inserire un prompt alla volta i numeri che ha
// visto precedentemente. Dopo che sono stati inseriti i 5 numeri, il software dice
// quanti e quali dei numeri da indovinare sono stati individuati;

// Un alert espone 5 numeri casuali.

// creo la funzione
function randnum (){
  var num = [Math.floor((Math.random()*100)+1),Math.floor((Math.random()*100)+1), Math.floor((Math.random()*100)+1), Math.floor((Math.random()*100)+1), Math.floor((Math.random()*100)+1)];
  alert(num);
}
// e la invoco
randnum ();

// Da li parte un timer di 30 secondi
var secondi=10;
var myinterval=setInterval(countdown, 1000);

function countdown(){
  secondi = secondi -1;
  
  console.log(secondi);

  if (secondi) {
    clearInterval(myinterval);
  }
}
