import merge from 'lodash/merge';
import {RECEIVE_ALL_POKEMON} from '../actions/pokemon_actions';
import {RECEIVE_SINGLE_POKEMON} from '../actions/pokemon_actions';

const initialState = {};

const pokemonReducer = (state = initialState,action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ALL_POKEMON:
      return merge({},state,action.pokemon);
    case RECEIVE_SINGLE_POKEMON:
      return merge({},state,{ [action.poke.pokemon.id]: action.poke});
    default:
      return state;
  }
};

export default pokemonReducer;
