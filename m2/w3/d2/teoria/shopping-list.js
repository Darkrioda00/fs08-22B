let listReference = document.getElementById("elementsList")
let inputReference = document.getElementById("newElement")
let buttonReference = document.querySelector("#addElement")


let elements = []

class ListElement {
    constructor(name){
        this.name = name
    }
}
//Element sarà una classe(uno stampino) che genera delle istanze(delle stampe)


const renderList= function(){

    //puliamo la lista ogni volta che la ricreiamo
    listReference.innerHTML = ""

    //ciclare l'array elements e generare un <li> per ogni elemento
    elements.forEach(el =>{
        let newLi = document.createElement("li")
        newLi.innerText = el.name
        
        //appendiamo il nuovo li alla ul
        listReference.appendChild(newLi)
    })
}

// buttonReference.addEventListener("click", function(){})
//altra dicitura
buttonReference.onclick = function(){
    console.log(" CLICKED!")

    //STEP:
    // 1) creare una nuova istanza di Element a partire dal valore dell'input field
    let elemento = new ListElement(inputReference.value)
    console.log(elemento)

    // 2) aggiungere l'istanza di ListElement alla fine dell'array elements
    elements.push(elemento)
    console.log("array elements: ", elements)

    // 3) popolare la lista di elementi nel DOM
    renderList()//bisogna prima definirla poi usarla quindi starà sopra

    // 4)resettiamo l'input field ogni volta che aggiunge li alla lista
    inputReference.value=""

    // 5) riassegnamo il focus all'input field
    inputReference.focus()
}