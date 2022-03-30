import {
  applyMiddleware,
  combineReducers,
  createStore,
  compose,
} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import categoriesReducer from './categories/categories';
import bookReducer from './books/books';

const rootReducer = combineReducers({
  books: bookReducer,
  categories: categoriesReducer,
});

/* eslint-disable no-underscore-dangle */
const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__
      && window.__REDUX_DEVTOOLS_EXTENSION__(),
  ),
);
/* eslint-enable */

store.dispatch(bookReducer);

export default store;
