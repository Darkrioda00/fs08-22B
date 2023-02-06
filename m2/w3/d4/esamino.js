window.onload= async()=>{
    await todoFetch()
}

const list = document.getElementById("lista")
const todoFetch= async()=>{
    let data = await fetch("https://dummyjson.com/todos")
    // console.log(data)
    let {todos} = await data.json()
    console.log(todos)
    todos.forEach(todo => {
        let nameTo = todo.todo
        list.innerHTML  += `<li> ${nameTo} </li>`
        console.log(todo.todo)
    });
}
