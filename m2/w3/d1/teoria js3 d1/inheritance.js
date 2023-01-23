// EREDITARIETÀ
// potreste trovarvi nella situazione di voler riutilizzare un costruttore
// anche in altri contesti, quindi nasce la neccessità di poter ESPANDE questo
//costruttore in un secondo momento

const Person = function(name, surname){
    this.name = name
    this.surname = surname
}
let marioRossi = new Person("Mario", "Rossi")
console.log(marioRossi);

let luigiBros = new Person("Luigi", "Bros")
console.log(luigiBros)

luigiBros.email ="luigi.bros@gmail.com"
console.log(marioRossi);



// Qualche volta vorreste che anche MARIO riceva successivamente la proprietà email
// Come si fa ad aggiungere al costruttore Persone, in una fase successiva, una NUOVA 
// proprietà? si lavora con i PROTOTIPI

// "aggiungiamo" al costruttore una proprietà phone
Person.prototype.phone = "12345"

// abbiamo aggiunto al prototipo person una proprietà "phone" con un valore predefinito
//è come se avessimo aggiunto allo stampino "person" una proprietà con un valore predefinito
console.log(marioRossi.phone) //<--12345
console.log(luigiBros.phone) //<--12345

// phone NON è una proprietà di marioRossi ma del tu PROTOTYPE
//QUINDI---> JS cerca una proprietà nell'oggetto di riferimento e se
//non la trova va a cercarla nel suo prototipo,ed è capace di risalire la 
//catena prototipale fino a 1) trovarla 2) restituire undefined


let wario = new Person ("Mario","wario")
console.log(wario.phone) //<--12345

console.log(marioRossi); //la modifica del phone rimarrà nel PROTOTYPE

