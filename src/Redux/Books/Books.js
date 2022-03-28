const ADD_BOOK = 'bookStore/Books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/Books/REMOVE_BOOK';
const SET_BOOKS = 'bookStore/Books/SET_BOOKS';
const CLEAR_BOOKS = 'bookStore/Books/CLEAR_BOOKS';

const initialState = [];

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});

export const setBooks = (payload) => ({
  type: SET_BOOKS,
  payload,
});

export const clearBooks = () => ({
  type: CLEAR_BOOKS,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((book) => book.item_id !== action.payload);
    case CLEAR_BOOKS:
      return initialState;
    case SET_BOOKS:
      return state.concat(action.payload);

    default:
      return state;
  }
};

export default reducer;
