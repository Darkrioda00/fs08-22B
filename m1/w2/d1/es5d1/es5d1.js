/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltÃ  puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non Ã¨ stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* var numero = 5  numerica
   var stringa = 'testo' testuale
   var array = [5,testo]  lista di elementi,riconoscibile con le []
   var oggetto = {lista di elementi in coppia}  riconoscibile con le {}  */

/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

var name = 'Dario';
 
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 3
Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/
var a = 12;
var b = 20;
var c= a + b;
//oppure console.log(a += b);
console.log(c)

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 4
Crea una variable di nome "x" e assegna ad essa il numero 12.
*/
var x = 12;

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 5
 Riassegna un nuovo valore alla variabile "name" giÃ  esistente: il tuo cognome.
 Dimostra l'impossibilitÃ  di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/
var name = 'Hu'

const cognome = 'Hu'
//const cognome = 'Hu' darà errore

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 6
Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/
var d = 4;
var e = x - d
// oppure console.log(x -= d);
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 7
Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
Verifica che name1 sia diversa da name2 (suggerimento: Ã¨ la stessa cosa di verificare che la loro uguaglianza sia falsa).
EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/
var name1 ='john'
var name2 ='John'
console.log(name1 == name2)

//extra
if(name1.toLowerCase === name2.toLowerCase){
 console.log('true')
}else{
 console.log('false')
}



/* SCRIVI QUI LA TUA RISPOSTA */