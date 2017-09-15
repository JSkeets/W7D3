
import values from 'lodash/values';

export const selectAllPokemon = (state) => {
  return values(state.entities.pokemon);
};

// export const selectSinglePokemon = (state,pokeId) => {
//   console.log("INSIDE THE SELECTOR",state.entities.pokemon.pokemon);
//   return state.entities.pokemon[pokeId];
// };

export const selectSinglePokemon = (state) => {
  console.log("INSIDE THE SELECTOR",state.entities.pokemon.pokemon);
  return state.entities.pokemon.pokemon;
};

export const selectSinglePokemonItems = (state) => {
  return state.entities.pokemon.items;
};
