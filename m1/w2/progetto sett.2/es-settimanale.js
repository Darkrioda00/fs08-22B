/* es-settimanale.js
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ['dog', 'cat', 'hamster', 'redfish'];

console.log(pets);

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/
let orderpets = pets.sort();
console.log(orderpets);
/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/
let unorderpets = pets.reverse();
console.log(unorderpets);

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/
pets.shift(pets);
pets.unshift("cat");
pets.pop(pets);
pets.push("redfish");

console.log(pets);



/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: 'Ford',
    model: 'Fiesta',
    color: 'red',
    trims: ['titanium', 'st', 'active'],
  },
  {
    brand: 'Peugeot',
    model: '208',
    color: 'blue',
    trims: ['allure', 'GT'],
  },
  {
    brand: 'Volkswagen',
    model: 'Polo',
    color: 'black',
    trims: ['life', 'style', 'r-line'],
  },
]
cars[0].licensePlate = "AU867LO";
cars[1].licensePlate = "FR239YY";
cars[2].licensePlate = "BB442SR";
console.log(cars);


/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/
cars[3] = {
  brand: 'Tesla',
  model: 'S',
  color: 'black',
  trims: ['plaid', 'base'],
  licensePlate: "CA234VC",
};


for (let i = 0; i< cars.length; i++){
  cars[i].trims.splice(cars[i].trims.length -1, 1);

}console.log(cars);



/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
justTrims=[];

for (let i = 0; i< cars.length; i++){
  let trims= cars[i].trims
  justTrims.push(trims[0]);
}console.log(justTrims);


console.log(cars);
/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/
for (let i = 0; i< cars.length; i++){
  if(cars[i].color.charAt() === "b"){
  console.log("Fizz");
  }else{
  console.log("Buzz");
  }
}

/* ESERCIZIO 9
  Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
]
let i = 0;
while (numericArray[i] == 32) {
  console.log(numericArray[i]);
  i++;
}


/* ESERCIZIO 10
  Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
  dell'alfabeto italiano.
  es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ["g", "n", "u", "z", "d"]
const newArray=[];
for (let i = 0; i< charactersArray.length; i++){
let sos = charactersArray[i];

switch(sos){
  case "g":
    position = 7;
    break;
  case "n":
    position = 14;
    break;
  case "u":
    position = 21;
    break;
  case "z":
    position = 26;
    break
  case "d":
    position = 4;
  break;
}
newArray.push(position);
}
console.log(newArray);
