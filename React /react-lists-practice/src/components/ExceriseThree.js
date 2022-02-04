import data from '../data/data'

// * 🦉 Map over the pokemon data to produce a pokemon "card" for each pokemon
// * Each card should be made up of a parent "div", containing an "h3" for the pokemons name, and "img" tag for the pokemons sprite, and a "p" tag containing the pokedex entry text
// * 🤖 Remember to add a "key" prop to the outer most element created from a "map", it can be any type of value, but must be UNIQUE for every item.

function ExerciseThree() {
  const pokemonData = data
  console.log(pokemonData)

  return (
    <div className="ex-3">
      <h1>3</h1>
      {pokemonData.map(pockemon => 
        (
          <div key={pockemon.number}>
            <h3>{pockemon.name}</h3>
            <img src={pockemon.sprite} alt={pockemon.name}/>
            <p>{pockemon.pokedexEntry}</p>
          </div>
        ))
      }
    </div>
  )
}

export default ExerciseThree
