import React, { Component } from 'react';
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux';
import { persistStore, autoRehydrate } from 'redux-persist'
import localForage from 'localforage';

import * as reducers from '../reducers';
import Cleric from './cleric';

const reducer = combineReducers(reducers);
//const store = createStore(reducer);

const store = createStore(
  reducer
  , undefined
  //, autoRehydrate()
)
//persistStore(store, {storage: localForage});
//const persist_store = persistStore(store, {storage: localForage});
//persist_store.purge();

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Cleric />
      </Provider>
    );
  }
}
