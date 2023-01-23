//gli oggetti in JS sono molto semplici da realizzare--> {}
// il problema arriva quando vogliamo creare molti oggetti in serie,
//tutti autonomi ed idipendenti, con le stesse coppie chiave/valore
//ad es. diversi oggetti di tipo "persona"

let person1 ={
    name:"Mario",
    surname:"Rossi",
    address:"Via della saggezza 1",
    email: "mario.rossi@gmail.com",
    showName:function(){
        return this.name + " " + this.surname
    }
}
//scrivendolo a mano non possiamo riutilizzarlo,quindi scriverne altri a mano

//il nostro scopo è di scrivere codice riutilizzabile! D R Y

//per aiutarci a scrivere da zero oggetti fatti con la stessa struttura esiste in JS
//il cosiddetto "costruttore"(constructor)
//un costruttore è una funzione JS che va invocata con l'operatore "new"

//per convenzione lettere iniziale MAIUSCOLA(chiamata PascalCase)

//creiamo il costruttore con proprietà uguali a quelli sopra

const Person = function(){
    this.name = "";
    this.surname = "";
    this.address = "";
    this.email = "";
    this.showName = function() {};
}//se diamo dei valori-->lo stampino avrà quel valore di default

//creiamo una variabile utilizzando lo stampino Person

let giuseppeVerdi = new Person();
console.log(giuseppeVerdi);//avrà tutte le proprietà ma vuote

//diamo dei valori a delle proprietà
giuseppeVerdi.name = "Giuseppe"
giuseppeVerdi.surname = "Verdi"
console.log(giuseppeVerdi)//avrà il nome e il cognome dato (Giuseppe e Verdi)

//esempio 2
let marioRossi = new Person();
marioRossi.name = "Mario";
marioRossi.surname = "Rossi";
marioRossi.email = "mario.rossi@gmail.com";
console.log(marioRossi)



//step successivp: utilizzare i parametri del costruttore per immediatamente
//assegnare qualche valore alle nostre istanze

const NamedPerson = function(name, surname, email){
    this.name = name;
    this.surname = surname;
    this.address = "";
    this.email = email;
    this.showName = function() {};
}

const francoVerdi = new NamedPerson(
    "Franco",
    "verdi",
    "franco.verdi@gmail.com",
    "Via della Randa 50" //questo non lo leggerà perchè non è stato messo nei parametri della funzione
)
console.log(francoVerdi);

//esempio 2
const ginoBrulli = new NamedPerson("Gino","Brulli","gino.brulli@gmail.com");
ginoBrulli.address = "Via della Randa 50";//questo lo leggerà perchè lo inseriamo dopo
console.log(ginoBrulli);
// in questo modo creiamo degli oggetti con qualche proprietà gia compilata