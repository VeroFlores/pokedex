const ENDPOINT = `https://pokeapi.co/api/v2/pokemon`

export const pokemonRow=(pokemon)=>{
    const itemCard=`
    <tr class = "pokemon-item">
        <td class = "pokemon-name">
           ${pokemon.name}
        </td>
        <td>
        <input type = "button" class = "pokemon-selected" value="Add to cart">
        </td>
       
    </tr>
    `;
    return itemCard;
}

const pokemonList = document.querySelector('.pokedex-table');
const selectedPokemon=document.querySelector('.pokemon-selected');


const getPokemons =  () => {
    return fetch(`${ENDPOINT}`, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json"
      },
    }).then(res => {
      if (!res.ok) throw new Error('Response is NOT ok')
      return res.json()
    }).then(response => {
        const {results} = response
      let html = '';
      results.forEach(pokemon=> {
        html+=pokemonRow(pokemon);
        pokemonList.innerHTML=html

      })
    })
  }

  const getPokemonInfo =  (id) => {
    return fetch(`${ENDPOINT}/${id}`, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json"
      },
    }).then(res => {
      if (!res.ok) throw new Error('Response is NOT ok')
      return res.json()
    }).then(response => {
        const {results} = response
      let html = '';
      results.forEach(pokemon=> {
        html+=pokemonRow(pokemon);
        pokemonList.innerHTML=html

      })
    })
  }
  getPokemons()