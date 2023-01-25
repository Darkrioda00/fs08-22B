// I web storage sono stati introdotti con HTML5, sono nati per risolvere alcune
// limitazioni presenti con i vecchi sistemi di storage, ad es, i cookie:
// 1) i cookie permetto di salvare una quantità di spazio limitato (4kb),
// mentre le nuove API Webstorage permettono di salvare circa 5MB
// 2) i cookie non eran0 stati pensati in modo da differenziare i dati nelle diverse
// sessioni

// Problemi risolti con le API di WebStorage, esistono due memorie:
// 1) localStorage -> permanenza dei dati finchè non li si cancella
// 2) sessionStorage -> permanenza dei dati finchè il tab o la finestra rimane aperto

//utilizziamo gli stessi metodi JS!
// .setItem() -->sempre stringa dentro le (),imposto chiave/valore
// .getItem() -->basta la chiava

localStorage.setItem("theme","dark") // imposto nel localStorage una chiave di nome

let currentTheme = localStorage.getItem("theme") //leggo la chiave di nome "theme",
//ottengo il suo valore dark
console.log(currentTheme)//<--"dark"

localStorage.removeItem("theme")//elimino la chiave "theme" dal localStorage
let currentThemeNow = localStorage.getItem("theme")//<-- ora "theme" non cè più
console.log(currentThemeNow)//darà null




// COSA SUCCEDE SE VOGLIAMO SALVARE UN OGGETTO???
// BISOGNA ATRASFORMARLO PRIMA IN UNA STRIGA PERCHÈ SetItem() ACCETTA SOLO STRINGHE

let Teacher = {
    name:"Stefano",
    subject:"JS"
}
localStorage.setItem("profile", JSON.stringify(Teacher))
// JSON.stringify() prende l'oggetto e lo trasforma in una stringa

let retrievedheacherAssString =localStorage.getItem("profile")
console.log(typeof retrievedheacherAssString)// purtroppo è una stringa :(
//console.log(retrievedheacherAssString,name)<-- non funziona perchè è una stringa

//come ritrasformo retrievedheacherAssString in un oggetto?
let retrievedTeacher =JSON.parse(retrievedheacherAssString)
// ora retrievedTeacher è l'oggetto principale == Teacher
console.log(retrievedTeacher.name) //<-- stefano


// PER I NUMERI non c'è bisogno di JSON.parse

localStorage.setItem("justANumber",100)//abbiamo salvato 100
let retrievedNumber= localStorage.getItem("justANumber")// abbiamo "recuperato 100"
console.log(typeof retrievedNumber)
//volete riottenere 100 come numero?-> parseInt(retrievedNumber)->
// trasforma "100" in 100