import React from 'react';
import { Link } from 'react-router-dom';

export const PokemonIndexItem = (pokemon) => {
  return(
    <li>
      <Link to={`/pokemon/${pokemon.pokemon.id}`}> {pokemon.pokemon.name} </Link>
      <img height="75" width="75" src={pokemon.pokemon.image_url} />
    </li>
  );
};
