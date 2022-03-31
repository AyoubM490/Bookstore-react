import {
  createStore,
  applyMiddleware,
} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import bookReducer, {
  getBooksRequest,
} from './books';

const initialState = {
  loading: false,
  bookList: [],
  error: '',
};

describe('getBooksRequest', () => {
  it('should return the initial state initially', () => {
    const store = createStore(
      bookReducer,
      applyMiddleware(thunk),
    );

    expect(store.getState()).toEqual(initialState);
  });

  it('should return an object that have a property loading set to true', () => {
    const store = createStore(
      bookReducer,
      applyMiddleware(thunk),
    );

    store.dispatch(getBooksRequest());

    expect(store.getState().loading).toBeTruthy();
  });
});
