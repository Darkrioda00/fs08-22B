/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/
const area = function(l1,l2){
    return l1 * l2;
}
const areaResult= area(3,4);
console.log(areaResult);



/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/
const CrazySum = function(n1,n2){
    if(n1===n2){
      return(n1+n2)*3;
    }else{
      return(n1+n2)
    }
}
console.log(CrazySum(4,4))

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/
function crazyDiff(n){
    if(n>19){
        return 3 * (n-19);
    }else
    {
    return (n-19);
    }
}console.log(crazyDiff(3))

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/
function boundary(n){
    if((20 <= n && n <= 100)||(n === 400)){
        return true;
    }else{
        return false;
    }
}console.log(boundary(399))

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/
let epi ="EPICODE";
function epify (str){
    let textStr = str.substring(0,7) //prendere la sottostringa dei primi 6 caratteri
    if (textStr !=epi){
        return str=epi+str;
    }else return str;
}
console.log(epify("EPICODE"));

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/
const check3and7 = function(n){
    if(n >= 0 && (n % 3 === 0 || n % 7 === 0 )){
        return true;
    }
    else {
        return false;
    }
}
console.log(check3and7(7))
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/
const reverseString = function(string){
    return string.split("").reverse().join(""); //split prende le parole,reverse crea un array delle lettere girate,join riunisce l'array del reverse e lo mette in una parola
}
console.log(reverseString("ciao"));
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/
const upperFirst =function(string){
    return string[0].toUpperCase()+ string.slice(1);
}
console.log(upperFirst("ciao sono luigi"))

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/
const cutString= function(string){
    return string.slice(1, -1)
}
console.log(cutString("frase da tagliare"))

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/
const giveMeRandom = function(n){
    let numeroRandom = [];
    for (let i = 0; i < n; i++){
    numeroRandom.push(Math.floor(Math.random()*11));
    }
    return numeroRandom;
}
console.log(giveMeRandom(10))

/* SCRIVI QUI LA TUA RISPOSTA */



// Esercizi aggiuntivi (facoltativi) per D4

/* EXTRA 1
 Scrivi una funzione chiamata "checkArray" che riceve un array di numeri casuali (creati con la funzione "giveMeRandom") e per ogni elemento stampa in console
 se il suo valore è maggiore di 5 o no.
 La funzione deve inoltre ritornare la somma di tutti i valori maggiori di 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const checkArray = function(giveMeRandom){
    for (let i = 0; i < giveMeRandom.lenght; i++)
    if(i >= 5){
        console.log(true);
    }else{
        console.log(false);
    }
    return
}
console.log(checkArray(giveMeRandom))


/* EXTRA 2
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "shoppingCartTotal" che calcola il totale dovuto al negozio (tenendo conto delle quantità di ogni oggetto).
*/
const shoppingCart = [
    {
        price: 10,
        name: "scarpa",
        id: "sc12f2",
        quantity: "3" ,
    },
    {
        price: 5,
        name: "sciarpa",
        id: "sc22d3",
        quantity: "2" , 
    },
    {
        price: 8,
        name: "cappello",
        id: "ca45o0",
        quantity: "4" ,   
    }
]
let costo = shoppingCart.price;
let quantità = shoppingCart.quantity
const shoppingCartTotal = function(costo,quantità){
    return costo*quantità
}
console.log(shoppingCartTotal())


/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 3
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "addToShoppingCart" che riceve un nuovo oggetto dello stesso tipo, lo aggiunge a "shoppingCart" e ritorna il nuovo numero totale degli elementi.
*/

function addToShoppingCart(item) {
  shoppingCart.push(item);
  
  let totalItems = shoppingCart.reduce(function(total, currentItem) {
    return total + currentItem.quantity;
  }, 0);
  return totalItems;
}
let item = {
    id: 1,
    name: 'guanti',
    price: 10,
    quantity: 2
  };
  
