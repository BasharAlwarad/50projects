const poke_container = document.getElementById('poke-container')
const pokemon_count = 10
const colors = {
  fire: '#FDDFDF',
  grass: '#DEFDE0',
  electric: '#FCF7DE',
  water: '#DEF3FD',
  ground: '#f4e7da',
  rock: '#d5d5d4',
  fairy: '#fceaff',
  poison: '#98d7a5',
  bug: '#f8d5a3',
  dragon: '#97b3e6',
  psychic: '#eaeda1',
  flying: '#F5F5F5',
  fighting: '#E6E0D4',
  normal: '#F5F5F5',
}

// const main_types = Object.keys(colors)
const fetchPokemon = async () => {
  for (let i = 1; i < pokemon_count; i++) {
    await getPokemon(i)
  }
}

const getPokemon = async id => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`
  const res = await fetch(url)
  const data = await res.json()
  createPokemonCard(data)
}

const createPokemonCard = ({ id, name, types }) => {
  const pokemonEl = document.createElement('div')
  name = name[0].toUpperCase(0) + name.slice(1)
  const num = id.toString().padStart(3, '0')
  const poke_types = types.map(type => type.type.name)
  const color = colors[poke_types[0]]
  // const color = colors[poke_types.find(type => main_types.indexOf(type) > -1)]

  pokemonEl.style.backgroundColor = color

  const type = (() => {
    let type = ''
    poke_types.forEach(t => {
      type += ` ${t}`
    })
    return type
  })()

  pokemonEl.classList.add('pokemon')
  pokemonEl.innerHTML = `
  <div class="img-container">
          <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg"
            alt="pokemon"
          />
        </div>
        <div class="info">
          <span class="number">#${num}</span>
          <h3 class="name">${name}</h3>
          <small class="type">Type: <span>${type}</span></small>
        </div>
  `
  poke_container.appendChild(pokemonEl)
}

fetchPokemon()
