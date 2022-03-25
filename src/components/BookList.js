import React from 'react';
import PropTypes from 'prop-types';
import BookItem from './BookItem';

const BookList = (props) => {
  const { books, removeBookProps } = props;

  return (
    <ul>
      {books.map((book) => (
        <BookItem
          removeBookProps={removeBookProps}
          bookProps={book}
          key={book.id}
        />
      ))}
    </ul>
  );
};

BookList.propTypes = {
  books: PropTypes.node.isRequired,
  removeBookProps: PropTypes.func.isRequired,
};

export default BookList;
