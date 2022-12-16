const person = [
    {firstname: "Malcolm", lastname:"reynols"},
    {firstname: "Kaylee", lastname:"Frye"},
    {firstname: "Jayne", lastname:"Cobb"}
];

function fullNameAll(persons){
    const All=[];
    for (let i = 0; i<persons.length; i++){
        All.push([persons[i].firstname,persons[i].lastname].join(""))
    }
    return All
}
//console.log(fullNameAll(person))

//al posto di fare tutto questo si può utilizzare map()

const fullNameAll2 = person.map(p=> {
    return [p.firstname,p.lastname].join("");
})
console.log(fullNameAll2)


const numbers = [1,2,3,4,5,6,7,8,9,10];
function add(array){
    let total;
    for(let i = 0;i<array.length;i++){
        total += array[i]
    }
    return total;
}
console.log(add(numbers))

//al posto di fare questo di può usare reduce()

const total2= numbers.reduce((acc,cur)=>{
    return acc + cur
},0)// 

console.log(total2)

const filter = numbers.filter(n=> n % 2 === 0)
console.log(filter)

//RIPASSO FORM EVENTS

const err= document.getElementById("err")//id 

const form = document.getElementById("form")//id form
const nameText = document.getElementById("name")//id div name
const pass = document.getElementById("psw")//id div psw
const button = document.getElementById("btn")
form.addEventListener("submit", (e)=>{
    let msgs = [];//lo pushiamo in un array
    if (nameText.value ===""|| nameText.value == null){
        msgs.push("Il nome non può essere vuoto");
    }
    if (pass.value === "" || pass.value == null){
        msgs.push("ILa password non può essere vuota")
    }
    if(msgs.length>0){
        e.preventDefault() //una boolean che dice di non fare submit per la presenza di un errore 
        err.innerHTML= msgs.join("br");
    }
})

button.addEventListener("click",()=>{
    alert ("")
})