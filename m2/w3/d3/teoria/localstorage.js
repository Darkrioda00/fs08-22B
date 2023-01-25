const textAreaReferance = document.getElementById("text")
const saveButtonReferance = document.getElementById("save-button")
const loadButtonReferance = document.getElementById("load-button")
const resetButtonReferance = document.getElementById("reset-button")

const saveKey = "savedText" // altrimenti usare la stringa a mamo sotto

const load =function(){
    //recuper il contenuto precedente salvato il localStorage
    let savedContent = localStorage.getItem(saveKey)
    textAreaReferance.value= savedContent
    console.log("contenuto caricato il text area")
}

const reset = function(){
    textAreaReferance.value = ""
    console.log("text-area vuota")
}

const save = function(){
    // save prende il contenuto della textarea e lo slava in localStorage
    let content =textAreaReferance.value
    localStorage.setItem(saveKey, content)
    console.log("contenuto salvato")
}



//3 modi per richiamare la funzione 
// 1) onclick in html(guarda load)

// 2) onclick che richiama la funzione
resetButtonReferance.onclick = reset

// 3)  addEventListener("click", load) e richiama la funzione all'evento del click
saveButtonReferance= addEventListener("click", save)
