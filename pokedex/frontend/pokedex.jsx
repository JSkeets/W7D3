import React from 'react';
import ReactDOM from 'react-dom';
import Root from '../frontend/components/root';
import configureStore from '../frontend/store/store';
import { HashRouter, Route} from 'react-router-dom';
import {receiveSinglePokemon} from '../frontend/actions/pokemon_actions';
import {fetchSinglePokemon} from '../frontend/util/api_util';

document.addEventListener('DOMContentLoaded', () => {
  const rootEl = document.getElementById('root');
  let store = configureStore();
  window.store = store;
  window.dispatch = store.dispatch;
  window.getState = store.getState;
  ReactDOM.render(<Root store={store} />, rootEl);

});

window.receiveSinglePokemon = receiveSinglePokemon;
window.fetchSinglePokemon = fetchSinglePokemon;
