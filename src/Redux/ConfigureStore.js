import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import booksReducer from './Books/Books';

const reducer = combineReducers({
  booksReducer,
});

const store = createStore(reducer, applyMiddleware(logger));

export default store;
