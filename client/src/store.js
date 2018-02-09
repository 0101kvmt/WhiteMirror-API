import { createStore, applyMiddleware } from 'redux';
import reducer from './reducer';

import { persistStore, persistReducer } from 'redux-persist';

import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { loadState, saveState } from './../localStorage.js';
import storage from 'redux-persist/lib/storage';

const persistedState = loadState();

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducer);


export const store = createStore(
    persistedReducer,
    applyMiddleware(
      createLogger(),
      thunkMiddleware
    )
  );

export const persistor = persistStore(store);
