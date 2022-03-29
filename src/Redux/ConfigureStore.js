import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import categoriesReducer from './categories/categories';
import booksReducer from './Books/Books';

const reducer = combineReducers({
  booksReducer,
  categoriesReducer,
});

const middleware = [thunk, logger];

const store = createStore(reducer, applyMiddleware(...middleware));

export default store;
