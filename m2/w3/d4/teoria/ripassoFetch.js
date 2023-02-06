// https://pokeapi.co/api/v2/pokemon

window.onload = async () => {
    await fetchTuttiPokemon()
  }
  
  const fetchTuttiPokemon = async () => {
    let res = await fetch("https://pokeapi.co/api/v2/pokemon", {
      method: "GET",
    })
    console.log(res)
    const { results: pokemon } = await res.json()
    // let tuttiIPkmn = []
    // pokemon.forEach(async pkm => { //NON USARE FOREACH CON LE PROMISE
    //     let res = await fetch(pkm.url)
    //     let p = await res.json()
    //     tuttiIPkmn.push(p)
    // });
    // console.log(tuttiIPkmn)
    for (let i = 0; i < pokemon.length; i++) {
      const { url } = pokemon[i]
      // console.log(url)
      let res = await fetch(url)
      let pkmnCompleto = await res.json()
      renderSinglePokemon(pkmnCompleto)
    }
  }
  
  
  
  const renderSinglePokemon = ({name, sprites: {other: {"official-artwork": {front_default}}}}) => {
      // const {other} = sprites
      // const {"official-artwork": artwork} = other
      // const {front_default} = artwork
      console.log(name, front_default);
    let container = document.querySelector(".row")
    container.innerHTML += `
    <div class='col'> 
      <div class="card" style="width: 18rem;">
          <img src="${front_default}" class="card-img-top" alt="...">
          <div class="card-body">
              <h5 class="card-title">${name}</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
      </div>
    </div>`
    
  }