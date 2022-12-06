import React, { useState } from "react";
import axios from "axios";
import { StyledBtn, StyledForm, StyledInput } from "../StyledComponents/StyledPokedex";

const Pokedex = () => {
  const [pokemon, setPokemon] = useState(null);
  const [id, setId] = useState('');

  const HandleClick = () => {
    id ?(
      axios
        .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then((res) => {
            console.log(res.data)
            setPokemon(res.data)
        })
        .catch((err) => {
          <h2>Error al obtener pokemon</h2>
          console.error(err)
        })
    ) : <h2>Pokemon no encontrado</h2>
    }
    
  return (
    <>
    <StyledForm onSubmit={e => e.preventDefault()}>
      <h1>PokeAPI con Axios y React</h1>
      <StyledInput
        type="text"
        placeholder="ID del Pokemon"
        value={id}
        onChange={e => (
          e.target.value > 906 || e.target.value === "0" || isNaN(e.target.value)
          ? alert("Ingresa un ID valido entre 1 y 906")
          : setId(e.target.value) 
          )}
        required
      />
      <StyledBtn onClick={HandleClick}>Buscar Pokemon</StyledBtn>
    </StyledForm>
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
