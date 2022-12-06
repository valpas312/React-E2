import React, { useState } from "react";
import axios from "axios";

const Pokedex = () => {
  const [pokemon, setPokemon] = useState(null);
  const [id, setId] = useState('');

  const handleClick = () => {
      axios
        .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then((res) => {
            console.log(res.data)
            setPokemon(res.data)
        })
        .catch((err) => console.error(err));
  }
  return (
    <>
    <form onSubmit={e => e.preventDefault()}>
      <h1>PokeAPI con Axios y React</h1>
      <input
        type="text"
        placeholder="ID del Pokémon"
        value={id}
        onChange={e => setId(e.target.value)}
      />
      <button onClick={handleClick}>Obtener Pokémon</button>
    </form>
      {pokemon && (
        <div>
          <h2>{pokemon.name}</h2>
          <img src={pokemon.sprites.front_default} alt={pokemon.sprites.front_shiny} />
          <p>Altura: {pokemon.height}</p>
          <p>Peso: {pokemon.weight}</p>
        </div>
      )}
    </>
  );
};

export default Pokedex;
