let nameInput = document.getElementById("name")
let surnameInput = document.getElementById("surname")
let dateInput = document.getElementById("date")
let loginButton = document.getElementById("login-button")
let tabella = document.getElementById("tabella-utenti")

const User= function(name, surname, date){
    this.name = name,
    this.surname = surname,
    this.date = date,
}

loginButton.onclick= function(){
    const row = document.createElement("tr");
    const nomeCell = document.createElement("td");
    nomeCell.innerHTML = User.nome;
    row.appendChild(nomeCell);
    const cognomeCell = document.createElement("td");
    cognomeCell.innerHTML = User.cognome;
    row.appendChild(cognomeCell);
    const dataCell = document.createElement("td");
    dataCell.innerHTML = User.data;
    row.appendChild(dataCell);
    tableBody.appendChild(row);
}

