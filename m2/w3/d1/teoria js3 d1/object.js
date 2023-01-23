//in js è possibile assegnare ad una variabile un valore di diversi tipi:
//stringhe,numeri, boolean, undefined, null ecc...

//ma qualsiasi valore NON primitivo diventa parte della famiglia degli oggetti

// Che cosa è un oggetto?
// è un contenitore delimitato da parentesi graffe{}
// che al suo interno può contenere un numero potenzialmente illimitato di coppie 
// chiave valore

const obj={} // <-- ho dichiarato quest'oggetto vuoto con la NOTAZIONE LETTERALE

const dog ={
    breed:"Pomeradian", // una proprietà
    age: 2, //ogni proprietà è rappresentata da una coppia chiave-valore
    bark:function(){// un metodo
        console.log("I bark")
    },
}

//usare "" se il nome della proprietà è scritta con una sintassi non valida
const cat ={
    "fur-type":"short",
    "date.of.adoption": "01/01/2023",
}

const rabbit= {
    color:"white",
    eat: function(){
        alert("I'm eating!")
    },
    residence:{ // il valore di una proprietà può essere anche un obj
        street: "via Roma 1",
        zipCode:20100,
    }
};

//come accedo ad una proprietà???
// 1) DOT NOTATION
console.log(rabbit.color);
console.log(rabbit.residence.zipCode);

// 2) SQUARE BRACKETS NOTATION
console.log(cat["date.of.adoption"]);
console.log(cat["fur-type"]);
console.log(rabbit["color"]);

// cosa da? Visto che la proprietà stefano non c'è?
console.log(rabbit.stefano) //darà UNDEFINED

rabbit.stefano = 100; //adesso rabbit conterrà pure stefano

// questa caratteristica di aggiungere nuove coppie chiave-valore agli oggetti
// viene definita "CREAZIONE PER DEFINIZIONE"
console.log(rabbit.stefano)//<--100

console.log(rabbit);
delete rabbit.stefano //elimina la coppia chiave-valore tramite il nome
console.log(rabbit); //stefano non c'è più

// quindi gli oggetti js sono di entità dinamiche, possono evolversi/modificarsi nel
// corso del tempo, durante l'esecuzione degli script.
// Possiamo dire che gli oggetti JS possono beneficiare di una DEFINIZIONE INCREMENTALE:
// si parte da una definizione BASE, e arricchirla man mano


//usando "THIS" si accede alle proprietà all'interno della funzione dentro l'obj
const student = {
    name: "Mario",
    surname:"Rossi",
    age: 25,
    sayYourName:function(){
        return this.name +" "+ this.surname
    },
}

console.log(student.sayYourName())//<--"Mario Rossi"

let singer ={
    name:"Gianni",
    surname:"Morandi",
    sayHello:function(){
        return "hello,my name is "+ this.name +" "+this.surname
    }//dovreste evitare di utilizzare singer invece che this 
};

let anotherSinger = singer;
singer= null;
console.log(anotherSinger.sayHello())

// console.log(singer.sayHello())




// ATTENZIONE A CREARE COPIE DI PRIMITIVE O OGGETTI

let x= 10;
let y= x; //quindi y=10
x = x + 1; //quindi x = 11

console.log(y)//anche se cambi x, y non è affetto dal cambiamento quindi 10

let obj1 ={
    name: "Stefano",
    surname:"Casasola",
}

let obj2=obj1;//questa non è una copia dell'oggetto ma soltanto un nuovo
//modo per accedere a obj1 - perchè NON è un dato primitivo

obj2.name = "Carlo";
console.log(obj1.name);//essendo un obj(quindi non è una primitiva)
// ---viene affetto dal cambiamento della riga 108---




// METODI PRATICI PER CREARE CLONI DI OGGETTI

// 1) SPREAD OPERATOR(...)
let realObj1Copy = {
    ...obj1 //questo è un NUOVO OGGETTO
}
realObj1Copy.name ="Gino";
console.log(obj1.name) //non sarà affetto da cambiamenti=darà CARLO e non Gino


// 2) OBJECT.ASSIGN({})
// richiede due parametri target {}, e una source 

let realObj1CopySecond = Object.assign({}, obj1);
realObj1CopySecond.name ="Pino";
console.log(obj1.name)//non sarà affetto da cambiamenti=darà CARLO e non Pino