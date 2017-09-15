import {RECEIVE_SINGLE_POKEMON} from '../actions/pokemon_actions';
import merge from 'lodash/merge';

const initialState = {};

const itemReducer = (state = initialState,action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_SINGLE_POKEMON:
      return merge({},state,action.poke.items);
    default:
      return state;
  }
};

export default itemReducer;
