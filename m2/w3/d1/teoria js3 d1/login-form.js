let userInput = document.getElementById("username")
let passwordInput = document.getElementById("password")
let loginButton = document.getElementById("login-button")
let block1 = document.getElementById("block1")
let block2 = document.getElementById("block2")

//creo un costruttore per uno User
const User = function(){
    this.name = "",
    this.privilegeLevel = -1         //può essere -1,0,1 a seconda di
    //un utente non loggato, loggato come semplice User, loggato come Admin
}


User.prototype.userType = null //valore di default

const Admin = function(){
    this.id = "ADMIN"
    this.access = "Unlimited"
}

//abbiamo creato un costruttore per un utente di default, non loggato e senza nome
// poi alla riga 15 abbiamo aggiunto una proprietà al suo prototipo, "userType"
// che di default è null ma se l'utente si rivelerà essere un admin si popolerà con
// un oggetto di due proprietà : id e access


//vogliamo una struttura così:
//user -> {
    //name : "user",
    //privilegeLvel: 1,
    //userType:{
    //      id:"ADMIN",
    //      access:"unlimited"
  //  }
//}


//creiamo un utente corrente, che sta utilizzando il form
let currentUser = new User()
console.log( "utente iniziale", currentUser)

loginButton.onclick = function(){
    //situazione in cui l'utente si logga come user
    if(userInput.value === "user" && passwordInput === "123"){
        //applichiamo a currentUser, il nostro utente di default, questi valori:
        currentUser.privilegeLevel = 0
        currentUser.userType = null// per sicurezza riazzero la proprietà userType
    }
    //situazione in cui l'utente si logga come admin
    else if(userInput.value === "admin" && passwordInput === "123"){
        //applichiamo a currentUser, il nostro utente di default, questi valori:
        currentUser.privilegeLevel = 1
        currentUser.userType = new Admin()
    }else{
        //se le credenziali sono sbagliate
        currentUser.privilegeLevel = -1
        currentUser.userType = null //per sicurezza riazzero la proprietà userType
    }
    console.log("dopo il login" + currentUser)

    currentUser.name = userInput.value

    if(currentUser.privilegeLevel > -1) {
        block1.innerHTML = "<h2>Benvenuto" + currentUser.name + "!</h2>"
        block2.innerHTML = "" //va popolato solo se siamo degli admin!
    }else{
        //se non siamo nessuno...
        block1.innerHTML = "<h2>Username e/o password errate : (</h2>"
        block2.innerHTML = "" //va popolato solo se siamo degli admin!
    }
    if(currentUser.userType){
        //userType NON è NULL
        //
        block2.innerHTML = "<h2>RUOLO ADMIN</h2>" 
    }
}

