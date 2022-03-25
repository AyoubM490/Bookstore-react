import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';
import { addBook, removeBook } from '../Redux/Books/Books';
import InputBooks from './InputBook';
import BookList from './BookList';

const BookContainer = () => {
  const books = useSelector((state) => state.booksReducer);
  const dispatch = useDispatch();

  const addNewBook = (title, author) => {
    const newBook = {
      id: uuidv4(),
      title,
      author,
    };

    dispatch(addBook(newBook));
  };

  const deleteBook = (id) => {
    dispatch(removeBook(id));
  };

  return (
    <div>
      <BookList books={books} removeBookProps={deleteBook} />
      <InputBooks addBooksProps={addNewBook} />
    </div>
  );
};

export default BookContainer;
