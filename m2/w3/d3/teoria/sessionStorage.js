//quando si chiude il tab si cancella la amemoria

const paragraphReferance = document.getElementById("counter")
const buttonReferance = document.getElementById("increaseButton")



let counterValue = parseInt(sessionStorage.getItem("lastCounterValue")) || 0;
//devo controllare se esiste il localstorage un counterValue
//se esite il valore deve essere preso da li



const refreshCounter = function(){
    paragraphReferance.innerText = counterValue
}
refreshCounter()

const increaseCounter = function(){
    counterValue = counterValue +1 // oppure counterValue++
    sessionStorage.setItem("lastCounterValue",counterValue)
    refreshCounter()
}

buttonReferance.onclick= increaseCounter