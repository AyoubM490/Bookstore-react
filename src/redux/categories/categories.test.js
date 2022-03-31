import { createStore } from '@reduxjs/toolkit';
import categoriesReducer, {
  checkStatus,
} from './categories';

describe('categoriesReducer', () => {
  it('should return an empty array initially', () => {
    const store = createStore(categoriesReducer);
    expect(store.getState()).toEqual([]);
  });

  it('should return "Under Construction" for checkStatus action', () => {
    const store = createStore(categoriesReducer);
    store.dispatch(checkStatus());
    expect(store.getState()).toEqual('Under Construction');
  });
});
