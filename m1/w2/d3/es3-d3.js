/* ESERCIZIO 1
Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/
let piccolo = 'x'
let grande = 'y'
if(piccolo > grande){
  console.log('no')
}else if(piccolo < grande){
  console.log('si')
}else {
  console.log('sono uguali')
}
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 2
Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/
let numero = prompt('un bel numero?')
if(numero == 5){
  console.log('equal')
}else{
  console.log('non equal')
}
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 3
Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/
let barra = prompt('vediamo se è divisibile per 5')
let cinque = (barra % 5)

if(cinque > 0){
console.log('non divisibile')  
}else{
  console.log('divisibile')
}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 4
Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/
let d = 38
let f = 30
let oUnooAltro = (d || f);
let somma = (d + f)
let sottrazione = (d - f)
if(oUnooAltro == 8){console.log('true')}
else if(somma == 8){console.log('true')}
else if(sottrazione == 8 ){console.log('true')}
else{console.log('false')}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 5
Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/
let totalShoppingCart = prompt('quanto hai speso?')
let spedizione = 10
if (totalShoppingCart>=50){console.log('hai la spedizione gratis')}
else{console.log('il totale non supera 50 quindi non puoi usufruire della spedizione gratis,ti mancano ' + (50-totalShoppingCart) + '$')}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 6
Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

let prodotto1 = 150;
if(prodotto1 > 50){
  console.log((prodotto1 / 100) *20 +'$' + '' + 'questo è lo sconto applicato')

}else{
  console.log(((prodotto1 - 10) / 100) *20 + '$' + '' + 'questo è lo sconto applicato')
}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 7
Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
Alla fine mostra il risultato in console.
*/
let q = 2
let w = 3
let e = 9


/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 8
Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/
let test ='10'
if (typeof test === 'number'){
  console.log('è un numero')
}else{
  console.log('non è un numero')
}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 9
Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/
var p = 10;
var risultato = (p % 2);
if (risultato > 0) {alert('Numero dispari!')}
else{alert('Numero pari!')}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
let val = 7
if (val < 10) {
console.log("Meno di 10");
} else if (val < 5) {
console.log("Meno di 5");
} else {
console.log("Uguale a 10 o maggiore");
}
*/
let val = 7
if (val < 10 && val >= 5) {
console.log("Meno di 10");
} else if (val < 5) {
  console.log("Meno di 5");
} else {
  console.log("Uguale a 10 o maggiore");
}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
name: 'John',
lastName: 'Doe',
skills: ['javascript', 'html', 'css'],
}
me.city = 'Toronto'
console.log(me)

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 12
Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/
delete me.lastName;
console.log(me)


/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 13
Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/
delete me.skills[2];
console.log(me)
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 14
Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/
let array =[]

array.push (1,2,3,4,5,6,7,8,9,10)
console.log(array)

/* SCRIVI QUI LA TUA RISPOSTA */
  
/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/
array[array.length-1] = 100;
console.log(array);
/* SCRIVI QUI LA TUA RISPOSTA */