let totalItems = addToShoppingCart(item);
console.log(totalItems);
/* EXTRA 4
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "maxShoppingCart" che riceve l'array "shoppingCart" e ritorna l'oggetto più costoso in esso contenuto.
*/
function maxShoppingCart(cart) {
    let maxItem = cart.reduce(function(max, current) {
      return (current.price > max.price) ? current : max;
    });
    
    return maxItem;
  }
let maxItem = maxShoppingCart(shoppingCart);
console.log(maxItem);

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 5
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "latestShoppingCart" che riceve l'array "shoppingCart" e ritorna l'ultimo elemento.
*/
function latestShoppingCart(cart) {
    return cart[cart.length - 1];
}
let lastItem = latestShoppingCart(shoppingCart);
console.log(lastItem);
/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 6
 Crea una funzione chiamata "loopUntil" che riceve un numero intero come parametro con valore tra 0 e 9.
 La funzione è composta da un ciclo che stampa un numero casuale tra 0 e 9 finchè il numero casuale non è maggiore di x per tre volte di fila.
*/
function loopUntil(x){
 while (true) {
    let randomNumber = Math.floor(Math.random() * 10);
    console.log(randomNumber);
 
    if (randomNumber > x) {
    counter++;
    } else {
    counter = 0;
    }
 
  if (counter === 3) {
 break;
  }
}
}
console.log(loopUntil(4));


/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 7
Crea una funzione chiamata "average" che riceve un array come parametro e ne ritorna la media aritmetica. La funzione salta automaticamente i valori non numerici nell'array.
*/

function average(arr) {
    let sum = 0;
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        let value = arr[i];

        if (typeof value === 'number') {
          sum += value;
          count++;
        }
    }

  return sum / count;
}
let arr = [1, 2, 3, 'four', 5, 6];
let avg = average(arr);
console.log(avg);
/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 8
 Crea una funzione chiamata "longest" che trova la stringa più lunga all'interno di un array di stringhe fornito come parametro.
*/

function longest(array2) {
  let longestString = '';

  for (let i = 0; i < arr.length; i++) {
    let value = arr[i];

    if (typeof value === 'string' && value.length > longestString.length) {
      longestString = value;
    }
  }

  return longestString;
}
let array2 = ['Ciao', 'mondo', 'questo', 'è', 'un', 'test'];
let longestString = longest(arr);
console.log(longestString);

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 9
 Crea una funzione per creare un filtro anti-spam per la tua casella email. La funzione riceve un parametro stringa chiamato "emailContent", e torna un valore booleano.
 La funzione deve ritornare true se "emailContent" non contiene le parole "SPAM" o "SCAM".
*/
function spamFilter(emailContent) {
  if (emailContent.includes('SPAM') || emailContent.includes('SCAM')) {
    return false;
  } else {
    return true;
  }
}
let emailContent = 'Questa email contiene SPAM!';
let isSpam = spamFilter(emailContent);
console.log(isSpam);
/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 10
 Scrivi una funzione che riceve una data come parametro, e calcola il numero di giorni passati da quella data.
*/
function daysSince(date) {
    let currentTime = new Date().getTime();
    let specifiedTime = date.getTime();
    let timeDifference = currentTime - specifiedTime;
    let daysDifference = timeDifference / (1000 * 60 * 60 * 24);
  
    return Math.floor(daysDifference);
}
let date = new Date('January 1, 2018');
let days = daysSince(date);
console.log(days);

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 11
 Scrivi una funzione chiamata "matrixGenerator" che riceve come paremetri due numeri interi, "x" e "y".
 Il risultato deve essere una matrice di "x" volte "y", e i valori devono rispecchiare gli indici della posizione all'interno della matrice.
 Es.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/
function matrixGenerator(x, y) {
    let matrix = [];
  
    for (let i = 0; i < x; i++) {
      let row = [];
  
      for (let j = 0; j < y; j++) {
        let value = i + '' + j;
        row.push(value);
      }
  
      matrix.push(row);
    }
  
    return matrix;
}
let matrix = matrixGenerator(3, 2);
console.log(matrix);
/* SCRIVI QUI LA TUA RISPOSTA */