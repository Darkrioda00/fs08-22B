// abbiamo visto che JS è un linguaggio di programmazione orientato agli oggetti
//la differenxa principale, tuttavia, con altri linguaggi di programmazione più classici
//come JAVA ecc... JS si basa sul concetto di PROTOTIPO, mentre gli altri si basano
//sul concetto di CLASSE <-------
//grazie alle classi, gli altri linguaggi permettono di estendere le funzionalità
// di una struttura principale creando delle "sottovarianti", delle "sottoclassi"

let obj ={}
// in JS è possibile creare un oggetto direttamente con le{} senza avere il costruttore,
//mentre in altri linguaggi OOP questo non è possibile : è NECESSARIO AVERE
//PRIMA la classe, e poi se ne deriva l'istanza(l'oggetto)

//negli altri linguaggi non è possibile modificare uno "stampino" dopo la sua creazione
//mentre in JS è possibile agire sui prototipi

//con il passare del tempo e l'introduzione di ES6 anche JS ha cominciato a permettere
//ai suoi sviluppatori di utilizzare il concetto di "classe", uniformando gli approcci
//con altri linguaggi più blasonati e rendendo più facile la transizione a sviluppatori
//provenienti da questi linguaggi

class Person {
    //qua definisco la classe
    constructor(name, surname){
        this.name = name
        this.surname = surname
        this.email = ""
    }
}
let marioRossi = new Person("Mario", "Rossi")
//se vogliamo personalizzare l'email
marioRossi.email = "marioRossi@gmail.com"
console.log(marioRossi)

class House{
    constructor(squareMeters, numbersOfRooms){
        this.squareMeters = squareMeters
        this.numbersOfRooms = numbersOfRooms
    }
    
    generateReport(){
        return "Ciao! Sono una casa grande "+ 
        this.squareMeters + 
        " metri quadrati e ho " +
        this.numbersOfRooms +
        " camere"
    }
}
let bigHouse = new House( 130, 6)
console.log(bigHouse.generateReport())
// console.log(House.generateReport())<---questo non funziona
//generateReport non esiste nella CLASSE, esiste solamente nelle ISTANZE della classe

let monolocale = new House(40,2)
console.log(monolocale.generateReport())


//  SOTTOCLASSI ED EREDITARIETÀ

//grazie a questa struttura a classi scopriamo quanto è facile ESTENDERE una classe
//per creare una sottovariante

class Developer extends Person { //con extends copia e incolla le proprietà
    constructor(name, surname, knownLanguages) {

        //----->sSUPER() invoca il costruttore della classe da cui estendere<------
        super(name,surname)
        //Person in questo caso è definita la SUPERCLASSE di Developer
        this.knownLanguages= knownLanguages
    }
}

//un Developer avrà name e surname perchè esistono in Person

// esempio 2
let marioDev = new Developer("Mario","Rossi",["HTML","CSS"])
console.log(marioDev)

class SeniorDeveloper extends Developer{
    constructor(name,surname, knownLanguages, favoriteLang) {
        super(name, surname, knownLanguages)
        this.favoriteLang = favoriteLang
        
    }
    
    showOff(){
        return "I'm an experience developer"
    }
}

let marioSeniorDev = new SeniorDeveloper(
    "mario",
    "rossi",
    [
        {name:"HTML", rating: "8"},
        {name:"CSS", rating: "10"},
    ],
    "Typescript"
)
console.log(marioSeniorDev)
console.log(marioSeniorDev.showOff())