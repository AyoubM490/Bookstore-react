import BookstoreApi from '../../api/bookstore-api';

const GET_BOOKS_REQUEST = 'bookstore-cms/books/GET_REQUEST';
const GET_BOOKS_SUCCESS = 'bookstore-cms/books/GET_SUCCESS';
const GET_BOOKS_FAILURE = 'bookstore-cms/books/GET_FAILURE';

const ADD_BOOK_REQUEST = 'bookstore-cms/books/ADD_REQUEST';
const ADD_BOOK_SUCCESS = 'bookstore-cms/books/ADD_SUCCESS';
const ADD_BOOK_FAILURE = 'bookstore-cms/books/ADD_FAILURE';

const DELETE_BOOK_REQUEST = 'bookstore-cms/books/DELETE_REQUEST';
const DELETE_BOOK_SUCCESS = 'bookstore-cms/books/DELETE_SUCCESS';
const DELETE_BOOK_FAILURE = 'bookstore-cms/books/DELETE_FAILURE';

const initialState = {
  loading: false,
  bookList: {},
  error: '',
};

// get book action creators
export function getBooksRequest() {
  return {
    type: GET_BOOKS_REQUEST,
  };
}

export function getBooksSuccess(bookList) {
  return {
    type: GET_BOOKS_SUCCESS,
    payload: bookList,
  };
}

export function getBooksFailure(error) {
  return {
    type: GET_BOOKS_FAILURE,
    payload: error,
  };
}

export function getBooks() {
  return (dispatch) => {
    dispatch(getBooksRequest());
    BookstoreApi.getBooks()
      .then((data) => {
        dispatch(getBooksSuccess(data));
      })
      .catch((error) => dispatch(getBooksFailure(error.message)));
  };
}

// add book action creators
export function addBookRequest() {
  return {
    type: ADD_BOOK_REQUEST,
  };
}

export function addBookSuccess(book) {
  return {
    type: ADD_BOOK_SUCCESS,
    payload: book,
  };
}

export function addBookFailure(error) {
  return {
    type: ADD_BOOK_FAILURE,
    payload: error,
  };
}

export function addBook(book) {
  return (dispatch) => {
    dispatch(addBookRequest());
    const {
      itemId, title, author, category,
    } = book;
    BookstoreApi.addBook(itemId, title, author, category)
      .then(() => {
        const newBook = {};
        newBook[itemId] = [{ title, author, category }];
        dispatch(addBookSuccess(newBook));
      })
      .catch((error) => {
        dispatch(addBookFailure(error.message));
      });
  };
}

// delete book action creators
export function deleteBookRequest() {
  return {
    type: DELETE_BOOK_REQUEST,
  };
}

export function deleteBookSuccess(id) {
  return {
    type: DELETE_BOOK_SUCCESS,
    payload: id,
  };
}

export function deleteBookFailure(error) {
  return {
    type: DELETE_BOOK_FAILURE,
    payload: error,
  };
}

export function deleteBook(id) {
  return (dispatch) => {
    dispatch(deleteBookRequest());
    BookstoreApi.deleteBook(id)
      .then(() => {
        dispatch(deleteBookSuccess(id));
      })
      .catch((error) => {
        dispatch(deleteBookFailure(error.message));
      });
  };
}

// book reducer

export default function bookReducer(
  state = initialState,
  action,
) {
  switch (action.type) {
    // get book
    case GET_BOOKS_REQUEST:
      return { ...state, loading: true };

    case GET_BOOKS_SUCCESS:
      return {
        loading: false,
        bookList: action.payload,
        error: '',
      };

    case GET_BOOKS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    // add book
    case ADD_BOOK_REQUEST:
      return { ...state, loading: true };

    case ADD_BOOK_SUCCESS:
      return {
        loading: false,
        bookList: { ...state.bookList, ...action.payload },
        error: '',
      };

    case ADD_BOOK_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    // delete book
    case DELETE_BOOK_REQUEST:
      return { ...state, loading: true };

    case DELETE_BOOK_SUCCESS:
      return {
        loading: false,
        bookList: Object.fromEntries(
          Object.entries(state.bookList).filter(
            (e) => e[0] !== action.payload,
          ),
        ),
        error: '',
      };

    case DELETE_BOOK_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
