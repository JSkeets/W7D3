import React from 'react';
import ReactDOM from 'react-dom';
import Root from '../frontend/components/root';
import configureStore from '../frontend/store/store';

document.addEventListener('DOMContentLoaded', () => {
  const rootEl = document.getElementById('root');
  let store = configureStore();
  ReactDOM.render(<Root store={store} />, rootEl);

});
